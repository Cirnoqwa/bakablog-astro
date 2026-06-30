// src/pages/api/ranking.ts
import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";

interface Item {
  id: string;
  title: string;
  votes: number;
  createdAt: string;
  ips: string[];
  avatar?: string;
  dotColor?: string;
}

interface BoardData {
  title?: string;
  showAvatar?: boolean;
  defaultDotColor?: string;
  items: Item[];
}

const DATA_DIR = path.join(process.cwd(), "public", "data", "Board");

function getFilePath(board: string) {
  const withoutExt = board.replace(/\.json$/i, "");
  const safeBoard = withoutExt.replace(/[^a-zA-Z0-9_-]/g, "");
  return path.join(DATA_DIR, `${safeBoard}.json`);
}

function ensureBoardFile(board: string) {
  const filePath = getFilePath(board);
  if (!fs.existsSync(filePath)) {
    // 递归创建外部的 public/Board/data 文件夹
    fs.mkdirSync(DATA_DIR, { recursive: true });
    const initData: BoardData = { items: [] };
    fs.writeFileSync(filePath, JSON.stringify(initData, null, 2));
  }
  return filePath;
}

function readBoard(board: string): BoardData {
  const filePath = ensureBoardFile(board);
  return JSON.parse(fs.readFileSync(filePath, "utf-8"));
}

function writeBoard(board: string, data: BoardData) {
  const filePath = ensureBoardFile(board);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

function getClientIP(request: Request): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return "127.0.0.1";
}

function sortItems(items: Item[], sort: string) {
  switch (sort) {
    case "votes-asc": return items.sort((a, b) => a.votes - b.votes);
    case "alpha-asc": return items.sort((a, b) => a.title.localeCompare(b.title));
    case "alpha-desc": return items.sort((a, b) => b.title.localeCompare(a.title));
    case "date-asc": return items.sort((a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime());
    case "date-desc": return items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    case "votes-desc":
    default: return items.sort((a, b) => b.votes - a.votes);
  }
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const board = url.searchParams.get("board") || "default";
  const sort = url.searchParams.get("sort") || "votes-desc";
  const data = readBoard(board);
  const sortedItems = sortItems([...data.items], sort);
  return new Response(
    JSON.stringify({
      config: {
        title: data.title || board,
        showAvatar: data.showAvatar ?? false,
        defaultDotColor: data.defaultDotColor || "#d3d3d3",
      },
      items: sortedItems,
    }),
    { headers: { "Content-Type": "application/json" } }
  );
};

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { board = "default", action, id, title } = body;
  const ip = getClientIP(request);
  const data = readBoard(board);

  if (action === "add") {
    if (!title || typeof title !== "string" || !title.trim()) {
      return new Response(JSON.stringify({ error: "标题不能为空" }), { status: 400 });
    }
    const newItem: Item = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      title: title.trim(),
      votes: 0,
      createdAt: new Date().toISOString(),
      ips: [],
    };
    data.items.push(newItem);
    writeBoard(board, data);
    return new Response(JSON.stringify(newItem), { status: 201 });
  }

  if (action === "vote") {
    const item = data.items.find((i) => i.id === id);
    if (!item) {
      return new Response(JSON.stringify({ error: "项目不存在" }), { status: 404 });
    }
    if (item.ips.includes(ip)) {
      return new Response(JSON.stringify({ error: "你已经投过票了" }), { status: 403 });
    }
    item.votes += 1;
    item.ips.push(ip);
    writeBoard(board, data);
    return new Response(JSON.stringify(item), { status: 200 });
  }

  return new Response(JSON.stringify({ error: "无效操作" }), { status: 400 });
};
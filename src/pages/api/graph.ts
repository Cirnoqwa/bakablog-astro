import type { APIRoute } from "astro";
import fs from "node:fs";
import path from "node:path";

const DATA_DIR = path.join(process.cwd(), "public", "data", "Graph");

function getFilePath(board: string) {
  const safeBoard = board.replace(/[^a-zA-Z0-9_-]/g, "");
  return path.join(DATA_DIR, `${safeBoard}.json`);
}

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);
  const board = url.searchParams.get("board") || "links";
  const filePath = getFilePath(board);

  if (!fs.existsSync(filePath)) {
    return new Response(JSON.stringify({ error: "Graph data not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
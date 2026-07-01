import fs from "fs"
import path from "path"

function getUsage() {
  return `Usage:
  node add-board.js add <board-json> <name> [dotColor] [votes] [avatar]
  node add-board.js update <board-json> <item-id> [name] [dotColor] [votes] [avatar]
  node add-board.js delete <board-json> <item-id>

Examples:
  node add-board.js add th.json "博丽灵梦"
  node add-board.js add th.json "博丽灵梦" "#FFB6C1"
  node add-board.js add th.json "博丽灵梦" "#FFB6C1" 1024
  node add-board.js add th.json "博丽灵梦" --avatar ./avatar.png
  node add-board.js update th.json abc123 "雾雨魔理沙" "#00ff00" 999
  node add-board.js delete th.json abc123`
}

function resolveBoardPath(input) {
  if (!input) {
    throw new Error("Missing board JSON argument")
  }

  const candidates = []

  if (path.isAbsolute(input)) {
    candidates.push(input)
  } else {
    candidates.push(path.resolve(process.cwd(), input))
    candidates.push(path.resolve(process.cwd(), "public/data/Board", input))
    if (!input.endsWith(".json")) {
      candidates.push(path.resolve(process.cwd(), "public/data/Board", `${input}.json`))
    }
  }

  for (const candidate of candidates) {
    if (fs.existsSync(candidate)) {
      return candidate
    }
  }

  const fallback = path.resolve(process.cwd(), "public/data/Board", input.endsWith(".json") ? input : `${input}.json`)
  return fallback
}

function buildId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`
}

function resolveAvatarPath(input, boardName) {
  if (!input) return null

  const candidates = []
  if (path.isAbsolute(input)) {
    candidates.push(input)
  } else {
    candidates.push(path.resolve(process.cwd(), input))
    candidates.push(path.resolve(process.cwd(), "public", "Board", boardName, input))
    candidates.push(path.resolve(process.cwd(), "public", input))
  }

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate
    }
  }

  return null
}

const args = process.argv.slice(2)

if (args.length < 1 || args[0] === "-h" || args[0] === "--help") {
  console.error(getUsage())
  process.exit(args.length < 1 ? 1 : 0)
}

const command = args[0]
const subArgs = args.slice(1)

if (!["add", "update", "delete"].includes(command)) {
  console.error(getUsage())
  process.exit(1)
}

let boardArg = ""
let title = ""
let dotColor = ""
let votesArg = ""
let avatarArg = ""
let itemId = ""

for (let index = 0; index < subArgs.length; index += 1) {
  const arg = subArgs[index]
  if (arg === "--avatar" || arg === "-a") {
    avatarArg = subArgs[index + 1] || ""
    index += 1
  } else if (!boardArg) {
    boardArg = arg
  } else if (command === "delete" && !itemId) {
    itemId = arg
  } else if (command === "update" && !itemId) {
    itemId = arg
  } else if (!title) {
    title = arg
  } else if (!dotColor) {
    dotColor = arg
  } else if (!votesArg) {
    votesArg = arg
  } else if (!avatarArg) {
    avatarArg = arg
  }
}

const boardPath = resolveBoardPath(boardArg)
const boardDir = path.dirname(boardPath)
const boardName = path.basename(boardPath, ".json")

if (!fs.existsSync(boardDir)) {
  fs.mkdirSync(boardDir, { recursive: true })
}

let boardData = {
  title: "",
  showAvatar: false,
  defaultDotColor: "#d3d3d3",
  items: [],
}

if (fs.existsSync(boardPath)) {
  try {
    const raw = fs.readFileSync(boardPath, "utf8")
    boardData = JSON.parse(raw)
    if (!boardData.items || !Array.isArray(boardData.items)) {
      boardData.items = []
    }
  } catch (error) {
    console.error(`Failed to parse ${boardPath}:`, error.message)
    process.exit(1)
  }
}

if (command === "delete") {
  const item = boardData.items.find((entry) => entry.id === itemId || entry.title === itemId)
  if (!item) {
    console.error(`Item ${itemId} not found in ${path.relative(process.cwd(), boardPath)}`)
    process.exit(1)
  }
  const before = boardData.items.length
  boardData.items = boardData.items.filter((entry) => entry.id !== item.id)
  if (boardData.items.length === before) {
    console.error(`Item ${itemId} not found in ${path.relative(process.cwd(), boardPath)}`)
    process.exit(1)
  }
  fs.writeFileSync(boardPath, `${JSON.stringify(boardData, null, 2)}\n`, "utf8")
  console.log(`Deleted item ${item.title} (${item.id}) from ${path.relative(process.cwd(), boardPath)}`)
  process.exit(0)
}

let avatarFileName = ""
let avatarResolvedPath = null

if (avatarArg) {
  avatarResolvedPath = resolveAvatarPath(avatarArg, boardName)
  if (avatarResolvedPath) {
    const destDir = path.resolve(process.cwd(), "public", "Board", boardName)
    fs.mkdirSync(destDir, { recursive: true })
    avatarFileName = path.basename(avatarResolvedPath)
    const destPath = path.join(destDir, avatarFileName)
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(avatarResolvedPath, destPath)
    }
  } else {
    console.warn(`Avatar file not found: ${avatarArg}`)
  }
}

if (avatarFileName) {
  boardData.showAvatar = true
}

if (command === "update") {
  const item = boardData.items.find((entry) => entry.id === itemId || entry.title === itemId)
  if (!item) {
    console.error(`Item ${itemId} not found in ${path.relative(process.cwd(), boardPath)}`)
    process.exit(1)
  }

  if (title) item.title = title
  if (dotColor) item.dotColor = dotColor
  if (votesArg !== "") item.votes = Number.isFinite(Number(votesArg)) ? Number(votesArg) : item.votes
  if (avatarFileName) item.avatar = avatarFileName
  else if (avatarArg === "") {
    item.avatar = item.avatar || ""
  }

  fs.writeFileSync(boardPath, `${JSON.stringify(boardData, null, 2)}\n`, "utf8")
  console.log(`Updated item ${itemId} in ${path.relative(process.cwd(), boardPath)}:`)
  console.log(JSON.stringify(item, null, 2))
  process.exit(0)
}

const nextItem = {
  id: buildId(),
  title: title || "未命名",
  votes: Number.isFinite(Number(votesArg)) ? Number(votesArg) : 0,
  createdAt: new Date().toISOString(),
  ips: [],
  avatar: avatarFileName,
  dotColor: dotColor || "",
}

boardData.items.push(nextItem)

fs.writeFileSync(boardPath, `${JSON.stringify(boardData, null, 2)}\n`, "utf8")

console.log(`Added item to ${path.relative(process.cwd(), boardPath)}:`)
console.log(JSON.stringify(nextItem, null, 2))

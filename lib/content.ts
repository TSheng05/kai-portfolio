import fs from "fs"
import path from "path"

// 定位到根目录的 content 文件夹
const contentDirectory = path.join(process.cwd(), "content")

// 通用的读取 JSON 文件函数
export function readJsonFile(filePath: string) {
  try {
    const fullPath = path.join(contentDirectory, filePath)
    if (!fs.existsSync(fullPath)) {
      return null
    }
    const fileContents = fs.readFileSync(fullPath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error)
    return null
  }
}

// 获取某个目录下的所有子文件夹名称 (用于遍历 projects)
export function getDirectories(source: string) {
  try {
    const fullPath = path.join(contentDirectory, source)
    if (!fs.existsSync(fullPath)) return []
    return fs.readdirSync(fullPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)
  } catch (error) {
    console.error(`Error reading directories in ${source}:`, error)
    return []
  }
}
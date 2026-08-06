import { z } from "zod"
import { projectSchema } from "@/schemas/project.schema"

// 基础项目类型（来自 JSON）
export type ProjectBase = z.infer<typeof projectSchema>

// 完整项目类型（包含读取文件夹时动态生成的 slug）
export type Project = ProjectBase & {
  slug: string
}
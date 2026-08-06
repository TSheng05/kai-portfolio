import { z } from "zod"

// 定义单个 Project (项目) 的数据结构
export const projectSchema = z.object({
  title: z.string().optional(),
  description: z.string().optional(),
  techStack: z.array(z.string()).optional(),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  date: z.string().optional(),
})
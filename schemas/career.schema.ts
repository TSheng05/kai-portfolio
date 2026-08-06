import { z } from "zod"

// 定义 About (个人简介) 的数据结构
export const aboutSchema = z.object({
  name: z.string().optional(),
  title: z.string().optional(),
  bio: z.string().optional(),
  email: z.string().email().optional(),
  location: z.string().optional(),
})

// 定义 Experience (工作经验) 的数据结构
export const experienceSchema = z.object({
  id: z.string(),
  company: z.string(),
  role: z.string(),
  startDate: z.string(), // 例如: "2023-01"
  endDate: z.string().optional(), // 可选，代表至今
  description: z.array(z.string()).optional(), // 职责描述，用数组表示多行
})

// 定义 Skill (技能) 的数据结构
export const skillSchema = z.object({
  category: z.string(), // 例如: "Frontend", "Backend"
  items: z.array(z.string()), // 例如: ["React", "Next.js", "TypeScript"]
})

export const timelineSchema = z.object({
  year: z.string(),
  title: z.string(),
  description: z.string().optional(),
})
import { z } from "zod"
import { aboutSchema, experienceSchema, skillSchema, timelineSchema } from "@/schemas/career.schema"

export type About = z.infer<typeof aboutSchema>
export type Experience = z.infer<typeof experienceSchema>
export type Skill = z.infer<typeof skillSchema>
// 新增：Timeline 类型
export type TimelineItem = z.infer<typeof timelineSchema>
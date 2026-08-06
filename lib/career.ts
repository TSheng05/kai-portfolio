import { readJsonFile } from "./content"

export function getAboutData() {
  return readJsonFile("career/about.json") || {}
}

export function getExperienceData() {
  return readJsonFile("career/experience.json") || []
}

export function getSkillsData() {
  return readJsonFile("career/skills.json") || []
}

// 新增：读取 timeline.json
export function getTimelineData() {
  return readJsonFile("career/timeline.json") || []
}
import { readJsonFile, getDirectories } from "./content"

export function getAllProjects() {
  const projectFolders = getDirectories("projects")
  
  const projects = projectFolders.map((folderName) => {
    const projectData = readJsonFile(`projects/${folderName}/project.json`) || {}
    return {
      slug: folderName, // 把文件夹名字作为 URL slug
      ...projectData
    }
  })

  return projects
}

export function getProjectBySlug(slug: string) {
  return readJsonFile(`projects/${slug}/project.json`)
}
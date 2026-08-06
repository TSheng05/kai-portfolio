import { Container } from "@/components/layout/container"
import { getAllProjects } from "@/lib/projects"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Kai Career OS",
  description: "A showcase of my technical projects and experiments.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <Container className="py-12 md:py-24">
      <div className="space-y-12">
        
        {/* 页面标题 */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Projects
          </h1>
          <p className="max-w-[42rem] text-lg leading-relaxed text-muted-foreground">
            A collection of my work, ranging from full-stack applications to open-source tools.
          </p>
        </div>

        {/* 项目卡片网格 */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div 
              key={project.slug} 
              className="group relative flex flex-col justify-between rounded-xl border border-border/40 bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <div className="space-y-4">
                
                {/* 标题与描述 */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">
                    {project.description}
                  </p>
                </div>
                
                {/* 技术栈标签 */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.techStack.map((tech) => (
                      <span 
                        key={tech} 
                        className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              
              {/* 外部链接 */}
              <div className="mt-8 flex items-center gap-4 pt-4 border-t border-border/40">
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    GitHub
                  </a>
                )}
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Container>
  )
}
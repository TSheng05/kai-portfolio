import { Container } from "@/components/layout/container"
import { getAboutData, getExperienceData, getSkillsData } from "@/lib/career"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Resume | Kai Career OS",
  description: "My professional resume and curriculum vitae.",
}

export default function ResumePage() {
  const about = getAboutData()
  const experiences = getExperienceData()
  const skills = getSkillsData()

  return (
    <Container className="py-12 md:py-24">
      {/* 顶部操作栏 */}
      <div className="mb-12 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
        {/* 这里已经完美替换为 a 标签 */}
        <a 
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
        >
          Download PDF
        </a>
      </div>

      {/* 简历实体区域 */}
      <div className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-border/40 bg-card p-8 shadow-sm sm:p-12">
        
        {/* Header 区域 */}
        <header className="mb-10 border-b border-border/60 pb-8 text-center sm:text-left">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {about.name}
          </h2>
          <p className="mt-2 text-lg font-medium text-muted-foreground">
            {about.title}
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground sm:justify-start">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              {about.location}
            </span>
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary/50" />
              {about.email}
            </span>
          </div>
        </header>

        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          
          {/* 左侧边栏 (Skills & Education) */}
          <div className="space-y-10">
            <section className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-foreground">
                Skills
              </h3>
              <div className="space-y-6">
                {skills.map((skillGroup, index) => (
                  <div key={index}>
                    <h4 className="mb-2 text-sm font-medium text-foreground">
                      {skillGroup.category}
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill, i) => (
                        <span 
                          key={i} 
                          className="rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* 右侧主栏 (Summary & Experience) */}
          <div className="space-y-10">
            
            <section className="space-y-4">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-foreground">
                Summary
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {about.bio}
              </p>
            </section>

            <section className="space-y-6">
              <h3 className="text-lg font-semibold uppercase tracking-wider text-foreground">
                Experience
              </h3>
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="space-y-3">
                    <div className="flex flex-col justify-between sm:flex-row sm:items-baseline">
                      <h4 className="text-base font-semibold text-foreground">
                        {exp.role}
                      </h4>
                      <span className="text-sm font-medium text-muted-foreground">
                        {exp.startDate} — {exp.endDate || "Present"}
                      </span>
                    </div>
                    <div className="text-sm font-medium text-primary">
                      {exp.company}
                    </div>
                    {exp.description && (
                      <ul className="ml-4 list-outside list-disc space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                        {exp.description.map((desc, i) => (
                          <li key={i}>{desc}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </div>
        </div>

      </div>
    </Container>
  )
}
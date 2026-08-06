import { Container } from "@/components/layout/container"
import { getExperienceData } from "@/lib/career"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Experience | Kai Career OS",
  description: "My professional work experience and career journey.",
}

export default function ExperiencePage() {
  const experiences = getExperienceData()

  return (
    <Container className="py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-12">
        
        {/* 页面标题 */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Experience
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A timeline of my professional journey.
          </p>
        </div>

        {/* 时间轴区域 */}
        <div className="ml-2 space-y-12 border-l border-border/60 pl-6 md:ml-0 md:pl-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="relative">
              
              {/* 时间轴上的圆点 */}
              <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-border/60 bg-muted ring-4 ring-background md:-left-[37px]" />
              
              <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-muted-foreground">
                    {exp.company}
                  </span>
                </div>
                <div className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0">
                  {exp.startDate} — {exp.endDate || "Present"}
                </div>
              </div>

              {/* 职位描述 (多行渲染) */}
              {exp.description && exp.description.length > 0 && (
                <ul className="mt-4 flex flex-col gap-2.5 text-muted-foreground">
                  {exp.description.map((desc, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                      <span className="text-sm leading-relaxed">{desc}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

      </div>
    </Container>
  )
}
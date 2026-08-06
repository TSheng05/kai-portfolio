import { Container } from "@/components/layout/container"
import { getAboutData, getSkillsData } from "@/lib/career"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Kai Career OS",
  description: "Learn more about my background and technical skills.",
}

export default function AboutPage() {
  // 从本地 JSON 数据库读取数据
  const about = getAboutData()
  const skills = getSkillsData()

  return (
    <Container className="py-12 md:py-24">
      <div className="mx-auto max-w-3xl space-y-16">
        
        {/* 页面标题 */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            About Me
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            A brief look into my background, philosophy, and technical stack.
          </p>
        </div>

        {/* 主要介绍 & 基本信息 */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight">Background</h2>
            <p className="leading-7 text-muted-foreground">
              {about.bio}
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <h3 className="text-sm font-medium text-foreground">Location</h3>
              <p className="text-sm text-muted-foreground">{about.location}</p>
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm font-medium text-foreground">Contact</h3>
              <a 
                href={`mailto:${about.email}`} 
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {about.email}
              </a>
            </div>
          </div>
        </div>

        {/* 技能矩阵区域 */}
        <div className="space-y-6 pt-8 border-t border-border/40">
          <h2 className="text-2xl font-semibold tracking-tight">Technical Skills</h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-sm font-medium text-foreground">
                  {skillGroup.category}
                </h3>
                <ul className="flex flex-col gap-2.5">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </Container>
  )
}
import { Container } from "@/components/layout/container"
import { 
  getAboutData, 
  getExperienceData, 
  getSkillsData, 
  getTimelineData 
} from "@/lib/career"
import { getAllProjects } from "@/lib/projects"

export default function Home() {
  const about: any = getAboutData()
  const skills: any[] = getSkillsData()
  const experiences: any[] = getExperienceData()
  const projects: any[] = getAllProjects()
  const timeline: any[] = getTimelineData()

  return (
    <div className="flex flex-col">
      
      {/* 1. Hero 首页区域 */}
      <section id="home" className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-12 md:py-24">
        <Container>
          <div className="flex max-w-[48rem] flex-col items-start gap-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m {about.name}. <br className="hidden sm:inline" />
              <span className="text-muted-foreground">{about.title}.</span>
            </h1>
            <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
              {about.bio}
            </p>
            <div className="mt-4 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                View Projects
              </a>
              <a
                href="#about"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                More About Me
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. About & Skills 区域 */}
      <section id="about" className="scroll-mt-24 py-16 md:py-24 border-t border-border/40">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Me</h2>
              <p className="text-lg text-muted-foreground">A brief look into my background and technical stack.</p>
            </div>
            
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 pt-8">
              {skills.map((skillGroup, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">{skillGroup.category}</h3>
                  <ul className="flex flex-col gap-2.5">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-muted-foreground">{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Experience 区域 */}
      <section id="experience" className="scroll-mt-24 py-16 md:py-24 border-t border-border/40">
        <Container>
          <div className="mx-auto max-w-3xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Experience</h2>
              <p className="text-lg text-muted-foreground">My professional journey.</p>
            </div>
            <div className="ml-2 space-y-12 border-l border-border/60 pl-6 md:ml-0 md:pl-8">
              {experiences.map((exp) => (
                <div key={exp.id} className="relative">
                  <span className="absolute -left-[29px] top-1.5 h-3 w-3 rounded-full border border-border/60 bg-muted ring-4 ring-background md:-left-[37px]" />
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <span className="text-sm font-medium text-muted-foreground">{exp.company}</span>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground mt-1 sm:mt-0">
                      {exp.startDate} — {exp.endDate || "Present"}
                    </div>
                  </div>
                  {exp.description && (
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
      </section>

      {/* 4. Projects 区域 */}
      <section id="projects" className="scroll-mt-24 py-16 md:py-24 border-t border-border/40">
        <Container>
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h2>
              <p className="max-w-[42rem] text-lg text-muted-foreground">
                Hardware systems, IoT integrations, and software applications.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <div key={project.slug} className="group relative flex flex-col justify-between rounded-xl border border-border/40 bg-card p-6 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold tracking-tight">{project.title}</h3>
                      {/* 这里加入了 group-hover:line-clamp-none 解决文字过长截断问题 */}
                      <p className="text-sm text-muted-foreground line-clamp-3 transition-all duration-300 group-hover:line-clamp-none">
                        {project.description}
                      </p>
                    </div>
                    {project.techStack && (
                      <div className="flex flex-wrap gap-2 pt-2">
                        {project.techStack.map((tech) => (
                          <span key={tech} className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 5. Timeline 区域 */}
      <section id="timeline" className="scroll-mt-24 py-16 md:py-24 border-t border-border/40">
        <Container>
          <div className="mx-auto max-w-2xl space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Timeline</h2>
              <p className="text-lg text-muted-foreground">Key milestones in my journey.</p>
            </div>
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
                  <div className="text-sm font-mono font-medium text-muted-foreground sm:w-20 sm:shrink-0 sm:pt-1">
                    {item.year}
                  </div>
                  <div className="space-y-2 pb-8 sm:pb-12 border-b border-border/40 last:border-0 last:pb-0">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    {item.description && (
                      <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 6. Contact 区域 */}
      <section id="contact" className="scroll-mt-24 py-24 md:py-32 border-t border-border/40">
        <Container className="flex flex-col items-center text-center">
          <div className="max-w-[42rem] space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s work together.</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                I&apos;m currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
            </div>
            <div className="pt-8">
              <a
                href="https://www.linkedin.com/in/kai-sheng-tan-9b969b2a6" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
              >
                Say Hello
              </a>
            </div>
          </div>
        </Container>
      </section>

    </div>
  )
}
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { getAboutData } from "@/lib/career"

export default function Home() {
  // 从我们的 headless JSON 数据库读取数据
  const about = getAboutData()

  return (
    <Container className="flex min-h-[calc(100vh-10rem)] flex-col justify-center py-12 md:py-24">
      <div className="flex max-w-[48rem] flex-col items-start gap-6">
        
        {/* 大标题：极简、高对比度、支持响应式排版 */}
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Hi, I'm {about.name}. <br className="hidden sm:inline" />
          <span className="text-muted-foreground">{about.title}.</span>
        </h1>
        
        {/* 个人简介 */}
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          {about.bio}
        </p>

        {/* 行动号召按钮 (Call to Action) */}
        <div className="mt-4 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            View Projects
          </Link>
          <Link
            href="/about"
            className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            More About Me
          </Link>
        </div>
        
      </div>
    </Container>
  )
}
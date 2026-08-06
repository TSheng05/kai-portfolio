import { Container } from "@/components/layout/container"
import { getTimelineData } from "@/lib/career"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Timeline | Kai Career OS",
  description: "A chronological timeline of my career and life milestones.",
}

export default function TimelinePage() {
  const timeline = getTimelineData()

  return (
    <Container className="py-12 md:py-24">
      <div className="mx-auto max-w-2xl space-y-12">
        
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Timeline
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Key milestones and moments in my journey.
          </p>
        </div>

        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex flex-col gap-2 sm:flex-row sm:gap-8">
              {/* 年份：在左侧固定宽度 */}
              <div className="text-sm font-mono font-medium text-muted-foreground sm:w-20 sm:shrink-0 sm:pt-1">
                {item.year}
              </div>
              
              {/* 内容：标题和描述 */}
              <div className="space-y-2 pb-8 sm:pb-12 border-b border-border/40 last:border-0 last:pb-0">
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </Container>
  )
}
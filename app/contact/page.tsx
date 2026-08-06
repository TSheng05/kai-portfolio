import { Container } from "@/components/layout/container"
import { getAboutData } from "@/lib/career"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Kai Career OS",
  description: "Get in touch with me for collaborations and opportunities.",
}

export default function ContactPage() {
  const about = getAboutData()

  return (
    <Container className="flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center py-12 md:py-24 text-center">
      <div className="max-w-[42rem] space-y-8">
        
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Let's work together.
          </h1>
          <p className="text-lg leading-relaxed text-muted-foreground">
            I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        <div className="pt-8">
          <a
            href={`mailto:${about.email}`}
            className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Say Hello
          </a>
        </div>

      </div>
    </Container>
  )
}
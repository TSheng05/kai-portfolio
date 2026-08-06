import Link from "next/link"
import { Container } from "@/components/layout/container"
import { getAboutData } from "@/lib/career"

export function Footer() {
  const about = getAboutData()

  return (
    <footer className="border-t border-border/40 bg-background text-muted-foreground">
      <Container className="py-12 md:py-16">
        
        {/* 多列链接区 */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          
          <div className="space-y-4 lg:col-span-2">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {about.name}
            </h3>
            <p className="max-w-xs text-sm leading-relaxed">
              {about.bio}
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="https://github.com/TSheng05" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/kai-sheng-tan-9b969b2a6" target="_blank" rel="noreferrer" className="transition-colors hover:text-primary">LinkedIn</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/resume" className="transition-colors hover:text-primary">Resume</Link></li>
              <li><Link href="/projects" className="transition-colors hover:text-primary">Projects</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href={`mailto:${about.email}`} className="transition-colors hover:text-primary">
                  {about.email}
                </a>
              </li>
              <li>{about.location}</li>
            </ul>
          </div>

        </div>

        {/* 底部版权栏 */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-border/40 pt-8 sm:flex-row text-xs">
          <p>
            Copyright © {new Date().getFullYear()} {about.name}. All rights reserved.
          </p>
          <div className="mt-4 flex gap-4 sm:mt-0">
            <span>Best viewed in Dark Mode.</span>
          </div>
        </div>

      </Container>
    </footer>
  )
}
"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/layout/container"

// 修复了这里：所有的锚点前面都加上了斜杠 /
const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Experience", href: "/#experience" },
  { name: "Projects", href: "/#projects" },
  { name: "Timeline", href: "/#timeline" },
  { name: "Contact", href: "/#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSectionId = ""

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop
        if (window.scrollY >= sectionTop - 150) {
          currentSectionId = sectionElement.getAttribute("id") || ""
        }
      })

      setActiveSection(currentSectionId)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-background/60 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            {/* 修复了这里：加上了 /#home */}
            <Link href="/#home" className="flex items-center space-x-2">
              <span className="font-bold tracking-tight text-foreground">Kai</span>
            </Link>
            
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => {
                // 修复了这里：由于加了斜杠，判断 active 的逻辑需要调整为取 # 后面的内容
                const sectionId = link.href.split('#')[1]
                const isActive = activeSection === sectionId
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm transition-colors hover:text-primary ${
                      isActive ? "font-bold text-primary" : "font-medium text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/resume"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:hidden"
            >
              Resume
            </Link>
            <Link
              href="/resume"
              className="hidden md:flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90"
            >
              Resume
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
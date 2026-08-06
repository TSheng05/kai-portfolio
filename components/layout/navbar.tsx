"use client" // 标记为客户端组件，允许使用 Hooks 和 DOM 监听

import { useState, useEffect } from "react"
import Link from "next/link"
import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    // 监听滚动事件，判断当前在哪个区域
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      let currentSectionId = ""

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement
        const sectionTop = sectionElement.offsetTop
        // 减去 150px 是为了在视觉上稍微提前触发状态切换
        if (window.scrollY >= sectionTop - 150) {
          currentSectionId = sectionElement.getAttribute("id") || ""
        }
      })

      setActiveSection(currentSectionId)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // 初始化执行一次

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            {/* 点击名字回到顶部 */}
            <a href="#home" className="flex items-center space-x-2">
              <span className="font-bold tracking-tight">Kai</span>
            </a>
            
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    // 根据激活状态动态改变样式（变粗且颜色加深）
                    className={`text-sm transition-colors hover:text-primary ${
                      isActive ? "font-bold text-foreground" : "font-medium text-muted-foreground"
                    }`}
                  >
                    {link.name}
                  </a>
                )
              })}
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link
              href="/resume"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary md:hidden"
            >
              Resume
            </Link>
            <Link
              href="/resume"
              className="hidden md:flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Resume
            </Link>
          </div>
        </div>
      </Container>
    </header>
  )
}
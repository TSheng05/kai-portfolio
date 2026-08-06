import Link from "next/link"
import { Container } from "@/components/layout/container"
import { ThemeToggle } from "@/components/theme-toggle"

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Timeline", href: "/timeline" },
  { name: "Contact", href: "/contact" }, // 新增这行
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex gap-6 md:gap-10">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold tracking-tight">Kai</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  {link.name}
                </Link>
              ))}
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
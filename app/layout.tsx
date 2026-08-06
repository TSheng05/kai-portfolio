import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAboutData } from "@/lib/career";

const inter = Inter({ subsets: ["latin"] });

// 1. 在模块外部同步读取数据
const about = getAboutData();

// 2. 动态生成全局 SEO 配置
export const metadata: Metadata = {
  title: {
    // default 是当页面没有明确指定 title 时显示的标题（比如首页）
    default: `${about.name} | ${about.title}`,
    // template 是一个神奇的语法，会自动为子页面拼接名字，比如 "About | Kai"
    template: `%s | ${about.name}`, 
  },
  description: about.bio,
  keywords: ["Portfolio", "Developer", "Software Engineer", "React", "Next.js", about.name || ""],
  openGraph: {
    title: `${about.name} | ${about.title}`,
    description: about.bio,
    url: "https://yourdomain.com", // 等你有了自己的域名后在这里替换
    siteName: `${about.name} Career OS`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${about.name} | ${about.title}`,
    description: about.bio,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
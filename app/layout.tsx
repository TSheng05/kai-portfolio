import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getAboutData } from "@/lib/career";

const inter = Inter({ subsets: ["latin"] });

// 1. 在模块外部同步读取数据
const about = getAboutData();

// 2. 动态生成全局 SEO 配置
export const metadata: Metadata = {
  title: {
    default: `${about.name} | ${about.title}`,
    template: `%s | ${about.name}`, 
  },
  description: about.bio,
  keywords: ["Portfolio", "Developer", "Software Engineer", "React", "Next.js", about.name || ""],
  openGraph: {
    title: `${about.name} | ${about.title}`,
    description: about.bio,
    url: "https://yourdomain.com", 
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} relative antialiased min-h-screen selection:bg-primary/30`}>
        
        {/* --- 高级氛围光晕 (Ambient Glows) --- */}
        {/* 顶部柔和深蓝光晕 */}
        <div className="fixed top-0 inset-x-0 h-[600px] bg-blue-600/10 blur-[120px] -z-10 pointer-events-none"></div>
        
        {/* 底部柔和日落橙光晕 */}
        <div className="fixed bottom-0 inset-x-0 h-[500px] bg-orange-500/10 blur-[120px] -z-10 pointer-events-none translate-y-1/4"></div>
        {/* ------------------------------------ */}

        <div className="relative flex min-h-screen flex-col z-0">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
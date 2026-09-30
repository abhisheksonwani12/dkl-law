import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import SideNav from "@/components/side-nav"
import Header from "@/components/header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "DKL Advocates",
  description: "Best Legal Associates",
  generator: "v0.app",
}

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased">
        <SideNav />
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
    
  )
}

import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import DarkModeToggle from "@/components/DarkModeToggle"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Your Name - Fullstack Developer",
    description: "Portfolio website showcasing my skills and projects as a fullstack developer",
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <Navbar />
        <div className="fixed top-4 right-4 z-50">
            <DarkModeToggle />
        </div>
        {children}
        </body>
        </html>
    )
}


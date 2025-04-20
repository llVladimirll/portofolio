import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vladimirrahman - Fullstack Developer",
  description:
    "Vladimirrahman Salsabil Abdullah — a passionate web developer and Informatics student at Universitas Islam Indonesia (International Program). With a strong foundation in full-stack development and a flair for creating impactful digital solutions, I specialize in building responsive, scalable, and user-friendly web applications.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} dark:bg-gray-900 dark:text-white`}>
        <Navbar />
        <div className="fixed top-4 right-4 z-50"></div>
        {children}
      </body>
    </html>
  );
}

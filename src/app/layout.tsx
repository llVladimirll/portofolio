import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import type React from "react"; // Import React

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vladimirrahman - Fullstack Developer",
  description:
    "Vladimirrahman is a fullstack develope, he is a 6th semester student at Universitas Islam Indonesia majoring in Informatics",
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

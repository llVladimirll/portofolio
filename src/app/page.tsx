import Hero from "@/components/Hero"
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Navbar from "@/components/Navbar"

export default function Home() {
  return (
      <main className="min-h-screen bg-elegant-primary text-elegant-accent">
        <Navbar />
        <Hero />
        <Skills />
        <Projects />
        <Contact />
      </main>
  )
}
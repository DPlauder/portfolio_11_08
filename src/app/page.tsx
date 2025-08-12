"use client"

import type React from "react"

import { Badge } from "@/components/ui/badge"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Globe, Mail, Phone, MapPin, Github, ExternalLink, Download } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { useScrollAnimation } from "@/hooks/useScrollAnimation" // Import the updated hook
import { cn } from "@/lib/utils" // Import cn utility

import { BackToTopButton } from "@/components/back-to-top-button"

// Add smooth scroll styles and new animations
const smoothScrollStyles = `
  html {
    scroll-behavior: smooth;
  }
  
`

export default function Component() {
  const myName = "Domink Plauder"

  // Hero Section Animations
  const { ref: heroTextRef, hasAnimated: heroTextAnimated } = useScrollAnimation()
  const { ref: heroButtonsRef, hasAnimated: heroButtonsAnimated } = useScrollAnimation()
  const { ref: heroImageRef, hasAnimated: heroImageAnimated } = useScrollAnimation()

  // About Section Animations
  const { ref: aboutHeaderRef, hasAnimated: aboutHeaderAnimated } = useScrollAnimation()
  const { ref: aboutFeature1Ref, hasAnimated: aboutFeature1Animated } = useScrollAnimation()
  const { ref: aboutFeature2Ref, hasAnimated: aboutFeature2Animated } = useScrollAnimation()
  const { ref: aboutFeature3Ref, hasAnimated: aboutFeature3Animated } = useScrollAnimation()
  const { ref: aboutImageRef, hasAnimated: aboutImageAnimated } = useScrollAnimation()

  // Skills Section Animations
  const { ref: skillsHeaderRef, hasAnimated: skillsHeaderAnimated } = useScrollAnimation()
  const { ref: skillsCard1Ref, hasAnimated: skillsCard1Animated } = useScrollAnimation()
  const { ref: skillsCard2Ref, hasAnimated: skillsCard2Animated } = useScrollAnimation()
  const { ref: skillsCard3Ref, hasAnimated: skillsCard3Animated } = useScrollAnimation()

  // Projects Section Animations
  const { ref: projectsHeaderRef, hasAnimated: projectsHeaderAnimated } = useScrollAnimation()
  const { ref: projectCard1Ref, hasAnimated: projectCard1Animated } = useScrollAnimation()
  const { ref: projectCard2Ref, hasAnimated: projectCard2Animated } = useScrollAnimation()

  // Contact Section Animations
  const { ref: contactHeaderRef, hasAnimated: contactHeaderAnimated } = useScrollAnimation()
  const { ref: contactInfo1Ref, hasAnimated: contactInfo1Animated } = useScrollAnimation()
  const { ref: contactInfo2Ref, hasAnimated: contactInfo2Animated } = useScrollAnimation()
  const { ref: contactInfo3Ref, hasAnimated: contactInfo3Animated } = useScrollAnimation()
  const { ref: contactButtonRef, hasAnimated: contactButtonAnimated } = useScrollAnimation()

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <style jsx global>
        {smoothScrollStyles}
      </style>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-slate-900/80 shadow-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex">
            <Link href="#hero" className="mr-6 flex items-center space-x-2 group">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 transition-all duration-300 group-hover:scale-110 group-hover:bg-slate-200 dark:group-hover:bg-slate-700">
                <Code className="h-5 w-5" />
              </div>
              {/* Header name animates once on load */}
              <span className="font-bold text-slate-900 dark:text-white animate-delay-100">{myName}</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            <Link
              href="#about"
              className="relative transition-all duration-300 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:scale-105 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-slate-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Über mich
            </Link>
            <Link
              href="#skills"
              className="relative transition-all duration-300 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:scale-105 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-slate-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Skills
            </Link>
            {/* <Link
              href="#projects"
              className="relative transition-all duration-300 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:scale-105 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-slate-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Projekte
            </Link> */}
            <Link
              href="#contact"
              className="relative transition-all duration-300 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white hover:scale-105 after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-slate-400 hover:after:w-full after:transition-all after:duration-300"
            >
              Kontakt
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <a href="/LL_Plauder_Dominik.pdf" download className="hidden sm:inline-block">
              <Button
                variant="outline"
                size="sm"
                className="transition-all duration-300 hover:scale-105 hover:shadow-md border-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-800 bg-transparent"
              >
                <Download className="mr-2 h-4 w-4" />
                CV Download
              </Button>
            </a>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section
          id="hero"
          className="w-full py-16 md:py-24 lg:py-32 xl:py-48 bg-background dark:bg-background relative overflow-hidden"
        >
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23000000' fillOpacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Background accent elements */}
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-slate-200/20 via-slate-100/15 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-stone-200/20 via-stone-100/15 to-transparent rounded-full blur-3xl"></div>

          <div className="container mx-auto w-full px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-6">
                <div
                  ref={heroTextRef as React.RefObject<HTMLDivElement>}
                  className={cn("space-y-4", !heroTextAnimated && "opacity-0")}
                >
                  <div className="inline-block">
                    <Badge className="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium">
                      🚀 Verfügbar für neue Projekte
                    </Badge>
                  </div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-slate-900 dark:text-white">
                    Hallo, ich bin <span className="text-slate-600 dark:text-slate-300">{myName}</span>
                  </h1>
                  <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl leading-relaxed">
                    Leidenschaftlicher Full-Stack Applikationsentwickler mit erfolreich abgeschlossener LAP.
                    Spezialisiert auf React, Node.js, Backend und Cloud-Technologien.
                  </p>
                </div>
                <div
                  ref={heroButtonsRef as React.RefObject<HTMLDivElement>}
                  className={cn("flex flex-col gap-4 min-[400px]:flex-row", !heroButtonsAnimated && "opacity-0")}
                >
                  <a href="mailto:dominik.plauder@gmail.com">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
                    >
                      <Mail className="mr-2 h-5 w-5" />
                      Kontakt aufnehmen
                    </Button>
                  </a>
                  <a href="https://github.com/dplauder" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      GitHub ansehen
                    </Button>
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-xl blur-2xl opacity-30 scale-110"></div>
                  <Image
                    ref={heroImageRef as React.RefObject<HTMLImageElement>}
                    src="/220_43.jpg?height=400&width=400"
                    width={400}
                    height={400}
                    alt={`${myName} - Applikationsentwickler`}
                    className={cn(
                      "relative overflow-hidden rounded-xl object-contain bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-white dark:border-slate-800 shadow-xl shadow-inner",
                      !heroImageAnimated && "opacity-0",
                      heroImageAnimated && "animate-scroll-in-right animate-delay-100",
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-300 dark:bg-slate-700"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div
              ref={aboutHeaderRef as React.RefObject<HTMLDivElement>}
              className={cn(
                "flex flex-col items-center justify-center space-y-4 text-center mb-16",
                !aboutHeaderAnimated && "opacity-0",
              )}
            >
              <div className="space-y-4">
                <div className="inline-block p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                  <Code className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
                  Über mich
                </h2>
                <p className="max-w-[900px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Als ausgebildeter Applikationsentwickler bringe ich technische Expertise und kreative Problemlösung
                  zusammen. Meine Leidenschaft liegt in der Entwicklung benutzerfreundlicher und effizienter
                  Softwarelösungen.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <ul className="grid gap-8">
                  <li
                    ref={aboutFeature1Ref as React.RefObject<HTMLLIElement>}
                    className={cn("group", !aboutFeature1Animated && "opacity-0")}
                  >
                    <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-810transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 border-l-4 border-slate-400 dark:border-slate-600">
                      <div className="p-2 bg-slate-500 dark:bg-slate-600 rounded-lg">
                        <Globe className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Frontend-Entwicklung</h3>
                        <p className="text-slate-600 dark:text-white mb-2">
                          Moderne React-Anwendungen mit TypeScript, Next.js und responsive Design
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    ref={aboutFeature2Ref as React.RefObject<HTMLLIElement>}
                    className={cn("group", !aboutFeature2Animated && "opacity-0")}
                  >
                    <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-stone-50 to-stone-100 dark:from-stone-800 dark:to-stone-850 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 border-l-4 border-stone-400 dark:border-stone-600">
                      <div className="p-2 bg-stone-500 dark:bg-stone-600 rounded-lg">
                        <Database className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Backend-Entwicklung</h3>
                        <p className="text-slate-600 dark:text-white mb-2">
                          Skalierbare APIs mit Node.js, Express und Datenbank-Integration.
                        </p>
                      </div>
                    </div>
                  </li>
                  <li
                    ref={aboutFeature3Ref as React.RefObject<HTMLLIElement>}
                    className={cn("group", !aboutFeature3Animated && "opacity-0")}
                  >
                    <div className="flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-850 transition-all duration-300 shadow-sm hover:shadow-md hover:scale-105 border-l-4 border-gray-400 dark:border-gray-600">
                      <div className="p-2 bg-gray-500 dark:bg-gray-600 rounded-lg">
                        <Code className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Cloud & DevOps</h3>
                        <p className="text-slate-600 dark:text-white mb-2">
                          Deployment und Wartung auf Docker, Kubernetes und CI/CD-Pipelines
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div
                ref={aboutImageRef as React.RefObject<HTMLDivElement>}
                className={cn("relative", !aboutImageAnimated && "opacity-0")}
              >
                <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 rounded-xl blur-2xl opacity-20"></div>
                <Image
                  src="/placeholder.jpg?height=400&width=600"
                  width="600"
                  height="400"
                  alt="Entwickler Arbeitsplatz"
                  className="relative mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full shadow-lg border border-slate-200 dark:border-slate-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="w-full py-16 md:py-24 lg:py-32 bg-background dark:bg-background relative">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("/placeholder.svg?height=200&width=200")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px",
              backgroundBlendMode: "overlay",
            }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-1 bg-slate-400 dark:bg-slate-600"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div
              ref={skillsHeaderRef as React.RefObject<HTMLDivElement>}
              className={cn(
                "flex flex-col items-center justify-center space-y-4 text-center mb-16",
                !skillsHeaderAnimated && "opacity-0",
              )}
            >
              <div className="space-y-4">
                <div className="inline-block p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm">
                  <Database className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
                  Technologien & Skills
                </h2>
                <p className="max-w-[900px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meine Expertise umfasst moderne Technologien und bewährte Entwicklungspraktiken
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              <Card
                ref={skillsCard1Ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-850 border-slate-200 dark:border-slate-700 shadow-md shadow-inner overflow-hidden group",
                  !skillsCard1Animated && "opacity-0",
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-400 dark:bg-slate-600"></div>
                <CardHeader className="pb-4">
                  <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-full w-fit transition-all duration-300 group-hover:scale-110">
                    <Globe className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">Frontend</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Moderne Benutzeroberflächen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>React</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>TypeScript</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Next.js</span>
                        <span>88%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "88%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Tailwind CSS</span>
                        <span>92%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "92%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>HTML5</span>
                        <span>95%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "95%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>CSS3</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                ref={skillsCard2Ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-stone-50 dark:from-slate-900 dark:to-stone-900 border-slate-200 dark:border-slate-700 shadow-md shadow-inner overflow-hidden group",
                  !skillsCard2Animated && "opacity-0",
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-stone-400 dark:bg-stone-600"></div>
                <CardHeader className="pb-4">
                  <div className="p-3 bg-stone-100 dark:bg-stone-800 rounded-full w-fit transition-all duration-300 group-hover:scale-110">
                    <Database className="h-8 w-8 text-stone-600 dark:text-stone-400" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">Backend</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Robuste Server-Architekturen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Node.js</span>
                        <span>87%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "87%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Express</span>
                        <span>89%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "89%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>PostgreSQL</span>
                        <span>82%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "82%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Prisma</span>
                        <span>78%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "78%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>REST APIs</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card
                ref={skillsCard3Ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "transition-all duration-300 hover:scale-105 hover:shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-gray-900 border-slate-200 dark:border-slate-700 shadow-md shadow-inner overflow-hidden group",
                  !skillsCard3Animated && "opacity-0",
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gray-400 dark:bg-gray-600"></div>
                <CardHeader className="pb-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full w-fit transition-all duration-300 group-hover:scale-110">
                    <Code className="h-8 w-8 text-gray-600 dark:text-gray-400" />
                  </div>
                  <CardTitle className="text-slate-900 dark:text-white">Tools & DevOps</CardTitle>
                  <CardDescription className="text-slate-600 dark:text-slate-400">
                    Entwicklung & Deployment
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4">
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Git</span>
                        <span>90%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "90%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Docker</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Kubernetes</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>CI/CD</span>
                        <span>75%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "75%" }}></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm text-slate-700 dark:text-slate-300">
                        <span>Agile Methods</span>
                        <span>85%</span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2 dark:bg-slate-700">
                        <div className="bg-slate-600 h-2 rounded-full dark:bg-slate-400" style={{ width: "85%" }}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section 
        <section
          id="projects"
          className="w-full py-16 md:py-24 lg:py-32 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-stone-300 dark:bg-stone-700"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div
              ref={projectsHeaderRef as React.RefObject<HTMLDivElement>}
              className={cn(
                "flex flex-col items-center justify-center space-y-4 text-center mb-16",
                !projectsHeaderAnimated && "opacity-0",
              )}
            >
              <div className="space-y-4">
                <div className="inline-block p-3 bg-slate-100 dark:bg-slate-800 rounded-full">
                  <Globe className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
                  Meine Projekte
                </h2>
                <p className="max-w-[900px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Eine Auswahl meiner aktuellen Projekte und Entwicklungen
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
              <Card
                ref={projectCard1Ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-850 border-slate-200 dark:border-slate-700 shadow-md shadow-inner overflow-hidden",
                  !projectCard1Animated && "opacity-0",
                  projectCard1Animated && "animate-scroll-in-left",
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-400 dark:bg-slate-600"></div>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width="400"
                      height="200"
                      alt="E-Commerce Platform"
                      className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-slate-900 dark:text-white">Projekte Bibliothek</CardTitle>
                  <CardDescription className="mb-4 text-slate-600 dark:text-slate-400">
                    Vollständige E-Commerce-Lösung mit React, Node.js und Stripe-Integration. Features: Produktkatalog,
                    Warenkorb, Zahlungsabwicklung und Admin-Dashboard.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0 transition-all duration-200 hover:scale-105">
                      React
                    </Badge>
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 border-0 transition-all duration-200 hover:scale-105">
                      Next.js
                    </Badge>
                    <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900 dark:text-amber-300 border-0 transition-all duration-200 hover:scale-105">
                      NoSql
                    </Badge>
                    <Badge className="bg-violet-100 text-violet-700 dark:bg-violet-900 dark:text-violet-300 border-0 transition-all duration-200 hover:scale-105">
                      PHP
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-sm bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-sm shadow-md px-8 py-4"
                    >
                      <ExternalLink className="mr-3 h-6 w-6" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card
                ref={projectCard2Ref as React.RefObject<HTMLDivElement>}
                className={cn(
                  "transition-all duration-300 hover:scale-105 hover:shadow-lg group bg-gradient-to-br from-white to-stone-50 dark:from-slate-900 dark:to-stone-900 border-slate-200 dark:border-slate-700 shadow-md shadow-inner overflow-hidden",
                  !projectCard2Animated && "opacity-0",
                  projectCard2Animated && "animate-scroll-in-right animate-delay-100",
                )}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-stone-400 dark:bg-stone-600"></div>
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=200&width=400"
                      width="400"
                      height="200"
                      alt="Task Management App"
                      className="aspect-video w-full object-cover transition-all duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-slate-900/20 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-3 text-slate-900 dark:text-white">Task Management App</CardTitle>
                  <CardDescription className="mb-4 text-slate-600 dark:text-slate-400">
                    Kollaborative Aufgabenverwaltung mit Real-time Updates. Features: Team-Boards, Drag & Drop,
                    Notifications und Mobile-responsive Design.
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 border-0 transition-all duration-200 hover:scale-105">
                      Next.js
                    </Badge>
                    <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 border-0 transition-all duration-200 hover:scale-105">
                      TypeScript
                    </Badge>
                    <Badge className="bg-sky-100 text-sky-700 dark:bg-sky-900 dark:text-sky-300 border-0 transition-all duration-200 hover:scale-105">
                      PostgreSQL
                    </Badge>
                    <Badge className="bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300 border-0 transition-all duration-200 hover:scale-105">
                      Socket.io
                    </Badge>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-slate-300 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-600 dark:hover:border-slate-500 dark:hover:bg-slate-800 transition-all duration-300 hover:scale-105 hover:shadow-sm bg-transparent"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-sm shadow-md px-8 py-4"
                    >
                      <ExternalLink className="mr-3 h-6 w-6" />
                      Live Demo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        */}

        {/* Contact Section */}
        <section id="contact" className="w-full py-16 md:py-24 lg:py-32 bg-background dark:bg-background relative">
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none"
            style={{
              backgroundImage: `url("/placeholder.svg?height=200&width=200")`,
              backgroundRepeat: "repeat",
              backgroundSize: "200px",
              backgroundBlendMode: "overlay",
            }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gray-400 dark:bg-gray-600"></div>

          <div className="container mx-auto px-4 md:px-6">
            <div
              ref={contactHeaderRef as React.RefObject<HTMLDivElement>}
              className={cn(
                "flex flex-col items-center justify-center space-y-4 text-center mb-16",
                !contactHeaderAnimated && "opacity-0",
              )}
            >
              <div className="space-y-4">
                <div className="inline-block p-3 bg-white dark:bg-slate-900 rounded-full shadow-sm">
                  <Mail className="h-8 w-8 text-slate-600 dark:text-slate-400" />
                </div>
                <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl text-slate-900 dark:text-white">
                  Kontakt
                </h2>
                <p className="max-w-[600px] text-slate-600 dark:text-slate-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Haben Sie ein spannendes Projekt? Lassen Sie uns darüber sprechen!
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-2xl">
              <div className="flex flex-col items-center space-y-8">
                <div className="grid gap-8 w-full max-w-md">
                  <div
                    ref={contactInfo1Ref as React.RefObject<HTMLDivElement>}
                    className={cn(
                      "flex items-center space-x-6 p-6 rounded-xl bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-850 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg",
                      !contactInfo1Animated && "opacity-0",
                      contactInfo1Animated && "animate-scroll-in-left",
                    )}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-slate-100 dark:bg-slate-800 transition-all duration-300 hover:scale-110">
                      <Mail className="h-7 w-7 text-slate-600 dark:text-slate-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">E-Mail</p>
                      <p className="text-slate-600 dark:text-white mb-2">dominik.plauder@gmail.com</p>
                    </div>
                  </div>
                  <div
                    ref={contactInfo2Ref as React.RefObject<HTMLDivElement>}
                    className={cn(
                      "flex items-center space-x-6 p-6 rounded-xl bg-gradient-to-br from-white to-stone-50 dark:from-slate-900 dark:to-stone-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg",
                      !contactInfo2Animated && "opacity-0",
                      contactInfo2Animated && "animate-scroll-in-left animate-delay-100",
                    )}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-stone-100 dark:bg-stone-800 transition-all duration-300 hover:scale-110">
                      <Phone className="h-7 w-7 text-stone-600 dark:text-stone-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Telefon</p>
                      <p className="text-slate-600 dark:text-white mb-2">+43 664 3424455</p>
                    </div>
                  </div>
                  <div
                    ref={contactInfo3Ref as React.RefObject<HTMLDivElement>}
                    className={cn(
                      "flex items-center space-x-6 p-6 rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-gray-900 shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg",
                      !contactInfo3Animated && "opacity-0",
                      contactInfo3Animated && "animate-scroll-in-left animate-delay-200",
                    )}
                  >
                    <div className="flex items-center justify-center w-14 h-14 rounded-full bg-gray-100 dark:bg-gray-800 transition-all duration-300 hover:scale-110">
                      <MapPin className="h-7 w-7 text-gray-600 dark:text-gray-400" />
                    </div>
                    <div>
                      <p className="font-semibold text-slate-900 dark:text-white">Standort</p>
                      <p className="text-slate-600 dark:text-white">Graz, Österreich</p>
                    </div>
                  </div>
                </div>
                <div
                  ref={contactButtonRef as React.RefObject<HTMLDivElement>}
                  className={cn(
                    "flex justify-center",
                    !contactButtonAnimated && "opacity-0",
                    contactButtonAnimated && "animate-scroll-in-right animate-delay-300",
                  )}
                >
                  <a href="https://github.com/dplauder" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-slate-800 to-slate-900 hover:from-slate-900 hover:to-slate-950 dark:from-slate-700 dark:to-slate-800 dark:hover:from-slate-600 dark:hover:to-slate-700 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg shadow-md px-8 py-4"
                    >
                      <Github className="mr-3 h-6 w-6" />
                      GitHub Profil besuchen
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="w-full py-8 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center space-x-2">
              <Code className="h-5 w-5 text-slate-600 dark:text-slate-400" />
              <span className="text-sm text-slate-600 dark:text-slate-400">
                © 2024 {myName}. Alle Rechte vorbehalten.
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-500">Entwickelt mit React, Next.js und Tailwind CSS</p>
          </div>
        </div>
      </footer>
      <BackToTopButton />
    </div>
  )
}

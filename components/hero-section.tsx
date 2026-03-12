"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const carRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial load animation for headline (staggered letter reveal)
      const letters = headlineRef.current?.querySelectorAll(".letter")
      if (letters) {
        gsap.fromTo(
          letters,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.03,
            ease: "power3.out",
            delay: 0.3,
          }
        )
      }

      // Initial load animation for stats (staggered reveal)
      const statItems = statsRef.current?.querySelectorAll(".stat-item")
      if (statItems) {
        gsap.fromTo(
          statItems,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            delay: 1,
          }
        )
      }

      // Scroll-based car animation
      if (carRef.current) {
        gsap.to(carRef.current, {
          x: () => window.innerWidth * 0.6,
          rotation: 5,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.5,
          },
        })
      }

      // Parallax effect for headline on scroll
      if (headlineRef.current) {
        gsap.to(headlineRef.current, {
          y: -100,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "50% top",
            scrub: 1,
          },
        })
      }

      // Stats fade out on scroll
      if (statsRef.current) {
        gsap.to(statsRef.current, {
          y: -50,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "20% top",
            end: "60% top",
            scrub: 1,
          },
        })
      }
    }, heroRef)

    return () => ctx.revert()
  }, [])

  const headline = "W E L C O M E   I T Z F I Z Z"

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden bg-background"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/30 via-background to-background" />

      {/* Main content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4">
        {/* Headline */}
        <h1
          ref={headlineRef}
          className="mb-16 text-center text-4xl font-bold tracking-[0.3em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {headline.split("").map((char, index) => (
            <span key={index} className="letter inline-block">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </h1>

        {/* Car container */}
        <div
          ref={carRef}
          className="absolute bottom-[20%] left-[-20%] w-[60%] max-w-[600px] md:bottom-[25%]"
        >
          <svg
            viewBox="0 0 800 300"
            className="w-full drop-shadow-2xl"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Car body */}
            <path
              d="M100 200 L150 200 L180 150 L320 130 L400 130 L500 150 L600 150 L650 180 L700 180 L700 220 L100 220 Z"
              fill="var(--primary)"
              className="drop-shadow-lg"
            />
            {/* Car top */}
            <path
              d="M200 150 L220 100 L420 100 L480 150 Z"
              fill="var(--primary)"
              opacity="0.9"
            />
            {/* Windows */}
            <path
              d="M225 145 L240 110 L320 110 L320 145 Z"
              fill="var(--background)"
              opacity="0.8"
            />
            <path
              d="M330 145 L330 110 L410 110 L450 145 Z"
              fill="var(--background)"
              opacity="0.8"
            />
            {/* Headlights */}
            <ellipse cx="680" cy="190" rx="15" ry="10" fill="#FFD700" opacity="0.9" />
            <ellipse cx="120" cy="200" rx="12" ry="8" fill="#FF4444" opacity="0.8" />
            {/* Wheels */}
            <circle cx="200" cy="220" r="40" fill="#1a1a1a" />
            <circle cx="200" cy="220" r="25" fill="#333" />
            <circle cx="200" cy="220" r="10" fill="#666" />
            <circle cx="550" cy="220" r="40" fill="#1a1a1a" />
            <circle cx="550" cy="220" r="25" fill="#333" />
            <circle cx="550" cy="220" r="10" fill="#666" />
            {/* Details */}
            <rect x="250" y="170" width="80" height="5" fill="var(--foreground)" opacity="0.3" />
            <rect x="400" y="170" width="120" height="5" fill="var(--foreground)" opacity="0.3" />
          </svg>
        </div>

        {/* Stats section */}
        <div
          ref={statsRef}
          className="absolute bottom-12 left-0 right-0 px-4 md:bottom-16"
        >
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            <StatItem percentage="58%" description="Increase in pick up point use" />
            <StatItem percentage="23%" description="Decreased in customer phone calls" />
            <StatItem percentage="27%" description="Increase in pick up point use" />
            <StatItem percentage="40%" description="Decreased in customer phone calls" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="h-6 w-6 text-muted-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

function StatItem({
  percentage,
  description,
}: {
  percentage: string
  description: string
}) {
  return (
    <div className="stat-item text-center md:text-left">
      <p className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
        {percentage}
      </p>
      <p className="mt-2 text-sm text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  )
}

"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = contentRef.current?.querySelectorAll(".animate-in")
      if (elements) {
        gsap.fromTo(
          elements,
          {
            opacity: 0,
            y: 60,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          }
        )
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-card py-24 md:py-32"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div ref={contentRef} className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <span className="animate-in block text-sm font-medium uppercase tracking-widest text-primary">
              About Us
            </span>
            <h2 className="animate-in mt-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
              Driving Innovation Forward
            </h2>
            <p className="animate-in mt-6 text-lg leading-relaxed text-muted-foreground">
              We are a forward-thinking mobility company dedicated to
              revolutionizing the way people move. Our mission is to create
              seamless, sustainable, and intelligent transportation solutions.
            </p>
            <p className="animate-in mt-4 text-lg leading-relaxed text-muted-foreground">
              With cutting-edge technology and a passion for excellence, we are
              shaping the future of urban mobility, one journey at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <FeatureCard
              number="01"
              title="Smart Design"
              description="Innovative engineering meets aesthetic excellence"
            />
            <FeatureCard
              number="02"
              title="Performance"
              description="Unmatched power and efficiency on every road"
            />
            <FeatureCard
              number="03"
              title="Sustainability"
              description="Eco-friendly solutions for a greener tomorrow"
            />
            <FeatureCard
              number="04"
              title="Connected"
              description="Seamlessly integrated with your digital life"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function FeatureCard({
  number,
  title,
  description,
}: {
  number: string
  title: string
  description: string
}) {
  return (
    <div className="animate-in group rounded-xl border border-border bg-secondary/50 p-6 transition-all duration-300 hover:border-primary/50 hover:bg-secondary">
      <span className="text-4xl font-bold text-primary/30 transition-colors group-hover:text-primary/50">
        {number}
      </span>
      <h3 className="mt-4 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  )
}

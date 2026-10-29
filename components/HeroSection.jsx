"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    eyebrow: "SINCE 1994 · MUMBAI, INDIA",
    title: "Turning",
    secondLine: "Imagination",
    highlight: "Into Art.",
    description:
      "We bring ideas to life through bespoke sculptures, murals, wall art, FRP, stone and creative design solutions for spaces that inspire.",
    image: "/banner-1.jpg",
    label: "Sculptures & Installations",
  },
  {
    eyebrow: "ART THAT TRANSFORMS SPACES",
    title: "Walls With",
    secondLine: "A Story",
    highlight: "To Tell.",
    description:
      "Discover expressive murals, handcrafted wall installations and extraordinary artistic details that transform ordinary spaces.",
    image: "/service/wallart.png",
    label: "Murals & Wall Art",
  },
  {
    eyebrow: "CRAFTED WITH PASSION",
    title: "Beyond",
    secondLine: "Ordinary",
    highlight: "Artistry.",
    description:
      "From imaginative FRP creations to custom sculptures, we combine craftsmanship, materials and vision to create lasting impressions.",
    image: "/service/frp.png",
    label: "FRP & Custom Artwork",
  },
  {
    eyebrow: "DESIGN · DETAIL · CRAFTSMANSHIP",
    title: "Creating",
    secondLine: "Spaces",
    highlight: "That Inspire.",
    description:
      "Explore distinctive architectural art, decorative elements and bespoke creations where traditional artistry meets contemporary design.",
    image: "/service/cnc_router.png",
    label: "Architectural Art",
  },
];

export default function HeroSection() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, [paused]);

  const nextSlide = () => {
    setActive((current) => (current + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-label="Featured artwork"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative isolate h-[calc(100svh-68px)] min-h-[500px] w-full overflow-hidden bg-[#25271F] sm:h-[calc(100svh-76px)] sm:min-h-[580px]"
    >
      {/* BACKGROUND IMAGES */}
      {slides.map((slide, index) => (
        <div
          key={slide.label}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            active === index ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          aria-hidden="true"
        >
          <Image
  src={slide.image}
  alt=""
  fill
  priority={index === 0}
  sizes="100vw"
  className={`object-cover object-center transition-transform duration-[7000ms] ease-out ${
    active === index ? "scale-100 md:scale-105" : "scale-100"
  }`}
/>
        </div>
      ))}

      {/* LEFT DARK OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#101A16]/95 via-[#172019]/75 to-transparent" />

      {/* BOTTOM OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />

      {/* SUBTLE ARTISTIC TEXTURE */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,240,210,0.7) 0.6px, transparent 0.6px)",
          backgroundSize: "6px 6px",
        }}
      />

      {/* LEFT VERTICAL SCROLL LABEL */}
      <div className="absolute bottom-9 left-5 z-10 hidden items-center gap-3 md:flex lg:left-8">
        <span className="h-12 w-px bg-[#D6B17B]" />

        <span className="text-[9px] tracking-[0.3em] text-white/75 [writing-mode:vertical-rl]">
          SCROLL TO EXPLORE
        </span>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center px-6 pb-24 pt-8 sm:px-10 md:px-14 lg:px-20">
        <div className="w-full max-w-[570px]">
          {/* EYEBROW */}
          <p
            key={`eyebrow-${active}`}
            className="hero-text mb-6 text-[9px] font-medium tracking-[0.23em] text-[#E3BB79] sm:mb-7 sm:text-[10px] sm:tracking-[0.28em]"
          >
            {slides[active].eyebrow}
          </p>

          {/* HEADING */}
          <h1
            key={`heading-${active}`}
            className="hero-text font-serif text-[clamp(3rem,7.2vw,6.7rem)] font-normal leading-[0.91] tracking-[-0.045em] text-[#FFF8ED]"
          >
            <span className="block">{slides[active].title}</span>

            <span className="mt-1 block">
              {slides[active].secondLine}
            </span>

            <span className="mt-1 block italic text-[#E3B16C]">
              {slides[active].highlight}
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p
            key={`description-${active}`}
            className="hero-text mt-6 max-w-[390px] text-[12px] leading-[1.8] text-white/80 sm:mt-7 sm:text-[13px] sm:leading-[1.9] md:text-sm"
          >
            {slides[active].description}
          </p>

          {/* CTA */}
          <Link
            href="/projects"
            className="group hero-text mt-6 inline-flex min-h-11 items-center gap-5 border border-[#C18B4C] bg-[#171A14]/30 px-4 py-2.5 text-[11px] text-[#E9C184] backdrop-blur-sm transition-all duration-300 hover:bg-[#D0A064] hover:text-[#201A13] sm:mt-7 sm:px-5"
          >
            <span>Explore Our Work</span>

            <span className="text-base transition-transform duration-300 group-hover:translate-x-1.5">
              ⟶
            </span>
          </Link>

          {/* SLIDE CATEGORY */}
          <p className="mt-8 text-[9px] uppercase tracking-[0.2em] text-white/55 sm:mt-10">
            {slides[active].label}
          </p>
        </div>
      </div>

      {/* SLIDER CONTROLS */}
      <div className="absolute bottom-5 right-5 z-20 flex items-center gap-2 sm:bottom-7 sm:right-8 sm:gap-3 lg:right-12">
        {/* COUNTER */}
        <div className="mr-1 flex items-center gap-1.5 font-serif text-sm text-white sm:mr-3 sm:text-base">
          <span className="text-[#F3D29B]">
            {String(active + 1).padStart(2, "0")}
          </span>

          <span className="text-white/50">/</span>

          <span className="text-white/60">
            {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        {/* PREVIOUS */}
        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6C28B]/70 text-base text-[#F3D29B] transition-all hover:bg-[#D0A064] hover:text-[#201A13] sm:h-11 sm:w-11"
        >
          ←
        </button>

        {/* NEXT */}
        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E6C28B]/70 text-base text-[#F3D29B] transition-all hover:bg-[#D0A064] hover:text-[#201A13] sm:h-11 sm:w-11"
        >
          →
        </button>
      </div>

      {/* SLIDE INDICATORS */}
      <div className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 sm:bottom-9">
        {slides.map((slide, index) => (
          <button
            key={slide.label}
            type="button"
            onClick={() => setActive(index)}
            aria-label={`Show slide ${index + 1}`}
            aria-current={active === index ? "true" : undefined}
            className={`h-[3px] transition-all duration-300 ${
              active === index
                ? "w-7 bg-[#E3B16C] sm:w-9"
                : "w-3 bg-white/50 hover:bg-white"
            }`}
          />
        ))}
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        .hero-text {
          animation: heroReveal 0.8s ease both;
        }

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-text {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
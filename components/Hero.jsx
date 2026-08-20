"use client";

import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return <section id="top" className="grid-lines relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 pb-20 pt-36 sm:px-8 lg:min-h-[820px] lg:grid-cols-[1.1fr_.9fr] lg:gap-16 lg:px-12">
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }} className="relative z-10 max-w-5xl">
      <p className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[.24em] text-[#ff3b30]"><span className="h-px w-8 bg-[#ff3b30]" /> Developer & builder</p>
      <h1 className="text-balance font-display text-[clamp(3.5rem,9vw,8.6rem)] font-medium leading-[.92] tracking-[-.075em] text-white"><span className="text-[#ff3b30]">RASSWANTH</span><br />builds for<br />the real world.</h1>
      <div className="mt-10 flex max-w-2xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><p className="max-w-sm text-base leading-7 text-zinc-400">I&apos;m Rasswanth, a developer exploring AI, web applications, and real-time tools that solve practical problems.</p><div className="flex gap-3"><a href="#projects" className="group flex items-center gap-3 rounded-full bg-[#ff3b30] px-5 py-3 text-sm font-bold text-white transition-transform hover:scale-105">View work <ArrowUpRight size={16} /></a><a href="#contact" className="flex items-center gap-3 rounded-full border border-white/15 px-5 py-3 text-sm text-white transition-colors hover:border-white/40">Get in touch</a></div></div>
    </motion.div>
    <motion.div initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .8, delay: .15 }} className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
      <div className="absolute -inset-3 rounded-[3px] border border-[#ff3b30]/30" />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[3px] bg-[#1b1111] grayscale-[15%]">
        <Image src="/rasswanth-photo.jpeg" alt="Rasswanth" fill priority sizes="(max-width: 1024px) 90vw, 40vw" className="object-cover object-center transition-transform duration-700 hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1010]/65 via-transparent to-transparent" />
        <span className="absolute bottom-5 left-5 text-xs uppercase tracking-[.2em] text-white/80">Rasswanth / 2026</span>
      </div>
    </motion.div>
    <div className="col-span-full flex items-center justify-between border-t border-white/10 pt-5"><div className="flex gap-5 text-xs font-medium text-zinc-500"><a href="https://github.com/rasswanth33-lab" target="_blank" rel="noreferrer" aria-label="Github" className="transition-colors hover:text-[#ff3b30]">GH</a><a href="https://www.linkedin.com/in/rasswanth-s-8880b7343" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition-colors hover:text-[#ff3b30]">IN</a></div><a href="#projects" className="flex items-center gap-2 text-xs uppercase tracking-[.2em] text-zinc-500 transition-colors hover:text-white">Scroll to explore <ArrowDown size={14} /></a></div>
  </section>;
}

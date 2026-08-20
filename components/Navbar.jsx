"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [["About", "about"], ["Selected work", "projects"], ["Contact", "contact"]];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-5 pt-5 sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#111515]/80 px-4 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:px-5">
        <a href="#top" className="font-display text-sm font-bold tracking-[.08em] text-white">RASSWANTH<span className="text-[#ff3b30]">.</span></a>
        <div className="hidden items-center gap-8 md:flex">
          {links.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs text-zinc-400 transition-colors hover:text-white">{label}</a>)}
        </div>
        <a href="#contact" className="hidden items-center gap-2 rounded-full bg-[#ff3b30] px-4 py-2 text-xs font-bold text-white transition-transform hover:scale-105 md:flex">Let&apos;s talk <ArrowUpRight size={14} /></a>
        <button aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)} className="text-white md:hidden">{open ? <X size={20} /> : <Menu size={20} />}</button>
      </nav>
      <AnimatePresence>
        {open && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#111515] p-4 md:hidden">
          {links.map(([label, id]) => <a onClick={() => setOpen(false)} key={id} href={`#${id}`} className="block border-b border-white/10 py-3 text-sm text-zinc-300 last:border-0">{label}</a>)}
        </motion.div>}
      </AnimatePresence>
    </header>
  );
}
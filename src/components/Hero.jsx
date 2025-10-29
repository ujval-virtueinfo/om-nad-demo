import React from 'react'
import { motion } from 'framer-motion'
import { IMAGES, BRAND } from '../config'

export default function Hero(){
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 bg-fixed bg-center bg-cover" style={{backgroundImage: `url(${IMAGES.hero})`, transform: 'translateZ(0)'}} aria-hidden></div>
      {/* gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/60 dark:from-black/60 dark:via-black/50 dark:to-black/60"></div>

      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.9}} className="text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-slate-900 dark:text-white">{BRAND.name}</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">Engineering Digital Excellence — empowering businesses through technology, creativity, and intelligence.</p>
          <div className="mt-8 flex justify-center gap-4">
            <a href="#services" className="px-6 py-3 rounded-full bg-gradient-to-r from-omIndigo to-omViolet text-white font-semibold shadow-lg">Let's Build Together</a>
            <a href="#contact" className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

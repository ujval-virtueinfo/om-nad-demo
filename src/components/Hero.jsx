import React from 'react'
import { motion } from 'framer-motion'
import { IMAGES, BRAND } from '../config'

export default function Hero(){
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Full width background image */}
      <div className="absolute inset-0 bg-center bg-cover" style={{
        backgroundImage: `url(${IMAGES.hero})`
      }} aria-hidden="true"></div>

      {/* Gradient overlay using brand colours */}
      <div className="absolute inset-0 bg-gradient-to-b from-omBlue/70 via-omTeal/40 to-omViolet/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-5xl md:text-7xl font-bold text-white leading-tight">
          {BRAND.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
          Engineering digital solutions that don’t just perform — they transform.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-10">
          <a
            href="#services"
            className="px-8 py-4 rounded-lg bg-gradient-to-r from-omBlue to-omViolet text-white font-semibold shadow-lg hover:from-omTeal hover:to-omIndigo transition">
            Explore Our Services
          </a>
        </motion.div>
      </div>
    </section>
  )
}

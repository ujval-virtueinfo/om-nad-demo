import React from 'react'
import { motion } from 'framer-motion'
import { BRAND, IMAGES } from '../config'

/**
 * Video + Image Hero
 * - Expects /public/hero.mp4 and poster /public/hero-poster.jpg (or configure IMAGES.hero)
 * - Autoplayed muted loop for modern browsers; mobile will show poster image for bandwidth savings.
 */
export default function Hero(){
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video background (muted autoplay) */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
        preload="metadata"
        poster={IMAGES.hero} /* fallback poster */
        aria-hidden="true"
      >
        {/* Provide a few encodings if available; keep at least one mp4 */}
        <source src="/hero.mp4" type="video/mp4" />
        {/* optional webm source if you have it:
            <source src="/hero.webm" type="video/webm" />
        */}
        {/* Fallback for older browsers - the poster image */}
      </video>

      {/* For extra reliability on small screens / slow networks: show image element with CSS that hides on large screens */}
      <div
        className="absolute inset-0 bg-center bg-cover md:hidden"
        style={{ backgroundImage: `url(${IMAGES.hero})` }}
        aria-hidden="true"
      />

      {/* Gradient overlay using Ocean Magics brand colors */}
      <div className="absolute inset-0 bg-gradient-to-b from-omBlue/70 via-omTeal/40 to-omViolet/70 mix-blend-multiply"></div>
      {/* Soft dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
            {BRAND.name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Engineering digital solutions that don’t just perform — they transform.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#services"
              className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-omBlue to-omViolet text-white font-semibold shadow-lg transform-gpu hover:-translate-y-0.5 transition"
            >
              Explore Our Services
            </a>

            <a
              href="#contact"
              className="inline-block px-6 py-3 rounded-full bg-white/90 text-omBlue font-semibold shadow transition"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

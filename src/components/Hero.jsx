import React from "react";
import { motion } from "framer-motion";
import { BRAND } from "../config";

/**
 * Squarespace-style video hero with image fallback
 * Ready to use with remote MP4 + poster
 */
export default function Hero() {
  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        muted
        loop
        autoPlay
        preload="metadata"
        poster="https://images.unsplash.com/photo-1611095564980-d3e8b2dd33c0?auto=format&fit=crop&w=1920&q=80"
        aria-hidden="true"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-silky-blue-abstract-liquid-2608-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient & dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-omBlue/70 via-omTeal/40 to-omViolet/70 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">
            {BRAND.name}
          </h1>

          <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-2xl mx-auto">
            Transforming imagination into intelligent digital experiences.
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
  );
}

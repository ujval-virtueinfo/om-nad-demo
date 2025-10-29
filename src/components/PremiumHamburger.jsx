import React from 'react'
import { motion } from 'framer-motion'

export default function PremiumHamburger({ open, toggle }){
  return (
    <button onClick={toggle} aria-label="Menu" className="w-11 h-11 rounded-full flex items-center justify-center bg-white/60 dark:bg-black/50 backdrop-blur-md shadow">
      <svg width="24" height="24" viewBox="0 0 24 24">
        <motion.rect x="3" y="6" width="18" height="2" rx="1" fill="#7c3aed" animate={{ rotate: open?45:0, y: open?9:0 }} transformOrigin="center" />
        <motion.rect x="3" y="11" width="18" height="2" rx="1" fill="#7c3aed" animate={{ opacity: open?0:1 }} />
        <motion.rect x="3" y="16" width="18" height="2" rx="1" fill="#7c3aed" animate={{ rotate: open?-45:0, y: open?-9:0 }} transformOrigin="center" />
      </svg>
    </button>
  )
}

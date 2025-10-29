import React from 'react'
import { motion } from 'framer-motion'
import { SERVICES } from '../data/mockData'

export default function Services(){
  return (
    <section id="services" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} className="text-2xl font-bold text-center mb-6">Our Services: Your Vision, Engineered.</motion.h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">We are a full-service digital agency dedicated to building robust, beautiful, and intelligent solutions that drive growth.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, i)=> (
            <motion.article key={s.id} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.08}} className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-lg">
              <div className="h-12 w-12 rounded-lg flex items-center justify-center bg-gradient-to-r from-omBlue to-omTeal text-white mb-3">💡</div>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc}</p>
              <ul className="list-disc list-inside mt-3 text-slate-500 text-sm">
                {s.bullets.map((b, idx)=> <li key={idx}>{b}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

import React from 'react'
import { motion } from 'framer-motion'
import { SERVICES } from '../data/mockData'

export default function Services(){
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <motion.h2 initial={{opacity:0,y:8}} whileInView={{opacity:1,y:0}} className="text-3xl font-bold text-center mb-6">Our Services: Your Vision, Engineered.</motion.h2>
        <p className="text-center text-slate-600 max-w-2xl mx-auto mb-8">We are a full-service digital agency dedicated to building robust, beautiful, and intelligent solutions that drive growth.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.slice(0,4).map((s,i)=>(
            <motion.article key={s.id} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.08}} className="p-6 rounded-2xl bg-white/70 backdrop-blur-md border border-white/30 shadow">
              <img src={s.image} alt="" className="w-full h-40 object-cover rounded-lg mb-4"/>
              <h3 className="font-semibold text-lg">{s.title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{s.desc || ''}</p>
              <ul className="list-disc list-inside mt-3 text-slate-500 text-sm">
                {s.bullets.map((b,idx)=>(<li key={idx}>{b}</li>))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

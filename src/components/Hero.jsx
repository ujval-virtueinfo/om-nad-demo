import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section id="home" className="pt-20 pb-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl p-10 shadow-lg" style={{background: 'linear-gradient(180deg, rgba(255,255,255,0.95), rgba(250,250,255,0.95))'}}>
          <motion.div initial={{opacity:0, y:16}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}} viewport={{once:true}}>
            <h1 className="text-3xl md:text-4xl font-bold">Engineering Digital Excellence</h1>
            <p className="mt-4 text-slate-600 max-w-2xl">Empowering businesses through technology, creativity, and intelligence.</p>
            <div className="mt-6">
              <a href="#contact" className="inline-block bg-gradient-to-r from-omBlue via-omTeal to-omOrange text-white font-semibold px-5 py-3 rounded-lg">Let's Build Together</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

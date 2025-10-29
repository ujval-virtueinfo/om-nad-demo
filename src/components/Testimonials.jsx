import React from 'react'
import { TESTIMONIALS } from '../data/mockData'

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(t=>(
            <div key={t.id} className="bg-white p-4 rounded-xl shadow-sm">
              <p className="text-slate-700 italic">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-4">
                <img className="w-10 h-10 rounded-full object-cover" src={t.avatar} alt={t.name}/>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

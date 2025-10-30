import React from 'react'
import { TESTIMONIALS } from '../data/mockData'

export default function Testimonials(){
  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map(t=>(
            <div key={t.id} className="bg-white p-6 rounded-2xl shadow">
              <p className="italic text-slate-700">"{t.quote}"</p>
              <div className="flex items-center gap-3 mt-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover"/>
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

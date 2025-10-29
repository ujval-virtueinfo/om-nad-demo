import React from 'react'
import { BLOGS } from '../data/mockData'

export default function Blogs(){
  return (
    <section id="blogs" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Latest Blogs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOGS.map(b=>(
            <article key={b.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <img loading="lazy" src={b.image} alt={b.title} className="w-full h-40 object-cover"/>
              <div className="p-4">
                <h3 className="font-semibold">{b.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{b.teaser}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

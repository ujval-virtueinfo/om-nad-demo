import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-8">
      <div className="max-w-6xl mx-auto px-4 py-6 flex items-center justify-between text-sm text-slate-600">
        <div>© {new Date().getFullYear()} Ocean Magics</div>
        <div className="flex gap-4">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

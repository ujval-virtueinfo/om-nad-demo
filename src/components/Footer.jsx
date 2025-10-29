import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-zinc-900 text-white mt-12">
      <div className="container flex items-center justify-between py-6">
        <div>© {new Date().getFullYear()} Ocean Magics</div>
        <div className="flex gap-4"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  )
}

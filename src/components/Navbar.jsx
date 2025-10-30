import React, {useState, useEffect} from 'react'
import PremiumHamburger from './PremiumHamburger'
import { BRAND } from '../config'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [scrolled,setScrolled]=useState(false)

  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>30)
    window.addEventListener('scroll', onScroll)
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={"fixed w-full z-50 transition-all "+(scrolled?"bg-white/80 backdrop-blur-md shadow-md":"bg-transparent")} >
      <div className="container flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <img src={BRAND.logo} alt={BRAND.name} className="h-10"/>
        </div>

        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#home" className="hover:text-omIndigo">Home</a>
          <a href="#services" className="hover:text-omIndigo">Services</a>
          <a href="#blogs" className="hover:text-omIndigo">Blogs</a>
          <a href="#testimonials" className="hover:text-omIndigo">Testimonials</a>
          <a href="#contact" className="hover:text-omIndigo">Contact</a>
        </nav>

        <div className="flex items-center gap-3">
          <div className="md:hidden">
            <PremiumHamburger open={open} toggle={()=>setOpen(o=>!o)}/>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div className={(open? 'translate-x-0':'translate-x-full') + ' fixed top-0 right-0 h-full w-72 bg-white/90 backdrop-blur-md shadow-lg transition-transform'}>
        <div className="p-6 flex flex-col gap-4">
          <button onClick={()=>setOpen(false)} className="self-end p-2">Close</button>
          <a href="#home" onClick={()=>setOpen(false)} className="py-2">Home</a>
          <a href="#services" onClick={()=>setOpen(false)} className="py-2">Services</a>
          <a href="#blogs" onClick={()=>setOpen(false)} className="py-2">Blogs</a>
          <a href="#testimonials" onClick={()=>setOpen(false)} className="py-2">Testimonials</a>
          <a href="#contact" onClick={()=>setOpen(false)} className="py-2">Contact</a>
        </div>
      </div>
    </header>
  )
}

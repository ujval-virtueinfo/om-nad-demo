import React, {useState, useEffect} from 'react'

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [scrolled,setScrolled]=useState(false)
  useEffect(()=>{
    const onScroll=()=>setScrolled(window.scrollY>40)
    window.addEventListener('scroll', onScroll)
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])
  return (
    <header className={"fixed w-full z-40 transition-all "+(scrolled?"bg-white/80 backdrop-blur-md shadow-sm":"bg-transparent")}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="logo" className="h-10 w-auto"/>
          <div className="font-semibold">Ocean Magics</div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
          <a href="#home" className="hover:text-omBlue">Home</a>
          <a href="#services" className="hover:text-omBlue">Services</a>
          <a href="#blogs" className="hover:text-omBlue">Blogs</a>
          <a href="#testimonials" className="hover:text-omBlue">Testimonials</a>
          <a href="#contact" className="hover:text-omBlue">Contact</a>
        </nav>
        <div className="md:hidden">
          <button onClick={()=>setOpen(v=>!v)} className="p-2 border rounded">☰</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white/95 border-t">
          <div className="px-4 py-4 flex flex-col gap-3">
            <a href="#home" onClick={()=>setOpen(false)}>Home</a>
            <a href="#services" onClick={()=>setOpen(false)}>Services</a>
            <a href="#blogs" onClick={()=>setOpen(false)}>Blogs</a>
            <a href="#testimonials" onClick={()=>setOpen(false)}>Testimonials</a>
            <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}

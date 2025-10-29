import React, {useState} from 'react'

export default function Contact(){
  const [status,setStatus]=useState('')
  function onSubmit(e){
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(()=>setStatus('Thanks, we received your message.'),900)
  }
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-omIndigo to-omViolet text-white">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="bg-white/10 p-6 rounded-2xl">
            <input required name="name" placeholder="Your name" className="w-full p-3 rounded mb-3 bg-white/20 placeholder:text-white"/>
            <input required name="email" type="email" placeholder="Email" className="w-full p-3 rounded mb-3 bg-white/20 placeholder:text-white"/>
            <textarea required name="message" placeholder="Message" className="w-full p-3 rounded mb-3 bg-white/20 placeholder:text-white"/>
            <div className="flex items-center gap-3 mb-3"><div className="px-3 py-2 bg-white/20 rounded">CAPTCHA</div><div className="text-sm text-white/80">Demo placeholder</div></div>
            <button className="px-4 py-2 bg-white text-omIndigo rounded">Send</button>
            {status && <div className="mt-3 text-sm text-white">{status}</div>}
          </form>
          <aside className="p-6 rounded-2xl bg-white/5">
            <div><strong>Address</strong><div className="text-white/80">123 Ocean Drive, Ahmedabad</div></div>
            <div className="mt-4"><strong>Email</strong><div className="text-white/80">hello@oceanmagics.com</div></div>
            <div className="mt-4"><strong>Phone</strong><div className="text-white/80">+91 98765 43210</div></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

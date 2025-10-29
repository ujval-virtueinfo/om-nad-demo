import React, {useState} from 'react'

export default function Contact(){
  const [status,setStatus] = useState('')
  function onSubmit(e){
    e.preventDefault()
    setStatus('Sending...')
    setTimeout(()=> setStatus('Thanks! We received your message.'), 900)
  }
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Contact Us</h2>
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <form onSubmit={onSubmit} className="bg-white p-6 rounded-xl shadow-sm">
            <input name="name" required placeholder="Your name" className="w-full p-3 border rounded mb-3"/>
            <input name="email" type="email" required placeholder="Email" className="w-full p-3 border rounded mb-3"/>
            <textarea name="message" required placeholder="Message" className="w-full p-3 border rounded mb-3"/>
            <div className="flex items-center gap-3">
              <div className="px-3 py-2 rounded bg-gradient-to-r from-omBlue to-omTeal text-white font-semibold">CAPTCHA</div>
              <div className="text-sm text-slate-500">Demo placeholder — verify server-side in production</div>
            </div>
            <div className="mt-4">
              <button className="bg-omBlue text-white px-4 py-2 rounded">Send</button>
            </div>
            {status && <div className="mt-3 text-sm text-green-600">{status}</div>}
          </form>

          <aside className="bg-white p-6 rounded-xl shadow-sm">
            <div><strong>Address</strong><div className="text-slate-600">123 Ocean Drive, Ahmedabad</div></div>
            <div className="mt-4"><strong>Email</strong><div className="text-slate-600">hello@example.com</div></div>
            <div className="mt-4"><strong>Phone</strong><div className="text-slate-600">+91 98765 43210</div></div>
          </aside>
        </div>
      </div>
    </section>
  )
}

import React, {useEffect, useState} from 'react'

export default function ScrollToTop(){
  const [visible,setVisible]=useState(false)
  useEffect(()=>{
    const onScroll=()=> setVisible(window.scrollY>400)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])
  return visible ? (
    <button onClick={()=> window.scrollTo({top:0, behavior:'smooth'})} className="fixed right-6 bottom-6 bg-gradient-to-r from-omBlue to-omTeal text-white p-3 rounded-full shadow-lg">↑</button>
  ) : null
}

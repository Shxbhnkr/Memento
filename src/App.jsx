
import { Routes,Route } from 'react-router-dom'
import { Choosecomp } from './pages/choosepage'
import { Firstpage } from './pages/firstpage'
import { Resultcomp } from './pages/result'
import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
    useEffect(()=>{
    const lenis = new Lenis({
      duration:4
    });
    
    function raf(time) {
        lenis.raf(time);
    requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  })
  return (
  
    <>
      <Routes>
        <Route path="/" element={<Firstpage/>} />
        <Route path="/second" element={<Choosecomp/>} />
        <Route path="/result" element={<Resultcomp />} />
      </Routes>
    
    </>
  )
}  

export default App  

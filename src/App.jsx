
import './App.css'
import { Routes,Route } from 'react-router-dom'
import { Choosecomp } from './pages/choosepage'
import { Firstpage } from './pages/firstpage'
import { Resultcomp } from './pages/result'

function App() {
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

import { useState } from 'react'
import './index.css'
import Ruta from './router/ruta'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Ruta/>
    </>
  )
}

export default App

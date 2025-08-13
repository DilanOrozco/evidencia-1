import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Header from '../components/layout/Header'
import Inicio from '../components/pages/Inicio'
import Productos from '../components/pages/Productos'
import Footer from '../components/layout/Footer'
const Ruta = () => {
    return (
        <BrowserRouter>
            <Header/>
            <section className='content'>
                <Routes>
                    <Route path='/' element = { <Inicio/>}/>
                    <Route path='/inicio' element = { <Inicio/>}/>
                    <Route path='/productos' element = { <Productos/>}/>
                </Routes>
            </section>
            <Footer/>
        </BrowserRouter>
        
    )
}

export default Ruta

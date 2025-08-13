import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    return (
        <header className='header'>
            <div className="brand">KeyStore</div>
            <div className="nav">
                <ul>
                    <li><NavLink to="/inicio">Inicio</NavLink></li>
                    <li><NavLink to="/productos">Productos</NavLink></li>
                    <li><NavLink>Nosotros</NavLink></li>
                    <li><NavLink>Contactanos</NavLink></li>
                    <li><FontAwesomeIcon icon={faMagnifyingGlass} /></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header

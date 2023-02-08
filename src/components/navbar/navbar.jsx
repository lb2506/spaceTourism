import React, { useState } from "react";
import logo from '../../assets/shared/logo.svg'
import { NavLink } from "react-router-dom";

let Navbar = function () {

    const [menuOpen, setMenuOpen] = useState(false);


    return (
        <div className="navbar">
            <button className={`navbar__btn ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>< span className={`navbar__burger ${menuOpen ? 'active' : ''}`}></span></button>
            <img className='navbar__logo' src={logo} alt='logo' />
            <div className="navbar__divider"></div>
            <div className={`navbar__items ${menuOpen ? 'active' : ''}`}>
                <ul>
                    <li onClick={() => setMenuOpen(false)}><NavLink exact="true" className={({ isActive }) => isActive ? 'active' : 'hover'} to="/spaceTourism/"><span className="items__numbers">00</span> HOME</NavLink></li>
                    <li onClick={() => setMenuOpen(false)}><NavLink exact="true" className={({ isActive }) => isActive ? 'active' : 'hover'} to="/spaceTourism/destinations"><span className="items__numbers">01</span> DESTINATIONS</NavLink></li>
                    <li onClick={() => setMenuOpen(false)}><NavLink exact="true" className={({ isActive }) => isActive ? 'active' : 'hover'} to="/spaceTourism/crew"><span className="items__numbers">02</span> CREW</NavLink></li>
                    <li onClick={() => setMenuOpen(false)}><NavLink exact="true" className={({ isActive }) => isActive ? 'active' : 'hover'} to="/spaceTourism/technology"><span className="items__numbers">03</span> TECHNOLOGY</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar

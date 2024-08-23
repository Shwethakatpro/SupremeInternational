import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'
import Logout from '../assets/logout1.png'
import Supreme from '../assets/supreme.png'

const Navbar = () => {
    const [showLogout, setShowLogout] = useState(false);
    const [visibleSection, setVisibleSection] = useState('');

    const handleLogoutClick = () => {
        setShowLogout(!showLogout);
    };

    const handleButtonClick = (section) =>{
        setVisibleSection(section);
    }
    const handleLogout = () => {
        // Add your logout logic here
        console.log('Logged out');
    };

    return (
        <nav className="navbar">
            <img src={Supreme} alt="Supreme International" className="logo" />
            <ul className="menu">
                <li className={`${visibleSection === 'HOME' ? 'active' : ''}`} onClick={() => handleButtonClick('HOME')}><Link to="home">HOME</Link></li>
                <li className={`${visibleSection === 'WHOLEGOODS' ? 'active' : ''}`} onClick={() => handleButtonClick('WHOLEGOODS')}><Link to="wholegoods" >WHOLEGOODS</Link></li>
                <li className={`${visibleSection === 'PARTS' ? 'active' : ''}`} onClick={() => handleButtonClick('PARTS')}><Link to="parts" >PARTS</Link></li>
                <li className={`${visibleSection === 'WARRANTY' ? 'active' : ''}`} onClick={() => handleButtonClick('WARRANTY')}><Link to="warranty" >WARRANTY</Link></li>
                <li className={`${visibleSection === 'FINANCE' ? 'active' : ''}`} onClick={() => handleButtonClick('FINANCE')}><Link to="finance" >FINANCE</Link></li>
            </ul>
            <div className="icon-container">
                <img src={Logout} alt="Logout" className="logout-icon" onClick={handleLogoutClick} />
                {showLogout && (
                    <div className="logout-menu">
                        <button ><Link to="/">Logout</Link></button>
                    </div>
                )}
            </div>

        </nav>
    );
};

export default Navbar;

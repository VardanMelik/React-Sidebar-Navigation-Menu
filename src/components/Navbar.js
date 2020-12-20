import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <div className="navbar">
                <Link to="#" className="menu-bars">
                <FaIcons.FaBars/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar

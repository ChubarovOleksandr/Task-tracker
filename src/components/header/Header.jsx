import React from 'react';
import h from './Header.module.css'

function Header() {
    return (
        <header className={h.header}>
            <h1><span className={h.header_span}>PlannerOK</span> - your the best helper and time-manager</h1>
        </header>
     );
}

export default Header;
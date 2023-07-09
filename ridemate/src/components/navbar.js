import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
  return (
    <>
        <nav className="navbar">
            <div className="container">
                <Link to="/" className="navbar-logo">
                    RideMate <i className="fab fa-typo3"/>
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar;
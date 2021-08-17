import React, {useState} from "react";
import './index.css'

import {Link} from 'react-router-dom'


import Logo from '../../../assets/img/logo.png'

const NavBar = () => {
    const [isMenuOpen, setMenu] = useState(false)
    const toggleMenu = () => {
        setMenu(!isMenuOpen)
    }

    return (
        <nav>
            <button className={`ham ${isMenuOpen? 'girar': ''}`} type="button" onClick={toggleMenu}>
                <span className={`br-1 ${isMenuOpen? 'animado': ''}`}></span>
                <span className={`br-2 ${isMenuOpen? 'animado': ''}`}></span>
                <span className={`br-3 ${isMenuOpen? 'animado': ''}`}></span>
            </button>
            <div className="container">

                <nav className="nav-main-all">

                    <nav className="nav-main-up">

                        <Link to="/">
                            <img
                                src={Logo}
                                alt="lilpix logo"
                                className="nav-brand"
                            />
                        </Link>


                        <ul  className={`enlaces-menu ${isMenuOpen? 'activado': ''}`}>
                            <Link to="/index/index.html">
                                <img
                                    src={Logo}
                                    alt="lilpix logo"
                                    className="nav-brand-menu"
                                />
                            </Link>
                            <li>
                                <Link to="/mon-to-fri">Mon-to-Fri</Link>
                            </li>
                            <li>
                                <Link to="#">Video Loops</Link>
                            </li>
                            <li>
                                <Link to="#">Wallpapers</Link>
                            </li>
                            <li>
                                <Link to="#">Archive</Link>
                            </li>
                            <li>
                                <Link to="#">About</Link>
                            </li>
                            <li>
                                <Link to="#">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                    <hr />


                    <nav className="nav-main-down">

                        <h6 className="slogan">my little pixels</h6>


                        <ul className="nav-menu-social">

                            <li>
                                <a to="#">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>

                            <li>
                                <a to="#">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </li>

                            <li>
                                <a to="#">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>

                            <li>
                                <a to="#">
                                    <i className="fab fa-youtube"></i>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <hr />
                </nav>

            </div>
        </nav>
    )
}

export default NavBar
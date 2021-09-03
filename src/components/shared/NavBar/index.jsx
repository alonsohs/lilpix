import React, { useState } from 'react';
import './index.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img//logo/logo.png';

const NavBar = () => {
	//estado
	const [isMenuOpen, setMenu] = useState(false);
	const toggleMenu = () => {
		setMenu(!isMenuOpen);
	};

	return (
		//JSx
		<nav className="nav__bar">
			<button
				className={`ham ${isMenuOpen ? 'girar' : ''}`}
				type="button"
				onClick={toggleMenu}
			>
				<span className={`br-1 ${isMenuOpen ? 'animado' : ''}`}></span>
				<span className={`br-2 ${isMenuOpen ? 'animado' : ''}`}></span>
				<span className={`br-3 ${isMenuOpen ? 'animado' : ''}`}></span>
			</button>

			<nav className="nav-main-all">
				<nav className="nav-main-up">
					<Link to="/">
						<img src={Logo} alt="lilpix logo" className="nav-brand" />
					</Link>

					<ul className={`enlaces-menu ${isMenuOpen ? 'activado' : ''}`}>
						<Link to="/" onClick={toggleMenu}>
							<img src={Logo} alt="lilpix logo" className="nav-brand-menu" />
						</Link>
						<li>
							<Link to="/mon-to-fri" onClick={toggleMenu}>
								Mon-to-Fri
							</Link>
						</li>
						
						<li>
							<Link to="/wallpapers" onClick={toggleMenu}>
								Wallpapers
							</Link>
						</li>
						<li>
							<Link to="/archive" onClick={toggleMenu}>
								Archive
							</Link>
						</li>
						<li>
							<Link to="/about" onClick={toggleMenu}>
								About
							</Link>
						</li>
						<li>
							<Link to="/contact" onClick={toggleMenu}>
								Contact
							</Link>
						</li>
					</ul>
				</nav>
				<hr className="hr__nav" />

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

				<hr className="hr__nav" />
			</nav>
		</nav>
	);
};

export default NavBar;

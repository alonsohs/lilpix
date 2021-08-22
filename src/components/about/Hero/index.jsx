import React from 'react';
import Myself from '../../../assets/img/about/me.jpg';
import MyselfBehind from '../../../assets/img/about/meBehind.jpg';
import './index.css';
const Hero = () => {
	return (
		<>
			<div className="about_hero">
				<div className="MyselfPic">
					<img className="me_front" src={Myself} alt="" />
					<img src={MyselfBehind} className="me_back" alt="" />
				</div>
				<div>
					<header className="about_container">
						<div className="i_am_container">
							<h1 className="i_am">I</h1>
							<h1 className="i_am">'</h1>
							<h1 className="i_am">m</h1>
							<h1 className="i_am">Jesús</h1>
							<h1 className="i_am">Hernández.</h1>
						</div>

						<p className="">
							I am a digital artist (or at least I try to be) from Tlaxcala,
							Mexico. In my free time I like to learn a variety of things, among
							them, digital art. I started with photography, then I moved on to
							image manipulation with Adobe Photoshop, and today I am in the
							world of 3D graphics using Blender, which together with PS has
							helped me to create everything that is shown in the main section
							of this website "Mon-to-Fri", which is a small movement similar to
							"everyday" but with two days less per week, dhu.
						</p>
					</header>
				</div>
			</div>
		</>
	);
};

export default Hero;

import React from 'react';
import './index.css';

import Collage from '../../../assets/img/MonToFri/Mon-to-Fri_PrincipalCollage.png';
import CollageBehind from '../../../assets/img/MonToFri/Mon-to-Fri_PrincipalCollage_BEHIND.png';

const Hero = ({ numberWeeks }) => {
	return (
		<div className="mon-to-fri_principal">
			<header className="section_header">Mon-to-Fri</header>
			<hr className="hr_m-t-f" />
			<div className="cover_counter">
				<header className="mon-to-fri_counter">
					<div className="num_weeks">
						<h2>{numberWeeks}</h2>
						<h2>&nbsp;Weeks</h2>
					</div>
				</header>
				<div className="mon-to-fri_cover">
					<img className="img-front" src={Collage} alt="cover front" />
					<img src={CollageBehind} className="img-back" alt="cover back" />
				</div>
				<div className="mon-to-fri_description">
					<p>
						*Description of "mon-to-fri" bla bla bla bla bla bla bla bla bla bla
						bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
						bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
						blabla bla bla bla bla bla bla bla blabla bla bla bla bla bla bla
						bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
						bla bla bla bla bla bla bla bla bla bla bla bla and more bla*
					</p>
				</div>
			</div>
		</div>
	);
};

export default Hero;

import React from 'react';
import './index.css';
import ArchiveCover from '../../../assets/img/archive/[ArchiveHero].png';
const Hero = () => {
	return (
		<>
			<header className="section_header">Archive</header>
			<hr className="hr_m-t-f" />
			<div className="hero_container">
				<img className="hero_cover" src={ArchiveCover} alt="" />
			</div>
		</>
	);
};

export default Hero;

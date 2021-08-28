import React from 'react';
import './index.css';
import ArchiveCover from '../../../assets/img/archive/[ArchiveHero].png';
const Hero = () => {
	return (
		<>
			<div className="hero_container">
				<header className="section_header">Archive</header>
				<hr className="hr_m-t-f" />
				<img className="hero_cover" src={ArchiveCover} alt="" />
				<div className="archive_info">
					<h1>
						this section is about my non-finish works and my very first
						"artworks"
					</h1>
				</div>
			</div>
		</>
	);
};

export default Hero;

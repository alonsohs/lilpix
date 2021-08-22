import React from 'react';
import BackgroundVideo from '../../assets/video/header_video_tunnel_loop.webm';
import './index.css';

const Home = () => {
	return (
		<div className="header-video">
			<video autoPlay muted loop className="tunnel">
				<source src={BackgroundVideo} />
			</video>
			<div id="particles-js"></div>
			<header className="showcase">
				<h2 className="not-artistic">Not artistic,</h2>
				<h2 className="unrealistic">unrealistic,</h2>
				<h2 className="unsafe-a-little">unsafe a little,</h2>
				<h2 className="not-those-things">not those things.</h2>

				<p className="what-i-pretend">digital artist in progress... :)</p>
			</header>
		</div>
	);
};

export default Home;

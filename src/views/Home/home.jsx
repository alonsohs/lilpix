import React, {useEffect} from 'react';
import ReactPlayer from 'react-player'
import BackgroundVideo from '../../assets/video/header_video_tunnel_loop.webm';
import './index.css';

const Home = () => {
	useEffect(() => {
		document.body.classList.add('home')

		return () => {
			document.body.classList.remove('home')
		}
	},[])

	const handleOnReady = (e) => {
		console.log(e)
	}
	const handleOnProgress = (e) => {
		console.log(e)
	}

	return (
		<div className="header-video">
			<ReactPlayer
				playing={true}
				onStart={handleOnReady}
				width={'100%'}
				height={'100%'}
				url={BackgroundVideo}
				config={{
					file: {
						forceVideo: true,
						attributes: {
							loop: true,
							muted: true,
							className:'tunnel'
						}
					}
				}}
			/>
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

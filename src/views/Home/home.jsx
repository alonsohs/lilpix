import React, {useEffect, useState} from 'react';
import ReactPlayer from 'react-player'
import BackgroundVideo from '../../assets/video/header_video_tunnel_loop.webm';
import LogoGlitch from '../../assets/img/logo/lilpix_glitch.png'
import Particles from "react-particles-js";

import './index.css';

const Home = () => {

    const [showSplashScreen, setShowSplashScreen] = useState(true);
    const [loadingTime, setLoadingTime] = useState(true);
    const [playVideo, setPlayVideo] = useState(false);

    useEffect(() => {
        document.body.classList.add('opening')
        document.body.classList.add('hide-content')
        document.body.classList.add('home')

        setTimeout(() => {
            setLoadingTime(false)
        }, 2500)

        return () => {
            document.body.classList.remove('home')
            document.body.classList.remove('fade-in')
        }
    }, [])

    useEffect(() => {
        if (!loadingTime && !showSplashScreen) {
            document.body.classList.remove('opening')
            setPlayVideo(true)
            setTimeout(() => {
                document.body.classList.remove('hide-content')
            }, 5000)
        }
    }, [loadingTime, showSplashScreen])

    const handleOnStart = () => {
        setShowSplashScreen(false)
    }

    return (
        <div className="header-video">
            <ReactPlayer
                playing={playVideo}
                onReady={handleOnStart}
                width={'100%'}
                height={'100%'}
                url={BackgroundVideo}
                config={{
                    file: {
                        forceVideo: true,
                        attributes: {
                            loop: true,
                            muted: true,
                            className: 'tunnel'
                        }
                    }
                }}
            />
            <Particles
                className={"particles"}
                params={{
                    "particles": {
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 3
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }
                }
            />
            <header className="showcase">
                <h2 className="not-artistic">Not artistic,</h2>
                <h2 className="unrealistic">unrealistic,</h2>
                <h2 className="unsafe-a-little">unsafe a little,</h2>
                <h2 className="not-those-things">not those things.</h2>

                <p className="what-i-pretend">digital artist in progress... :)</p>
            </header>
            {(loadingTime || showSplashScreen) &&
            <div className={"splash-screen"}>
                <div className={"splash-screen__inner"}>
                    <img src={LogoGlitch} alt="logo"/>
                    <div className="loading">
                        <h2>Loading...</h2>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                        <span/>
                    </div>
                </div>
            </div>
            }
        </div>
    );
};

export default Home;

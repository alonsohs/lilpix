import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import BackgroundVideo from "../../assets/video/tunnel loop - Imgur.mp4";
import BackgroundVideoIOS from "../../assets/video/header_video_tunnel_loop.mp4";
import LogoGlitch from "../../assets/img/logo/lilpix_glitch.png";

import "./index.css";

const Home = () => {
  const screenWidth = window.screen.width;
  const particlesNumber = window.screen.width / 10 - (screenWidth / 100) * 3;
  let showOpening = true;

  if (sessionStorage.getItem("showedOpening")) {
    showOpening = false;
  }

  let video = null;

  if (navigator.userAgent.indexOf("Mac") != -1) {
    video = BackgroundVideoIOS;
  } else {
    video = BackgroundVideo;
  }

  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const [loadingTime, setLoadingTime] = useState(true);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(() => {
    document.body.classList.add("home");
    if (!showOpening) {
      setPlayVideo(true);
    }

    return () => {
      document.body.classList.remove("home");
    };
  }, []);

  useEffect(() => {
    if (showOpening) {
      document.body.classList.add("opening");
      document.body.classList.add("hide-content");

      setTimeout(() => {
        setLoadingTime(false);
      }, 2500);
    }

    return () => {
      document.body.classList.remove("fade-in");
    };
  }, []);

  useEffect(() => {
    if (!loadingTime && !showSplashScreen) {
      document.body.classList.remove("opening");
      setPlayVideo(true);
      setTimeout(() => {
        document.body.classList.remove("hide-content");
      }, 2000);
      sessionStorage.setItem("showedOpening", "true");
    }
  }, [loadingTime, showSplashScreen]);

  const handleOnStart = () => {
    setShowSplashScreen(false);
  };

  return (
    <>
      <title>Home | Lilpix</title>
      <div className="header-video">
        <ReactPlayer
          playing={playVideo}
          onReady={handleOnStart}
          width={"100%"}
          height={"100%"}
          url={video + "#t=3.5"}
          config={{
            file: {
              forceVideo: true,
              attributes: {
                loop: true,
                muted: true,
                className: "tunnel",
                playsInline: true,
              },
            },
          }}
        />
        <header className="showcase">
          <h2 className="not-artistic">Not artistic,</h2>
          <h2 className="unrealistic">unrealistic,</h2>
          <h2 className="unsafe-a-little">unsafe a little,</h2>
          <h2 className="not-those-things">not those things.</h2>

          <p className="what-i-pretend">digital artist in progress... :)</p>
        </header>
        {(loadingTime || showSplashScreen) && showOpening && (
          <div className={"splash-screen"}>
            <div className={"splash-screen__inner"}>
              <img src={LogoGlitch} alt="logo" />
              <div className="loading">
                <h2>Loading...</h2>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;

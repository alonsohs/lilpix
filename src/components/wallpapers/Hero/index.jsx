import React from "react";
import ArchiveCover from "../../../assets/img/wallpapers/[WallpaperHero].png";

const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <header className="section_header">Wallpapers</header>
        <hr className="hr_m-t-f" />
        <img className="hero_cover" src={ArchiveCover} alt="" />
        <div className="archive_info">
          <h1>Wallpapers for your desktop!</h1>
          <p>
            You can download any of these images for free and you can use them
            for whatever you want to use them for :)
          </p>
        </div>
      </div>
    </>
  );
};

export default Hero;

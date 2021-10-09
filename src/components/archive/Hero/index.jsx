import React from "react";
import "./index.css";
import ArchiveCover from "../../../assets/img/archive/[ArchiveHero].png";
const Hero = () => {
  return (
    <>
      <div className="hero_container">
        <header className="section_header">Archive</header>
        <hr className="hr_m-t-f" />
        <img className="hero_cover" src={ArchiveCover} alt="" />
        <div className="archive_info">
          <h1>
            in this section you can find my very first "artworks". I started
            with photography and then I moved on to image manipulation with
            Adobe Photoshop.
          </h1>
        </div>
      </div>
    </>
  );
};

export default Hero;

import React from 'react';
import ArchiveCover from "../../../assets/img/wallpapers/[WallpaperHero].png";

const Hero = () => {
    return (
        <>
            <div className="hero_container">
                <header className="section_header">Wallpapers</header>
                <hr className="hr_m-t-f" />
                <img className="hero_cover" src={ArchiveCover} alt="" />
                <div className="archive_info">
                    <h1>
                       sometimes i remember to do this
                    </h1>
                </div>
            </div>
        </>
    );
};

export default Hero;
import React from "react";
import "./index.css";
import { wallpapers } from "../../../../data_wallpapers";

const Wallpapers = () => {
  return (
    <>
      <div className="photography_container">
        <div className="gallery_wallpapers">
          {wallpapers.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div>
                <img src={item.url} alt="" className="gallery-image" />
              </div>
              <div className="item__info__wall">
                <h3>Dimensions: {item.resolution}</h3>
                <p>Size: {item.size}</p>
                <div className="download__icon">
                  <i className="fas fa-arrow-down"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wallpapers;

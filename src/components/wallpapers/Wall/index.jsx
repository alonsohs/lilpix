import React from "react";
import "./index.css";
import { wallpapers } from "../../../../data_wallpapers";

const Wallpapers = () => {
  const downloadImage = async (imageSrc, title) => {
    const image = await fetch(imageSrc);
    const imageBlog = await image.blob();
    const imageURL = URL.createObjectURL(imageBlog);

    const link = document.createElement("a");
    link.href = imageURL;
    link.download = title;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="photography_container">
        <div className="gallery_wallpapers">
          {wallpapers.map((item) => (
            <div className="gallery-item" key={item.id}>
              <div>
                <img src={item.larger} alt="" className="gallery-image" />
              </div>
              <div className="item__info__wall">
                <h3>Dimensions: {item.resolution}</h3>
                <p>Size: {item.size}</p>
                <div
                  onClick={() => downloadImage(item.url, "wallpaper-lilpix")}
                  className="download__icon"
                >
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

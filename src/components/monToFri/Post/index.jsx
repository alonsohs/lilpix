import React from 'react';

const Post = ({title, date, url}) => {
    return (
        <div className="info_and_img">
            <div className="info_container">
                <div className="img_title">{title}</div>
                <div className="img_date">{date}</div>
            </div>

            <img
                className="img_png"
                src={url}
            />

            <button className="more_btn">More</button>
        </div>
    )
}

export default Post
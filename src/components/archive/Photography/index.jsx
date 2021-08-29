import React from 'react';
import './index.css';

import {photography} from "../../../../data_photos";

const Photography = () => {
    return (
        <>
            <header className="weeks_title">
                PHOTOGRAPHY
                <p></p>
            </header>
            <hr className="hr_m-t-f"/>
            <div className="photography_container">
                <div className="gallery">
                    {photography.map(item => (
                        <div className="gallery-item" key={item.id}>
                            <div>
                                <img
                                    src={item.url}
                                    alt=""
                                    className="gallery-image"
                                />
                            </div>
                            <div className="item__info">
                                <h3>{item.date}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Photography;

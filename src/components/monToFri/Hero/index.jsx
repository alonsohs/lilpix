import React from "react";
import "./index.css";

const Hero = ({ numberWeeks }) => {
  return (
    <div className="mon-to-fri_principal">
      <header className="section_header">Mon-to-Fri</header>
      <hr className="hr_m-t-f" />
      <div className="cover_counter">
        <header className="mon-to-fri_counter">
          <div className="num_weeks">
            <h2>{numberWeeks}</h2>
            <h2>&nbsp;Weeks</h2>
          </div>
        </header>
        <div className="mon-to-fri_cover">
          <img
            className="img-front"
            src="https://i.imgur.com/a1BM6v4l.png"
            alt="cover front"
          />
          <img
            src="https://i.imgur.com/JDFgwmBl.png"
            className="img-back"
            alt="cover back"
          />
        </div>
        <div className="mon-to-fri_description">
          <p>
            *This is a description of "mon-to-fri" bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla
            <strong className="dhu">
              {" "}
              a personal movement similar to "everyday" but with two days less
              per week, dhu.
            </strong>{" "}
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla
            bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla and more
            bla*.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

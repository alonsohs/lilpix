import React from "react";
import Formulario from "../../components/Contact/Formulario";

const Contact = () => {
  return (
    <>
      <title>Contact | Lilpix</title>
      <div className="hero_container">
        <header className="section_header">Contact</header>
        <hr className="hr_m-t-f" />
        <img
          className="hero_cover"
          src="https://i.imgur.com/XAuGL0uh.png"
          alt=""
        />
        <Formulario />
      </div>
    </>
  );
};

export default Contact;

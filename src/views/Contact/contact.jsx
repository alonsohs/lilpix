import React from "react";
import Formulario from "../../components/Contact/Formulario";
import ContactCover from "../../assets/img/contact/[02.09.2021].png";

const Contact = () => {
  return (
    <>
      <div className="hero_container">
        <header className="section_header">Contact</header>
        <hr className="hr_m-t-f" />
        <img className="hero_cover" src={ContactCover} alt="" />
        <Formulario />
      </div>
    </>
  );
};

export default Contact;

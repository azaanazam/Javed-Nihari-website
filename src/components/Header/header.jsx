import React from "react";
import './header.css';

const Header = ({ nihariRef, haleemRef, biryaniRef, tandoorRef, softDrinkRef, tinPackRef }) => {

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className='header'>
      <div className="header1">
        <div className="links">
          <p onClick={() => scrollToSection(nihariRef)}>Nihari</p>
          <p onClick={() => scrollToSection(haleemRef)}>Haleem</p>
          <p onClick={() => scrollToSection(biryaniRef)}>Biryani / Pulao</p>
          <p onClick={() => scrollToSection(tandoorRef)}>Tandoor</p>
          <p onClick={() => scrollToSection(softDrinkRef)}>Soft Drink</p>
          <p onClick={() => scrollToSection(tinPackRef)}>Tin Pack</p>
        </div>
      </div>
    </div>
  );
};

export default Header;

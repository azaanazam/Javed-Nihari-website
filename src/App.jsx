import React, { useRef } from "react";
import Navbar from "./components/Navbar/navbar";
import Home from "./components/Home/home";
import Logo from "./components/Logo/logo";
import Header from "./components/Header/header";
import Nihari from "./components/Header/Links/nihari";
import Haleem from "./components/Header/Links/haleem";
import Biryani from "./components/Header/Links/biryani";
import Tandoor from "./components/Header/Links/Tandoor";
import SoftDrink from "./components/Header/Links/softDring";
import TinPack from "./components/Header/Links/tinPack";

function App() {
  const homeRef = useRef(null);
  const nihariRef = useRef(null);
  const haleemRef = useRef(null);
  const biryaniRef = useRef(null);
  const tandoorRef = useRef(null);
  const softDrinkRef = useRef(null);
  const tinPackRef = useRef(null);

  return (
    <>
      <Navbar homeRef={homeRef} nihariRef={nihariRef} />

      <div ref={homeRef}>
        <Home />
      </div>

      <Logo />

      <Header
        nihariRef={nihariRef}
        haleemRef={haleemRef}
        biryaniRef={biryaniRef}
        tandoorRef={tandoorRef}
        softDrinkRef={softDrinkRef}
        tinPackRef={tinPackRef}
      />

      <Nihari ref={nihariRef} />
      <Haleem ref={haleemRef} />
      <Biryani ref={biryaniRef} />
      <Tandoor ref={tandoorRef} />
      <SoftDrink ref={softDrinkRef} />
      <TinPack ref={tinPackRef} />
    </>
  );
}

export default App;

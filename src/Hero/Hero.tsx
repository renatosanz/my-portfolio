import React from "react";
import "./Hero.css";
import MyPhotoLarge from "../imgs/img-large.png";
import Deco1 from "../svg/idk1.svg";
import Deco2 from "../svg/idk2.svg";

import { ColorScheme } from "../utils/colors";

interface HeroProps {
  colorScheme: ColorScheme;
}

export default function Hero({ colorScheme }: HeroProps) {
  const heightDecorators = 240;
  const genRandomPosition = () => {
    var offsetWidth = window.innerWidth * 0.5;
    var offsetHeight = window.innerHeight * 0.5;
    if (offsetHeight != undefined && offsetWidth != undefined) {
      return {
        top: Math.random() * offsetHeight + "px",
        left: Math.random() * offsetWidth + offsetWidth / 4 + "px",
        rotate: Math.floor(Math.random() * 360) + "deg",
      };
    } else {
      return {
        top: "0px",
        left: "0px",
      };
    }
  };
  return (
    <div className="hero-section-wrap">
      <img
        src={colorScheme.name == "light" ? Deco1 : Deco2}
        className="decos"
        style={genRandomPosition()}
      />
      <img
        src={colorScheme.name == "light" ? Deco1 : Deco2}
        className="decos"
        style={genRandomPosition()}
      />
      <img
        src={colorScheme.name == "light" ? Deco1 : Deco2}
        className="decos"
        style={genRandomPosition()}
      />
      <img
        src={colorScheme.name == "light" ? Deco1 : Deco2}
        className="decos"
        style={genRandomPosition()}
      />
      <img
        src={colorScheme.name == "light" ? Deco1 : Deco2}
        className="decos"
        style={genRandomPosition()}
      />
      <img
        src={colorScheme.name == "light" ? Deco1 : Deco2}
        className="decos"
        style={genRandomPosition()}
      />
      <section
        id="hero-section"
        style={{ backgroundColor: colorScheme.bg_color_2 + "4F" }}
      >

        <div className="description-side">
          <div>
            <h1>Renato Sanchez</h1>
            <h2>Software Developer</h2>
            <h3>I build things for the web and more.</h3>
          </div>
        </div>
        <div className="photo-side">
          <div>
            <img
              id="my-photo-large"
              src={MyPhotoLarge}
              alt="renato sanchez photo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

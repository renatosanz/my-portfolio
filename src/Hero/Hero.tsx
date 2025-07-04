import React from "react";
import "./Hero.css";
import MyPhotoLarge from "../imgs/img-large.webp";
import Deco1 from "../svg/idk1.svg";
import Deco2 from "../svg/idk2.svg";
import Star from "../svg/lil_star.svg";

import { ColorScheme } from "../utils/colors";

interface HeroProps {
  colorScheme: ColorScheme;
}

export default function Hero({ colorScheme }: HeroProps) {
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

  const downloadResume = () => window.open("/resume.pdf", "_self");
  const open_whatsapp_contact = () => {
    const whatsapp_number = "522212783296";
    const text = encodeURIComponent(
      "Hi! I was looking at your web portfolio and I'm interested. Let's talk :)"
    );
    window.open(`https://wa.me/${whatsapp_number}?text=${text}`, "_blank");
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
            <div style={{ display: "flex", gap: "1rem" }}>
              <button
                id="download-resume"
                className="info_btn"
                style={{ backgroundColor: colorScheme.bg_color_3 }}
                onClick={downloadResume}
              >
                <p>My Resume</p>
                <img src={Star} className="btn_icon lil_star" />
              </button>
              <button
                id="contact-whatsapp"
                className="info_btn"
                style={{ backgroundColor: colorScheme.bg_color_3 }}
                onClick={open_whatsapp_contact}
              >
                <p>Contact me!</p>
                <img
                  src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg"
                  alt="contact me on Whatsapp 🤗"
                  className="btn_icon"
                />
              </button>
            </div>
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

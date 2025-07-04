import React from "react";
import "./Hero.css";
import MyPhotoLarge from "../imgs/img-large.webp";
import Deco1 from "../svg/idk1.svg";
import Deco2 from "../svg/idk2.svg";
import Star from "../svg/lil_star.svg";

import { ColorScheme } from "../utils/colors";
import { useState } from "react";

interface HeroProps {
  colorScheme: ColorScheme;
}

export default function Hero({ colorScheme }: HeroProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(true);

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
  const open_telegram_contact = () => {
    const username = "riprtx";
    const text = encodeURIComponent(
      "Hi! I was looking at your web portfolio and I'm interested. Let's talk :)"
    );
    window.open(`https://t.me/${username}?start=${text}`, "_blank");
  };

  const toggleOpenModal = () => setModalOpen(!modalOpen);

  return (
    <>
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
                  <p>my Resume</p>
                  <img
                    src={Star}
                    className="lil_star"
                    style={{ width: "1.5rem" }}
                  />
                </button>
                <button
                  id="contact"
                  className="info_btn"
                  style={{ backgroundColor: colorScheme.bg_color_3 }}
                  onClick={toggleOpenModal}
                >
                  let's talk!
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
      <dialog
        className="modal"
        style={{ display: modalOpen ? "block" : "none" }}
      >
        <div
          className="modal-content"
          style={{
            backgroundColor: colorScheme.bg_color_1,
            color: colorScheme.fg_color,
          }}
        >
          <p>Contact me:</p>
          <div className="my-socials">
            <img
              src="https://www.svgrepo.com/show/303147/whatsapp-icon-logo.svg"
              onClick={open_whatsapp_contact}
              alt="contact me on Whatsapp 🤗"
              className="contact_icon"
            />
            <img
              src="https://www.svgrepo.com/show/349527/telegram.svg"
              onClick={open_telegram_contact}
              alt="contact me on telegram 🤗"
              className="contact_icon"
            />
            <img
              src="https://www.svgrepo.com/show/452229/instagram-1.svg"
              onClick={() =>
                window.open(`https://www.instagram.com/rip.rtx/`, "_blank")
              }
              alt="check my Instagram🤗"
              className="contact_icon"
            />
            <img
              src="https://www.svgrepo.com/show/448234/linkedin.svg"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/authwall?trk=gf&trkInfo=AQGwRG7-KwT1ZAAAAZfTQfaIsmBqDXvnMYXj_MqTBBzzYdvnupUkvRtno0FI2AR7ExkNF0Bxx5zLt-l8H6qbA4jcAuRrjHEFuJ1TaT4PlKZDr0pUf1aOaiSby1YONvAJYw7EQcs=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fin%2Frenato-sanchez-loeza-85b541335%2F`,
                  "_blank"
                )
              }
              alt="check my Instagram🤗"
              className="contact_icon"
            />
            <img
              src="https://www.svgrepo.com/show/448225/github.svg"
              onClick={() =>
                window.open(`https://github.com/renatosanz`, "_blank")
              }
              alt="check my Instagram🤗"
              className="contact_icon"
            />
          </div>
          <button onClick={toggleOpenModal} className="close_modal">
            close
          </button>
        </div>
      </dialog>
    </>
  );
}

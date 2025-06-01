import React from "react";
import "./Navbar.css";
import { ColorScheme } from "../utils/colors";
import { Link } from "react-router-dom";

// svgs & imgs
import MenuIcon from "../svg/menu.svg";
import DarkSVG from "../svg/dark.svg";
import LightSVG from "../svg/light.svg";
import MyPhotoSmall from "../imgs/img_small.jpg";
import Clock from "./Clock";

interface NavbarLink {
  url: string;
  title: string;
  openNewTab?: boolean;
}

interface NavbarProps {
  colorScheme: ColorScheme;
  toggleThemeFunc: any;
}

export default function Navbar({ colorScheme, toggleThemeFunc }: NavbarProps) {
  const sections: Array<NavbarLink> = [
    { url: "/", title: "Home" },
    { url: "/about", title: "About Me" },
    { url: "/projects", title: "My Projects" },
    { url: "https://riprtx.netlify.app/", title: "My Blog", openNewTab: true },
  ];
  return (
    <div className="nav-external-container">
      <header
        className="navbar-wrap"
        style={{ backgroundColor: colorScheme.bg_color_1 }}
      >
        <div id="my-brand" style={{ display: "flex", gap: "1rem" }}>
          <img id="my-photo" src={MyPhotoSmall} />
          <span>
            Renato <br /> Sanchez
          </span>
          <Clock />
        </div>
        <nav>
          <ul>
            {sections.map((section) => (
              <li key={section.title}>
                {section.openNewTab ? (
                  <a
                    style={{ color: colorScheme.fg_color }}
                    href={section.url}
                    target={section.openNewTab ? "_blank" : "_self"}
                  >
                    {section.title}
                  </a>
                ) : (
                  <Link
                    style={{ color: colorScheme.fg_color }}
                    to={section.url}
                  >
                    {section.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          <div id="sandwich-icon">
            <img
              src={MenuIcon}
              style={
                colorScheme.name === "dark"
                  ? { filter: " invert(2)", transition: "0.3s" }
                  : { transition: "0.3s" }
              }
            />
          </div>
          <div id="themeSwitch" className="clickable">
            <img
              onClick={() => toggleThemeFunc()}
              style={
                colorScheme.name === "dark"
                  ? { filter: " invert(2)", transition: "0.3s" }
                  : { transition: "0.3s" }
              }
              src={colorScheme.name === "light" ? DarkSVG : LightSVG}
              alt="Theme Switch"
            ></img>
          </div>
        </nav>
      </header>
    </div>
  );
}

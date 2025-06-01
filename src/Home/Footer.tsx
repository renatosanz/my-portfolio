import React from "react";
import "./Footer.css";
import { ColorScheme } from "../utils/colors";

interface FooterProps {
  colorscheme: ColorScheme;
}

interface MySocialI {
  name: string;
  link: string;
}
export default function Footer({ colorscheme }: FooterProps) {
  const my_socials: Array<MySocialI> = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/renato-sanchez-loeza/",
    },
    {
      name: "GitHub",
      link: "https://github.com/renatosanz",
    },
    {
      name: "X",
      link: "https://x.com/riprtx/likes",
    },
  ];
  return (
    <footer id="footer-wrapper">
      <div id="footer" style={{ backgroundColor: colorscheme.bg_color_1 }}>
        <div>© (2023 - ) Renato Sanchez Loeza. All rights reserved.</div>
        <div>
          <ul>
            {my_socials.map((l) => (
              <li>
                <a href={l.link} style={{ color: colorscheme.fg_color }} target="_blank">
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

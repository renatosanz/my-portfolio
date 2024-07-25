import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles/WhatIDo.css";
import { mySkills } from "../constants/constants";
import SkillBox from "./SkillBox";
import { Tooltip } from "react-tooltip";

export default function WhatIDo({ selfRef }) {
  return (
    <div id="WhatIDo-cont" className="height-Sections-homepage" ref={selfRef}>
      <div className="middle-cont-section">
        <Fade triggerOnce cascade damping={0.1}>
          <h1>I code, design & fix websites.</h1>
        </Fade>
        <br />
        <span className="text">
          I specialize in designing, coding, and enhancing websites using
          cutting-edge technologies such as <b>HTML5</b>, <b>CSS</b>,{" "}
          <b>JavaScript</b>, and <b style={{ color: "#00c7c7" }}>React</b>. With
          a strong grasp of version control using Git and efficient development
          workflows with Vite, I bring your web projects to life. Whether it's
          crafting visually appealing user interfaces, optimizing site
          performance, or troubleshooting issues, I'm here to make your web
          presence shine.
        </span>
        <div id="look-skills">
          <ul id="dynamic-cont">
            {mySkills.map((skill, index) => (
              <Fade className="label-group-description" direction="left" damping={0.1}>
                <div key={index}>
                  <SkillBox item={skill} />
                  <Tooltip place="bottom" anchorSelect={`#${skill.name}-Icon`}>
                    {skill.name}
                  </Tooltip>
                </div>
              </Fade>
            ))}
          </ul>
          <h4>Other skills</h4>
          <ul>
            <li>Adobe Illustrator</li>
            <li>Markdown</li>
            <li>LaTeX</li>
            <li>Java</li>
            <li>C</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Fade } from "react-awesome-reveal";
import "./styles/MyWork.css";
import WorkBox from "./WorkBox";
import { myProjects } from "../constants/constants";

export default function MyWork({ selfRef }) {
  return (
    <div className="MyWork-cont height-Sections-homepage" ref={selfRef}>
      <div className="middle-cont-section">
        <Fade triggerOnce cascade damping={0.1}>
          <h1>My projects.</h1>
        </Fade>
        <br />
        <Fade className="text" triggerOnce cascade damping={0.005} delay={500}>
          Here you can find my projects.
        </Fade>
        <section id="cont-projects">
          {myProjects?.map((project, i) => (
            <Fade
              className="label-group-description"
              direction="bottom"
              damping={0.1}
            >
              <WorkBox
                key={i}
                urlProject={project.url}
                bg={project.bgColor}
                title={project.title}
                fontColor={project.fontColor}
                urlrepo={project.repository}
                icon={project.icon}
              />
            </Fade>
          ))}
        </section>
      </div>
    </div>
  );
}

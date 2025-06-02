import React from "react";
import "./Projects.css";
import { ColorScheme } from "../utils/colors";
import { myProjects, ProjectI } from "../utils/globals";
import linkIcon from "../svg/lil_star copy.svg";

interface ProjectsProps {
  colorScheme: ColorScheme;
}

export default function Projects({ colorScheme }: ProjectsProps) {
  const years = Array.from(new Set(myProjects.map((p) => p.year)));

  const projectsByYearGroup = years.map((y) => ({
    year: y,
    projects: myProjects.filter((p) => p.year === y),
  }));

  return (
    <div className="projects-section-wrap">
      <div className="projects">
        <h1>Projects</h1>
        {projectsByYearGroup.map((g) => (
          <>
            <h2>{g.year}</h2>
            <div className="projects-container">
              {g.projects.map((p) => (
                <Card project={p} />
              ))}
            </div>
          </>
        ))}
        <div className="projects-container"></div>
      </div>
    </div>
  );
}
const Card = ({ project }: { project: ProjectI }) => {
  const { bgColor, fontColor, url, title, icon, repository } = project;

  const renderContent = () => (
    <>
      <span>{title}</span>
      {icon && <img src={icon} alt={title} />}
    </>
  );

  return (
    <div className="workbox" style={{ background: bgColor, color: fontColor }}>
      {url ? (
        <>
          <a
            href={url}
            style={{ color: fontColor }}
            target="_blank"
            rel="noopener noreferrer"
            className="cont-workbox"
          >
            {renderContent()}
          </a>

          <a
            href={repository}
            target="_blank"
            rel="noopener noreferrer"
            className="send-repo"
          >
            <img src={linkIcon} alt="repository" />
            <p style={{ color: fontColor }}>GitHub</p>
          </a>
        </>
      ) : (
        <a
          href={repository}
          style={{ color: fontColor }}
          target="_blank"
          rel="noopener noreferrer"
          className="cont-workbox"
        >
          {renderContent()}
        </a>
      )}
    </div>
  );
};

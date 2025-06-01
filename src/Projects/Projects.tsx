import React from "react";
import "./Projects.css";
import { ColorScheme } from "../utils/colors";

interface ProjectsProps {
  colorScheme: ColorScheme;
}

export default function Projects({ colorScheme }:ProjectsProps) {
  return (
    <div className="projects-section-wrap">
      <div className="projects">projects</div>
    </div>
  );
}

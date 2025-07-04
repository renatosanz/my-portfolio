import React from "react";
import { ColorScheme } from "../utils/colors";
import "./About.css";
import DelfinIMG from "../imgs/delfin-instance.webp";
import Origami1 from "../imgs/origami1.webp";
import Origami2 from "../imgs/origami2.webp";
import Origami3 from "../imgs/origami3.webp";
import Processing from "../imgs/processing.webp";
import Hackathon from "../imgs/hackathon.jpg";
import Hackathon2 from "../imgs/second_hack.webp";

interface AboutProps {
  colorScheme: ColorScheme;
}

interface GalleryItemI {
  image: string;
  description?: string;
}

export default function About({ colorScheme }: AboutProps) {
  const galleryItems: Array<GalleryItemI> = [
    {
      image: DelfinIMG,
      description:
        "end of my virtual instance on the Delfín Program (Scientific Research) at UAS",
    },
    {
      image: Origami1,
      description: "my first modular origami",
    },
    {
      image: Origami2,
      description: "a little dog",
    },
    {
      image: Hackathon,
      description:
        "my first hackathon I participated in with friends (Nintendo DS photo)",
    },
    {
      image: Hackathon2,
      description:
        "my second hackathon, my team developed a web/Android streaming app for independent filmmakers in ARPA/BUAP.",
    },
    {
      image: Origami3,
      description: "some modular origami",
    },
    {
      image: Processing,
      description:
        "a piece of my processing images",
    },
  ];
  return (
    <div className="about-section-wrap">
      <div id="About">
        <div className="text-side">
          <h1>About me</h1>
          <p>
            Hi! I'm Renato Sanchez, I'm software/web developer in the road to
            fullstack. I had experience working with basic web tecnologies like
            Javascript, CSS and HTML, but since 2021 I've worked with React JS,
            Angular and more recently Astro, so I can handle almost any frontend
            project, and in other hand, I've worked with Node/Express.js on
            backend and SQL model databases. Currently I'm learning more about
            machine learning, Neuronal Networks and AI.
          </p>
          <p>
            My capabilities have growth with time, and I also have knowledge on
            C, Python, Lua, Java, Kotlin (Jetpack Compose), Linux
            (Debian/Arch-based Systems), git (for version control).
          </p>
          <p></p>
          <p>
            Nowadays I am in the 9th semester of my degree in Computer Science
            on the BUAP University, so I hope to finish it in August 2026. But
            in addition to my career courses, for the past six months I've been
            taking Google Data Scientist courses (check them out on my LinkedIn
            profile).
          </p>
          <p>
            In April-August of 2024 I realize a virtual instance of Delfín
            Program on the Autonomous University of Sonora in the project
            "Diagnostic diagrams in galaxies observed with MaNGA field
            spectroscopy from the Sloan Digital Sky Survey", this because more
            than just programming I love to integrate different study fields
            with CS, so why not astronomy? :)
          </p>
          <h2>Hobbies</h2>
          <p>
            Since COVID-19 pandemic I've learning more about Origami, game
            developement and music production, this for psicologycal/emotional
            support.
          </p>
          <p>
            I also write my own dev blog where I post CS projects that I find
            interesting or related to arts or maths. This is one of my greates
            projects that I've started so far, and hope to help to anyone
            approaching complex topics.
          </p>
        </div>
        <div className="gallery-side">
          <h1>Gallery</h1>
          <section>
            {galleryItems.map((e) => (
              <div className="gallery-item">
                <img src={e.image} />
                {e.description ? <p>{e.description}</p> : <></>}
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

import React, { useState, useRef,useEffect } from "react";

import "./page/themeDark.css";
import "./page/themeLight.css";

import Navbar from "./page/Navbar";
import Description from "./Homepage/Description";
import WhatIDo from "./Homepage/WhatIDo";
import MyWork from "./Homepage/MyWork";
import AboutMe from "./Homepage/AboutMe";
import Footer from "./page/Footer";
import BlogList from "./components_Blog/BlogList";
import Playground from "./playground/Playground";

export default function App() {
  const [theme, setTheme] = useState("light");
  const what_i_do = useRef(null);
  const my_work = useRef(null);
  const about_me = useRef(null);

  const home = useRef(null);
  const blog = useRef(null);
  const playground = useRef(null);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
    }
  }, [])
  

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div id="background" className={"mode-" + theme}>
      <Navbar func={changeTheme} icon={theme} refs={[home, blog, playground]} />
      <div id="cont-page">
        <Description selfRef={home} refs={{ what_i_do, my_work, about_me }} />
        <WhatIDo selfRef={what_i_do} />
        <MyWork selfRef={my_work} />
        <AboutMe selfRef={about_me} />
        <BlogList selfRef={blog} />
        <Playground selfRef={playground} />
      </div>
      <Footer />
    </div>
  );
}

import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./Home.css";
import {
  colors,
  ColorScheme,
  dark_color_scheme,
  light_color_scheme,
} from "../utils/colors";
import { useState } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Projects from "../Projects/Projects";

export default function Home() {
  const [darkMode, setDarkMode] = useState<Boolean>(true);
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(dark_color_scheme);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const toggleThemeFunc = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      setColorScheme(light_color_scheme);
    } else {
      setColorScheme(dark_color_scheme);
    }
  };
  return (
    <div
      className="home-main-container"
      style={{
        backgroundColor: colorScheme.bg_color,
        color: colorScheme.fg_color,
      }}
    >
      {loading ? (
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Router>
            <Navbar
              colorScheme={colorScheme}
              toggleThemeFunc={toggleThemeFunc}
            />
            <main id="main-content-wrapper">
              <Routes>
                <Route path="/" element={<Hero colorScheme={colorScheme} />} />
                <Route
                  path="/about"
                  element={<About colorScheme={colorScheme} />}
                />
                <Route
                  path="/projects"
                  element={<Projects colorScheme={colorScheme} />}
                />
              </Routes>
            </main>
          </Router>
          <Footer colorscheme={colorScheme} />
        </>
      )}
    </div>
  );
}

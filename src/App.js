// import NavBar_logo from "./images/gitdp.jpg";
import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Bgi from "./Components/bgi";
import Skill from "./Components/skill.js";
import { skilldata } from "./Components/skilldata";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/projects";
import Footer from "./Components/footer";
// import {
//   createBrowserRouter,
//   createRoutesFromElements,
//   Route,
//   Link,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";

export default function App() {
  return (
    <>
      <Navbar />

      <Bgi id="home " />
      <Aboutme id="aboutme" />
      <Skill slides={skilldata} id="skills" />
      <Projects id="projects" />
      <Footer id="footer" />
      {/* <RouterProvider router={router} /> */}
    </>
  );
}

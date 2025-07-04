import React from "react";
import Header from "../components/Header";
import Skills from '../components/Skills'
import Experience from "../components/Experience";
import TopProjects from "../components/TopProjects";

const Home = () => {
  return (
    <div>
      <Header />
      <Skills/>
      <Experience/>
      <TopProjects/>
    </div>
  );
};

export default Home;

import Head from "next/head";
import React from "react";

import Header from "../Components/Header";
import ContactSection from "../Components/ContactSection";
import HomeSection from "../Components/HomeSection";
import ProjectsSection from "../Components/ProjectsSection";
import SkillsSection from "../Components/SkillsSection";
import Footer from "../Components/Footer";
import GlobalStyles from "../styles/GlobalStyles";

export default function App() {
  return (
    <div className="App">
      <Head>
        <title>Kelwin vieira</title>
      </Head>
      <Header />
      <HomeSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
      <GlobalStyles />
    </div>
  );
}

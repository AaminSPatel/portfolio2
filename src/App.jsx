import React from "react"
import AboutMe from "./Aboutme/aboutme"
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider
import Header from "./Header/header";
import SkillsSection from "./Skills/skills3";
import PhotoGallery from "./Gallery/gallery2";
import ContactMe from "./Contactme/contactme";
import Footer from "./Footer/footer";
import HeroSection from "./Hero/hero";
import Hero from "./Gallery/hero";

export default function App (props) {
  return (
    <ThemeProvider>
      <div>
      <Header/>
      <Hero/>
     {/*  <HeroSection/> */}

      <AboutMe/>
      <SkillsSection/>
      <PhotoGallery/>
      <ContactMe/>
      <Footer/>
    </div>
  </ThemeProvider>
    
  )
};
import React from 'react';
import Hero from '../sections/Hero/Hero';
import Projects from '../sections/Projects/Projects';
import Skills from '../sections/Skills/Skills';
import Contact from '../sections/Contact/Contact';
import Footer from '../sections/Footer/Footer';
import ArtForFun from '../sections/ArtForFun/ArtForFun';

function Home() {
    return (
        <>
          <Hero/>
          <Projects />
          <Skills />
          <ArtForFun />
          <Footer/>
        </>
      );
}

export default Home;

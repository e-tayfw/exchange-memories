// src/pages/About.tsx
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutHero from '../components/AboutHero';
import AboutStory from '../components/AboutStory';
import PhotoGrid from '../components/PhotoGrid';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <main>
      <AboutHero />
      <AboutStory />
      <PhotoGrid />
    </main>
  );
}

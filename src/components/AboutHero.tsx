import React from "react";
import aboutBg from "../assets/images/about.jpeg";


export default function AboutHero() {
  return (
    <section
      className="relative w-full h-[60vh] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${aboutBg})` }}
      data-aos="fade-in"
    >
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Hero headline */}
      <h1 className="relative text-5xl md:text-6xl font-extrabold text-white z-10">
        About Our Travel Journey
      </h1>
    </section>
  );
}

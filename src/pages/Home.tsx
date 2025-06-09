// src/pages/Home.tsx
import { NavLink } from "react-router-dom";
import heroBg from "../assets/images/apr_10.jpeg";

export default function Home() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 bg-cover bg-center before:absolute before:inset-0 before:bg-black/70 before:z-0"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* place your content in a z-10 layer to be above the overlay */}
      <div className="relative z-10 space-y-4">
        <h2 className="text-5xl font-extrabold text-white">
          Memories Together
        </h2>
        <NavLink
          to="/gallery"
          className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
        >
          View the Gallery
        </NavLink>
      </div>
    </section>
  );
}

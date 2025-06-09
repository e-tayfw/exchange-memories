// src/components/PhotoGrid.tsx
import React from "react";
import ab1 from "../assets/images/ab1.jpeg";
import ab2 from "../assets/images/ab2.jpeg";
import ab3 from "../assets/images/ab3.jpeg";
import ab4 from "../assets/images/ab4.jpeg";

const photos = [
    ab1,
    ab2,
    ab3,
    ab4,
    // Add more photos as needed
];

export default function PhotoGrid() {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-6 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {photos.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden rounded-lg shadow-lg"
            data-aos="zoom-in"
            data-aos-delay={i * 100}
          >
            <img
              src={src}
              alt={`Spain ${i + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

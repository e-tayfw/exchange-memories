// src/components/PhotoGrid.tsx
import React from "react";

const photos = [
  "/public/images/ab1.jpeg",
  "/public/images/ab2.jpeg",
  "/public/images/ab3.jpeg",
  "/public/images/ab4.jpeg",
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

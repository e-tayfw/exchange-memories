// src/components/Header.tsx
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm shadow-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-800">Our Travels</h1>
        <nav className="flex space-x-4">
          {["/", "/gallery", "/about"].map((to, i) => {
            const label = ["Home", "Gallery", "About"][i];
            return (
              <NavLink
                key={to}
                to={to}
                end={to === "/"}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition ${
                    isActive
                      ? "bg-primary-100 text-primary-800"
                      : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  }`
                }
              >
                {label}
              </NavLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
}

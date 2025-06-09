// src/pages/Home.tsx
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import { HiChevronDown } from 'react-icons/hi';
import heroBg from "../assets/images/apr_10.jpeg";

export default function Home() {
  return (
    <>
      <motion.section
        className="relative hero-kenburns min-h-screen flex flex-col items-center justify-center text-center space-y-6 px-4 bg-cover bg-center before:absolute before:inset-0 before:bg-black/70 before:z-0"
        style={{ backgroundImage: `url(${heroBg})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* place your content in a z-10 layer to be above the overlay */}
        <motion.div
          className="relative z-10 space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
        >
          <h2 className="text-5xl font-extrabold text-white">
            Memories Together
          </h2>
          <NavLink
            to="/gallery"
            className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            View the Gallery
          </NavLink>
        </motion.div>
        <motion.div
          className="absolute bottom-8 flex w-full justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <HiChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </motion.section>
 <section className="max-w-5xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
        {[
          { title: 'Gallery Highlights', to: '/gallery' },
          { title: 'About Our Story', to: '/about' },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            className="p-6 bg-white rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">Quick overview of {item.title.toLowerCase()}.</p>
            <NavLink
              to={item.to}
              className="mt-4 inline-block text-primary-600 hover:underline"
            >
              Learn More →
            </NavLink>
          </motion.div>
        ))}
      </section>
    </>
  );
}

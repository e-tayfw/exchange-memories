// src/components/MemoryModal.tsx
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Memory } from '../data/memories';
import { motion, AnimatePresence } from 'framer-motion';

interface MemoryModalProps {
  memory: Memory;
  onClose: () => void;
}

const variants = {
  enter: (direction: number) => ({ x: direction > 0 ? 300 : -300, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction: number) => ({ x: direction > 0 ? -300 : 300, opacity: 0 }),
};

export default function MemoryModal({ memory, onClose }: MemoryModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const prev = () => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(currentIndex - 1);
    }
  };

  const next = () => {
    if (currentIndex < memory.image.length - 1) {
      setDirection(1);
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center z-50"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="bg-white rounded-lg max-w-4xl max-h-[90vh] w-full p-8 relative overflow-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 z-10"
          >
            ✕
          </button>

          <div className="relative w-full flex-shrink-0 flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={memory.image[currentIndex]}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5 }}
                alt={memory.title}
                className="w-full h-[70vh] object-cover"
              />
            </AnimatePresence>

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white text-sm rounded px-3 py-1 z-10">
              {currentIndex + 1}/{memory.image.length}
            </div>

            {currentIndex > 0 && (
              <button
                onClick={prev}
                className="absolute left-4 text-white bg-black/40 p-2 rounded-full z-10"
              >
                <FaChevronLeft className="w-6 h-6" />
              </button>
            )}
            {currentIndex < memory.image.length - 1 && (
              <button
                onClick={next}
                className="absolute right-4 text-white bg-black/40 p-2 rounded-full z-10"
              >
                <FaChevronRight className="w-6 h-6" />
              </button>
            )}
          </div>

          <div className="px-8 py-4 space-y-4 flex-1 overflow-y-auto">
            <h3 className="text-2xl font-semibold">{memory.title}</h3>
            <p className="text-gray-600">{memory.date}</p>
            <p className="text-gray-700">{memory.description}</p>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

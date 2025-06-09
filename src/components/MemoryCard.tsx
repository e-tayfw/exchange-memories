// src/components/MemoryCard.tsx
import { Memory } from "../data/memories";

export default function MemoryCard({ memory }: { memory: Memory }) {
  return (
    <div className="group relative bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img
        src={memory.image[0]}
        alt={memory.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
      />
      <div className="p-4 space-y-2">
        <h3 className="text-xl font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
          {memory.title}
        </h3>
        <p className="text-gray-500 text-sm">{memory.date}</p>
        <p className="text-gray-600 line-clamp-3">{memory.description}</p>
      </div>
      {/* Optional overlay on hover */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
}

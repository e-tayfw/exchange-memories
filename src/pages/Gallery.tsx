// src/pages/Gallery.tsx
import React, { useState, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { memories, Memory } from '../data/memories'
import MemoryCard from '../components/MemoryCard'
import MemoryModal from "../components/MemoryModal";
import MultiSelectDropdown from '../components/MultiSelectDropdown';
import DateFilterDropdown from '../components/DateFilterDropdown';

export default function Gallery() {
  // extract unique countries
  const countries = Array.from(new Set(memories.map(m => m.country)))

  // filters state
  const [countryFilter, setCountryFilter] = useState<string[]>([])
  const [dateFilter, setDateFilter] = useState<string>('')
  // modal state
  const [selected, setSelected] = useState<Memory | null>(null)

  useEffect(() => {
    AOS.init({ duration: 600, easing: 'ease-out-cubic', once: true })
  }, [])

  // filter logic
  const filtered = memories.filter(m => {
    const byCountry = countryFilter.length === 0 || countryFilter.includes(m.country);
    const byDate = !dateFilter || m.date === dateFilter;
    return byCountry && byDate;
  })

  return (
    <section className="max-w-5xl mx-auto px-6 py-12 space-y-8">
      <h2 className="text-4xl font-extrabold text-gray-800">Gallery</h2>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 items-center">
        <MultiSelectDropdown
          label="Countries"
          options={countries}
          selected={countryFilter}
          onChange={setCountryFilter}
        />
        <DateFilterDropdown
          selectedDate={dateFilter}
          onChange={setDateFilter}
        />
        <button
          onClick={() => { setCountryFilter([]); setDateFilter(''); }}
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
        >
          Reset Filters
        </button>
      </div>

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m) => (
          <div
            key={m.id}
            data-aos="fade-up"
            onClick={() => setSelected(m)}
            className="cursor-pointer"
          >
            <MemoryCard memory={m} />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <MemoryModal memory={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

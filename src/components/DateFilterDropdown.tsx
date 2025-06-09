// src/components/DateFilterDropdown.tsx

import React, { useState, useRef, useEffect } from 'react';

interface DateFilterDropdownProps {
  selectedDate: string;
  onChange: (date: string) => void;
}

export default function DateFilterDropdown({
  selectedDate,
  onChange,
}: DateFilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="inline-flex justify-between w-40 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {selectedDate || 'Select Date'}
        <svg
          className={`ml-2 h-5 w-5 transition-transform ${open ? 'rotate-180' : ''}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 
               011.06.02L10 10.94l3.71-3.71a.75.75 
               0 111.06 1.06l-4.24 4.24a.75.75 
               0 01-1.06 0L5.21 8.29a.75.75 
               0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {open && (
        <div className="absolute mt-1 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-2">
          <input
            type="date"
            value={selectedDate}
            onChange={e => onChange(e.target.value)}
            className="w-full px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-300"
          />
          {selectedDate && (
            <button
              onClick={() => onChange('')}
              className="mt-2 w-full text-left text-sm text-red-600 hover:underline"
            >
              Clear Date
            </button>
          )}
        </div>
      )}
    </div>
  );
}

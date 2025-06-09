// src/components/DateFilterDropdown.tsx
import React, { useState, useRef, useEffect } from 'react';
import { memories } from '../data/memories'; // import to derive years

interface DateFilterDropdownProps {
  selectedDate: string; // will receive YYYY, or YYYY-MM, or YYYY-MM-DD
  onChange: (date: string) => void;
}

export default function DateFilterDropdown({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectedDate,
  onChange,
}: DateFilterDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // derive unique years from memories
  const uniqueYears = Array.from(
    new Set(memories.map(m => m.date.slice(0, 4)))
  ).sort((a, b) => Number(b) - Number(a));

  // month options
  const months = [
    { value: '01', label: 'January' },
    { value: '02', label: 'February' },
    { value: '03', label: 'March' },
    { value: '04', label: 'April' },
    { value: '05', label: 'May' },
    { value: '06', label: 'June' },
    { value: '07', label: 'July' },
    { value: '08', label: 'August' },
    { value: '09', label: 'September' },
    { value: '10', label: 'October' },
    { value: '11', label: 'November' },
    { value: '12', label: 'December' },
  ];

  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');

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

  // compute days in selected month
  const daysInMonth = (y: number, m: number) => new Date(y, m, 0).getDate();

  // emit composite date filter
  useEffect(() => {
    if (year && month && day) {
      onChange(`${year}-${month}-${day}`);
    } else if (year && month) {
      onChange(`${year}-${month}`);
    } else if (year) {
      onChange(year);
    } else {
      onChange('');
    }
  }, [year, month, day, onChange]);

  // label displayed on button
  const labelText = year
    ? month
      ? day
        ? `${year}-${month}-${day}`
        : `${year}-${month}`
      : year
    : 'Select Date';

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="inline-flex justify-between w-40 px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        {labelText}
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
        <div className="absolute mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-20 p-4 space-y-3">
          {/* Year selector */}
          <select
            value={year}
            onChange={e => { setYear(e.target.value); setMonth(''); setDay(''); }}
            className="w-full px-2 py-1 border rounded-md"
          >
            <option value="">Year</option>
            {uniqueYears.map(y => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>

          {/* Month selector */}
          <select
            value={month}
            onChange={e => { setMonth(e.target.value); setDay(''); }}
            disabled={!year}
            className="w-full px-2 py-1 border rounded-md disabled:bg-gray-100"
          >
            <option value="">Month</option>
            {months.map(m => (
              <option key={m.value} value={m.value}>
                {m.label}
              </option>
            ))}
          </select>

          {/* Day selector */}
          {year && month && (
            <select
              value={day}
              onChange={e => setDay(e.target.value)}
              className="w-full px-2 py-1 border rounded-md"
            >
              <option value="">Day</option>
              {Array.from({ length: daysInMonth(+year, +month) }, (_, i) => {
                const d = String(i + 1).padStart(2, '0');
                return (
                  <option key={d} value={d}>
                    {d}
                  </option>
                );
              })}
            </select>
          )}

          {/* Clear button */}
          <button
            onClick={() => { setYear(''); setMonth(''); setDay(''); }}
            className="w-full text-left text-sm text-red-600 hover:underline"
          >
            Clear Date Filter
          </button>
        </div>
      )}
    </div>
  );
}

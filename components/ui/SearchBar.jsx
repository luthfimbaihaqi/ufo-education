'use client';

import { Search } from 'lucide-react';

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative max-w-xl mx-auto mb-12">
      {/* Ikon Search di Kiri */}
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      
      {/* Input Field */}
      <input
        type="text"
        className="block w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition-all"
        placeholder="Cari topik insight... (misal: UKT, Beasiswa)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      
      {/* Hiasan bayangan halus */}
      <div className="absolute inset-0 rounded-2xl shadow-lg opacity-0 hover:opacity-10 transition-opacity pointer-events-none bg-green-500"></div>
    </div>
  );
}
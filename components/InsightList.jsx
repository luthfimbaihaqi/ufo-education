'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Calendar, ArrowRight, BarChart3 } from 'lucide-react';
import SearchBar from '@/components/ui/SearchBar'; // Import Search Bar

export default function InsightList({ initialPosts }) {
  const [searchTerm, setSearchTerm] = useState('');

  // Logika Filter: Cari judul atau summary yang cocok
  const filteredPosts = initialPosts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* 1. Search Bar */}
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      {/* 2. Grid Artikel (Hasil Filter) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <Link 
            key={post.slug} 
            href={`/insights/${post.slug}`}
            className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
          >
            {/* Gambar Sampul */}
            <div className="relative h-48 w-full overflow-hidden bg-gray-200">
              {post.image ? (
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                  <BarChart3 className="w-12 h-12 opacity-20" />
                </div>
              )}
              
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </div>
            </div>

            {/* Konten Teks */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors line-clamp-2 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
                {post.summary}
              </p>
              <div className="pt-4 border-t border-gray-100 flex items-center text-green-600 font-bold text-sm group-hover:gap-2 transition-all">
                Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* 3. Pesan Jika Tidak Ditemukan */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
          <div className="text-5xl mb-4">🛸</div>
          <h3 className="text-xl font-bold text-gray-900">Wah, Kosong!</h3>
          <p className="text-gray-500">
            Tidak ada artikel yang cocok dengan pencarian "{searchTerm}".
          </p>
        </div>
      )}
    </>
  );
}
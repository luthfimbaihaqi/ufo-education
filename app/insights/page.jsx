import Link from 'next/link';
import { getAllInsights } from '@/lib/mdx'; // Pastikan import ini benar
import { Calendar, ArrowRight, BarChart3 } from 'lucide-react';

export const metadata = {
  title: "Data Insight - UFO Education",
  description: "Kumpulan artikel dan visualisasi data pendidikan Indonesia.",
};

// --- INI KUNCINYA: Harus ada 'export default' ---
export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-4">
            <BarChart3 className="w-4 h-4" />
            Pusat Data
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Jelajahi Insight Terbaru
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Temukan fakta-fakta menarik seputar pendidikan Indonesia yang disajikan secara visual.
          </p>
        </div>

        {/* GRID KARTU ARTIKEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/insights/${post.slug}`}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-4">
                <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>
              </div>
              
              <p className="text-gray-500 mb-6 flex-grow leading-relaxed line-clamp-3">
                {post.summary}
              </p>

              <div className="flex items-center font-bold text-green-600 group-hover:gap-2 transition-all">
                Baca Selengkapnya <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </Link>
          ))}
        </div>

        {/* Pesan jika kosong */}
        {posts.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            <p>Belum ada insight yang diterbitkan. Tunggu ya! 👽</p>
          </div>
        )}

      </div>
    </div>
  );
}
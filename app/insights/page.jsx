import Link from 'next/link';
import { getAllInsights } from '@/lib/mdx';
import { Calendar, ArrowRight, BarChart3, TrendingUp } from 'lucide-react';

export const metadata = {
  title: "Data Insight - UFO Education",
  description: "Kumpulan artikel dan visualisasi data pendidikan Indonesia.",
};

export default function InsightsPage() {
  const posts = getAllInsights();

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold">
            <TrendingUp className="w-4 h-4" />
            Pusat Data Pendidikan
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
            Jelajahi Insight Terbaru
          </h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            Temukan fakta pendidikan Indonesia yang disajikan lewat <span className="text-green-600 font-bold">Data & Visualisasi</span>.
          </p>
        </div>

        {/* GRID ARTICLE (Dengan Gambar) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/insights/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              {/* --- BAGIAN GAMBAR (BARU) --- */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                {post.image ? (
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                ) : (
                  // Fallback jika lupa pasang gambar
                  <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gray-100">
                    <BarChart3 className="w-12 h-12 opacity-20" />
                  </div>
                )}
                
                {/* Badge Tanggal Melayang di atas Gambar */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-gray-700 shadow-sm flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {post.date}
                </div>
              </div>

              {/* --- BAGIAN KONTEN TEKS --- */}
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

        {/* PESAN JIKA KOSONG */}
        {posts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-300">
            <div className="text-5xl mb-4">🛸</div>
            <h3 className="text-xl font-bold text-gray-900">Belum Ada Data</h3>
            <p className="text-gray-500">Silakan tambahkan file .mdx di folder content.</p>
          </div>
        )}

      </div>
    </div>
  );
}
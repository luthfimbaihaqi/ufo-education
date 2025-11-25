import { getAllInsights } from '@/lib/mdx';
import { TrendingUp } from 'lucide-react';
import InsightList from '@/components/InsightList'; // Import komponen client tadi

export const metadata = {
  title: "Data Insight - UFO Education",
  description: "Kumpulan artikel dan visualisasi data pendidikan Indonesia.",
};

export default function InsightsPage() {
  // Ambil semua data di server
  const posts = getAllInsights();

  return (
    <div className="bg-gray-50 min-h-screen py-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="text-center mb-12 space-y-4">
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

        {/* PANGGIL KOMPONEN DAFTAR INTERAKTIF */}
        {/* Kita kirim data 'posts' ke komponen ini */}
        <InsightList initialPosts={posts} />

      </div>
    </div>
  );
}
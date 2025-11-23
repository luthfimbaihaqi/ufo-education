import Link from 'next/link';
import { Rocket, BarChart3, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative overflow-hidden pt-16 pb-32 md:pt-32">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Kiri: Teks & Copywriting */}
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Platform Edukasi Data No. 1
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Akses Pengetahuan <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
                Untuk Semua Orang
              </span> 👽
            </h1>
            
            <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
              UFO (University For Everyone) membantu kamu memahami kondisi pendidikan Indonesia melalui visualisasi data, artikel, dan pengetahuan yang bisa dipakai siapa saja. Semuanya gratis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/insights" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white bg-green-600 rounded-xl font-bold hover:bg-green-700 transition-all hover:scale-105 shadow-lg shadow-green-200"
              >
                <Rocket className="w-5 h-5" />
                Mulai Jelajah
              </Link>
              <Link 
                href="/about" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-gray-700 bg-gray-100 rounded-xl font-bold hover:bg-gray-200 transition-all"
              >
                Tentang Kami
              </Link>
            </div>
          </div>

          {/* Kanan: Ilustrasi / Maskot (Placeholder Alien) */}
          <div className="relative z-10 flex justify-center">
            {/* Lingkaran Hiasan Belakang */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
            
            {/* Kartu Alien */}
            <div className="relative bg-white/80 backdrop-blur-xl border border-white/50 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="text-9xl text-center filter drop-shadow-lg">
                🛸
              </div>
              <div className="mt-6 text-center">
                <p className="font-bold text-gray-800 text-lg">Halo, Penduduk Bumi!</p>
                <p className="text-gray-500 text-sm">Siap melihat data hari ini?</p>
              </div>
              {/* Fake Chart Decoration */}
              <div className="mt-6 flex gap-2 items-end justify-center h-16">
                <div className="w-4 bg-green-200 rounded-t h-8"></div>
                <div className="w-4 bg-green-300 rounded-t h-12"></div>
                <div className="w-4 bg-green-400 rounded-t h-10"></div>
                <div className="w-4 bg-green-500 rounded-t h-16"></div>
                <div className="w-4 bg-green-600 rounded-t h-14"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. VALUE PROPOSITION (Fitur) --- */}
      <section className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kenapa UFO?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Karena belajar itu harusnya bikin penasaran, bukan pusing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6 text-blue-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Visualisasi Interaktif</h3>
              <p className="text-gray-500 leading-relaxed">
                Lupakan tabel Excel yang rumit. Grafik kami bisa disentuh, digeser, dan mudah dimengerti.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6 text-green-600">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Untuk Semua Orang</h3>
              <p className="text-gray-500 leading-relaxed">
                Tidak peduli kamu siswa, pendidik, atau penjelajah galaksi.
Semua bisa mengerti di sini.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6 text-purple-600">
                <Rocket className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gratis Selamanya</h3>
              <p className="text-gray-500 leading-relaxed">
                Akses pengetahuan tidak boleh dibatasi oleh biaya. Semua data di sini terbuka untuk umum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 3. CTA FOOTER --- */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Sudah Siap Menjelajah?</h2>
          <p className="text-xl text-gray-500 mb-10">
            Mari lihat data pendidikan terbaru hari ini.
          </p>
          <Link 
            href="/insights" 
            className="inline-flex items-center gap-2 px-8 py-4 text-white bg-gray-900 rounded-full font-bold hover:bg-gray-800 transition-all"
          >
            Lihat Semua Insight <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
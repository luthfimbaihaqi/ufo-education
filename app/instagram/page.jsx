'use client';

import { Coins, GraduationCap, MousePointer2, TrendingUp, Heart, Globe } from 'lucide-react';
import ChartInstagram from '@/components/charts/ChartInstagram';
// IMPORT CHART BARU
import ChartBeasiswaInstagram from '@/components/charts/ChartBeasiswaInstagram';

export default function InstagramGenerator() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 flex flex-col items-center gap-10">
      
      <h1 className="text-white text-2xl font-bold text-center">
        📸 Dapur Konten Instagram UFO (4 Slides) <br/>
        <span className="text-sm font-normal text-gray-400">Silakan screenshot kotak 1 sampai 4</span>
      </h1>

      {/* --- SLIDE 1 --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="flex-1 flex flex-col justify-center items-center px-24 text-center z-10">
          <h1 className="text-9xl font-extrabold text-gray-900 leading-tight mb-8">
            Pernah Bingung <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500">
              Sama Data?
            </span> 🤯
          </h1>
          <p className="text-4xl text-gray-600 max-w-4xl leading-snug">
            Tabel Excel dari laporan pendidikan seringkali terasa seperti kode alien yang nggak bisa kita pahami.
          </p>
        </div>
        <div className="h-24 bg-gray-900 flex items-center justify-between px-10">
          <span className="text-white text-xl font-bold tracking-wider">@ufo.education</span>
          <span className="text-gray-400 text-xl">Geser untuk Jawaban 👉</span>
        </div>
      </div>

      {/* --- SLIDE 2 --- */}
      <div className="w-[1080px] h-[1080px] bg-green-600 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="flex-1 flex flex-col justify-center items-center px-24 text-center z-10">
          <div className="text-9xl mb-8">🛸</div>
          <h2 className="text-7xl font-extrabold text-white leading-tight mb-6">
            Kami adalah <br/>
            <span className="text-yellow-300">Co-Pilot</span> Data Anda.
          </h2>
          <p className="text-3xl text-white/80 leading-relaxed max-w-4xl">
            UFO Education hadir untuk **mendemokratisasi data**. Kami terjemahkan laporan pemerintah menjadi visualisasi interaktif yang bisa kamu pahami.
          </p>
        </div>
        <div className="h-24 bg-gray-900 flex items-center justify-between px-10">
          <span className="text-white text-xl font-bold">Misi: University For Everyone</span>
          <span className="text-gray-400 text-xl">Geser untuk Bukti 👉</span>
        </div>
      </div>

      {/* --- SLIDE 3 --- */}
      <div className="w-[1080px] h-[1080px] bg-gray-50 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-16 flex-1 flex flex-col">
          <h2 className="text-5xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <TrendingUp className="w-10 h-10 text-green-600" />
            Apa yang Kamu Dapatkan?
          </h2>
          <div className="grid grid-cols-2 gap-12 mt-12">
            <div className="flex flex-col gap-6">
                <div className="p-6 bg-white rounded-3xl shadow-xl border border-green-100">
                    <h3 className="text-4xl font-bold text-green-600 mb-2">100% Visual</h3>
                    <p className="text-2xl text-gray-600">Lupakan tabel. Semua data disajikan dalam grafik interaktif.</p>
                </div>
                <div className="p-6 bg-white rounded-3xl shadow-xl border border-green-100">
                    <h3 className="text-4xl font-bold text-blue-600 mb-2">Transparan</h3>
                    <p className="text-2xl text-gray-600">Kami tunjukkan sumber data, setajam pisau bedah.</p>
                </div>
            </div>
            <div className="flex items-center justify-center bg-gray-100 rounded-3xl shadow-inner border border-gray-200 p-4">
                <div className="w-full h-[350px]">
                    <ChartInstagram />
                </div>
            </div>
          </div>
          <div className="mt-12 p-8 bg-red-50 rounded-2xl border-l-8 border-red-500">
            <h3 className="text-3xl font-bold text-red-700 mb-2">Contoh Isu Terbaru:</h3>
            <p className="text-2xl text-red-600 leading-snug">
              UKT vs Gaji: Kita bedah jurang biaya kuliah dan gaji *fresh graduate* yang meroket.
            </p>
          </div>
        </div>
        <div className="h-24 bg-gray-900 flex items-center justify-between px-10">
          <span className="text-white text-xl font-bold">Gratis. Selamanya.</span>
          <span className="text-gray-400 text-xl">Geser untuk Aksi 👉</span>
        </div>
      </div>

      {/* --- SLIDE 4 (YANG TADI ERROR) --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-16 flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Coins className="w-12 h-12 text-yellow-500" />
            <h2 className="text-5xl font-bold text-gray-900">Estimasi Uang Saku</h2>
          </div>
          
          {/* Chart Area */}
          <div className="flex-grow bg-gray-50 rounded-3xl border-2 border-gray-100 p-8 flex items-center justify-center relative mb-8">
             {/* Pakai Chart Khusus IG (Tanpa Margin Jumbo) */}
             <div className="w-full h-full">
                <ChartBeasiswaInstagram />
             </div>
          </div>

          {/* Insight Box - Sekarang pasti muat! */}
          <div className="bg-blue-50 p-8 rounded-2xl border-l-8 border-blue-500">
            <p className="text-3xl text-blue-800 font-medium text-center leading-snug">
              "Inggris juara 1 dengan ± Rp 28 Juta/bulan. Tapi hati-hati, biaya hidup di London juga setara ginjal! 😅"
            </p>
          </div>
        </div>

        <div className="h-24 bg-gray-900 flex items-center justify-between px-12">
          <span className="text-white text-xl">Data: Estimasi 2025</span>
          <span className="text-gray-400 text-xl">Sumber: Riset UFO</span>
        </div>
      </div>

    </div>
  );
}
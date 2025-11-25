'use client';

import { Coins, Plane, GraduationCap, ArrowRight, MousePointer2, Globe } from 'lucide-react';
import ChartBeasiswa from '@/components/charts/ChartBeasiswa'; 

export default function InstagramGenerator() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 flex flex-col items-center gap-10">
      
      <h1 className="text-white text-2xl font-bold text-center">
        📸 Dapur Konten: Perang Beasiswa (5 Slides) <br/>
        <span className="text-sm font-normal text-gray-400">Screenshot per kotak</span>
      </h1>

      {/* --- SLIDE 1: HOOK / CLICKBAIT --- */}
      <div className="w-[1080px] h-[1080px] bg-green-600 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top">
        {/* Pattern Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
        
        <div className="flex-1 flex flex-col justify-center items-center px-20 text-center z-10">
          <div className="bg-white text-green-700 px-8 py-3 rounded-full font-black text-2xl mb-10 shadow-lg transform -rotate-2">
            💸 EDISI BEASISWA KULIAH
          </div>
          
          <h1 className="text-[120px] font-black text-white leading-none mb-8 tracking-tight">
            BEASISWA <br/> MANA YANG <br/>
            <span className="text-yellow-300">KASIH JAJAN</span> <br/>
            TERBANYAK?
          </h1>
          
          <p className="text-4xl text-green-100 font-medium mt-4">
            🇬🇧 vs 🇺🇸 vs 🇦🇺 vs 🇯🇵 vs 🇩🇪
          </p>
        </div>

        <div className="h-24 bg-gray-900 flex items-center justify-between px-12">
          <span className="text-white text-xl font-bold tracking-wider">@ufo.education</span>
          <span className="text-gray-400 text-xl">Geser buat tau jawabannya 👉</span>
        </div>
      </div>


      {/* --- SLIDE 2: EXPLANATION (The Why) --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-20 flex-1 flex flex-col justify-center">
          <div className="w-32 h-32 bg-green-100 rounded-3xl flex items-center justify-center mb-10 text-green-600">
            <GraduationCap className="w-20 h-20" />
          </div>

          <h2 className="text-7xl font-extrabold text-gray-900 mb-8 leading-tight">
            Kuliah Gratis itu <span className="text-green-600">Enak.</span>
          </h2>
          
          <h2 className="text-7xl font-extrabold text-gray-900 mb-12 leading-tight">
            Kuliah Gratis + <span className="bg-yellow-300 px-4">Digaji?</span> <br/>
            Itu Baru Idaman! 😍
          </h2>

          <p className="text-4xl text-gray-500 leading-relaxed">
            Selain ngejar ilmu, faktor <strong>"Living Allowance"</strong> (uang saku bulanan) itu penting banget buat bertahan hidup (dan jalan-jalan) di negeri orang.
          </p>
        </div>
        <div className="h-24 bg-gray-50 border-t border-gray-200 flex items-center justify-between px-12">
            <span className="text-gray-400 text-xl">Jangan sampai boncos di negeri orang</span>
            <span className="text-gray-900 text-xl font-bold">👉</span>
        </div>
      </div>


      {/* --- SLIDE 3: LIST NEGARA (The Contenders) --- */}
      <div className="w-[1080px] h-[1080px] bg-gray-50 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-16 flex-1">
          <h2 className="text-6xl font-bold text-gray-900 mb-12 text-center">
            Para Penantang 🥊
          </h2>

          <div className="grid gap-6">
            {/* List Item 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex items-center gap-8">
              <div className="text-6xl">🇬🇧</div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800">Inggris</h3>
                <p className="text-2xl text-gray-500 mt-2">Beasiswa: Chevening</p>
              </div>
            </div>

            {/* List Item 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex items-center gap-8">
              <div className="text-6xl">🇺🇸</div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800">Amerika Serikat</h3>
                <p className="text-2xl text-gray-500 mt-2">Beasiswa: Fulbright</p>
              </div>
            </div>

            {/* List Item 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex items-center gap-8">
              <div className="text-6xl">🇦🇺</div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800">Australia</h3>
                <p className="text-2xl text-gray-500 mt-2">Beasiswa: AAS</p>
              </div>
            </div>

            {/* List Item 4 */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 flex items-center gap-8">
              <div className="text-6xl">🇯🇵</div>
              <div>
                <h3 className="text-4xl font-bold text-gray-800">Jepang</h3>
                <p className="text-2xl text-gray-500 mt-2">Beasiswa: MEXT</p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-24 bg-white border-t border-gray-200 flex items-center justify-between px-12">
            <span className="text-gray-400 text-xl">Siapa juaranya?</span>
            <span className="text-green-600 text-xl font-bold">Lihat Data 👉</span>
        </div>
      </div>


      {/* --- SLIDE 4: THE DATA (Chart) --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-16 flex-1 flex flex-col">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <Coins className="w-12 h-12 text-yellow-500" />
            <h2 className="text-5xl font-bold text-gray-900">Estimasi Uang Saku</h2>
          </div>
          
          {/* Wrapper Chart */}
          <div className="flex-1 bg-gray-50 rounded-3xl border-2 border-gray-100 p-8 flex items-center justify-center relative mb-8">
             <div className="w-full h-full scale-110 transform origin-center pt-10">
                <ChartBeasiswa />
             </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border-l-8 border-blue-500">
            <p className="text-2xl text-blue-800 font-medium text-center">
              "Inggris juara 1 dengan ± Rp 28 Juta/bulan. Tapi hati-hati, biaya hidup di London juga besar ya! 😅"
            </p>
          </div>
        </div>

        <div className="h-24 bg-gray-900 flex items-center justify-between px-12">
          <span className="text-white text-xl">Data: Estimasi 2025</span>
          <span className="text-gray-400 text-xl">Sumber: Riset UFO</span>
        </div>
      </div>


      {/* --- SLIDE 5: CTA (Link Website) --- */}
      <div className="w-[1080px] h-[1080px] bg-gray-900 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        
        <div className="flex-1 flex flex-col justify-center items-center px-20 text-center z-10">
          <Globe className="w-32 h-32 text-green-500 animate-pulse mb-10" />
          
          <h2 className="text-7xl font-extrabold text-white leading-tight mb-10">
            Mau Tau Detail <br/> Biaya Hidupnya?
          </h2>
          
          <p className="text-3xl text-gray-400 mb-16 max-w-2xl">
            Kami punya analisis lengkap soal biaya sewa, makan, dan tips hemat di website.
          </p>

          <div className="bg-white text-gray-900 px-12 py-6 rounded-full text-4xl font-bold flex items-center gap-4 shadow-2xl shadow-white/20 hover:scale-105 transition-transform cursor-pointer">
            <MousePointer2 className="w-10 h-10 text-green-600" />
            ufo-education
          </div>
          
          <p className="mt-16 text-2xl text-green-400 font-mono">
            &gt; Klik link di bio untuk baca selengkapnya_
          </p>
        </div>

        {/* Footer Pattern */}
        <div className="h-6 bg-gradient-to-r from-green-600 via-yellow-400 to-green-600"></div>
      </div>

    </div>
  );
}
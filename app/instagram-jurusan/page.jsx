'use client';

import {
  Rocket, MousePointer2, GraduationCap, BrainCircuit, Briefcase, Globe,
  Stethoscope, Building2, TestTube2, // Ikon IPA
  Scale, Globe2, Users2, // Ikon IPS
  TrendingUp, LineChart, Megaphone, Palette, Code2, UserCircle2, // Ikon Umum
  BarChart3, Users
} from 'lucide-react';
import ChartJurusan from '@/components/charts/ChartJurusan';

export default function InstagramJurusan() {
  return (
    <div className="min-h-screen bg-gray-900 p-10 flex flex-col items-center gap-10">
      
      <h1 className="text-white text-2xl font-bold text-center">
        📸 Dapur Konten: IPA vs IPS (6 Slides) <br/>
        <span className="text-sm font-normal text-gray-400">Resolusi Instagram 1080x1080 (Kotak) - Statis</span>
      </h1>

      {/* --- SLIDE 1: HOOK (TANPA ANIMASI) --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:30px_30px] opacity-30"></div>
        
        {/* Elemen Dekorasi */}
        <div className="absolute top-20 right-20 text-[150px]">🧪</div>
        <div className="absolute bottom-40 left-20 text-[150px]">⚖️</div>

        <div className="flex-1 flex flex-col justify-center items-center px-20 text-center z-10">
          <div className="bg-black text-white px-8 py-3 rounded-full font-bold text-2xl mb-10 uppercase tracking-widest">
            Battle Jurusan SMA
          </div>
          
          <h1 className="text-[130px] font-black text-gray-900 leading-none mb-4 tracking-tight">
            IPA <span className="text-gray-300">VS</span> IPS
          </h1>
          
          <h2 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-500 mb-12">
            Mana yang Lebih <br/> Cepat Kaya? 🤑
          </h2>
          
          <p className="text-3xl text-gray-500 font-medium max-w-2xl">
            Mitosnya anak IPA jadi dokter, anak IPS jadi bosnya dokter. Bener gak sih? Kita cek yuk!
          </p>
        </div>

        <div className="h-24 bg-green-600 flex items-center justify-between px-12">
          <span className="text-white text-xl font-bold tracking-wider">@ufo.education</span>
          <span className="text-white/90 text-xl">Geser buat pembuktian 👉</span>
        </div>
      </div>


      {/* --- SLIDE 2: STEREOTIP --- */}
      <div className="w-[1080px] h-[1080px] bg-gray-900 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-20 flex-1 flex flex-col justify-center items-center text-center">
          <h2 className="text-6xl font-bold text-white mb-16">
            Mitos vs Realita 🤯
          </h2>

          <div className="grid grid-cols-2 gap-12 w-full">
            <div className="bg-gray-800 p-10 rounded-3xl border border-gray-700">
              <div className="text-8xl mb-6">👨‍🔬</div>
              <h3 className="text-4xl font-bold text-green-400 mb-4">Anak IPA</h3>
              <p className="text-2xl text-gray-300 leading-relaxed">
                "Pasti pinter matematika, kacamata tebel, & calon dokter."
              </p>
            </div>

            <div className="bg-gray-800 p-10 rounded-3xl border border-gray-700">
              <div className="text-8xl mb-6">🗣️</div>
              <h3 className="text-4xl font-bold text-blue-400 mb-4">Anak IPS</h3>
              <p className="text-2xl text-gray-300 leading-relaxed">
                "Jago ngomong, santai, & calon pengusaha/politisi."
              </p>
            </div>
          </div>

          <div className="mt-16 bg-red-500/10 border border-red-500 p-6 rounded-2xl">
            <p className="text-3xl text-red-400 font-bold">
              Realitanya? Di dunia kerja, batas itu makin BLUR! 🌫️
            </p>
          </div>
        </div>
        <div className="h-24 bg-black flex items-center justify-between px-12">
            <span className="text-gray-500 text-xl">Masih percaya stereotip?</span>
            <span className="text-white text-xl font-bold">👉</span>
        </div>
      </div>


      {/* --- SLIDE 3: DATA GAJI --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-16 flex-1 flex flex-col">
          <h2 className="text-5xl font-bold text-gray-900 mb-2 text-center">
            Adu Gaji *Fresh Graduate* 💸
          </h2>
          <p className="text-center text-2xl text-gray-500 mb-12">Estimasi Gaji Awal (Juta Rupiah)</p>
          
          <div className="flex-grow bg-gray-50 rounded-3xl border-2 border-gray-100 p-8 flex items-center justify-center relative mb-8">
             <div className="w-full h-full">
                <ChartJurusan />
             </div>
          </div>

          <div className="flex gap-4 justify-center">
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-xl text-gray-600">Rumpun Saintek</span>
            </div>
            <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-xl text-gray-600">Rumpun Soshum</span>
            </div>
          </div>
        </div>

        <div className="h-24 bg-gray-900 flex items-center justify-between px-12">
          <span className="text-white text-xl">Sumber: Survei Gaji 2024</span>
          <span className="text-gray-400 text-xl">👉</span>
        </div>
      </div>


      {/* --- SLIDE 4: PETA KARIR (REVISI CONTENT) --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-16 flex-1 flex flex-col items-center">
          <h2 className="text-6xl font-bold text-gray-900 mb-4 text-center">
            Jurusan Bukan Penjara 🔓
          </h2>
          <p className="text-3xl text-gray-500 mb-12 text-center max-w-3xl">
            Banyak karir modern yang gak peduli ijazah SMA-mu apa.
          </p>

          <div className="grid grid-cols-2 gap-8 w-full mb-8">
            {/* KOTAK KIRI: KHUSUS IPA */}
            <div className="bg-green-50 p-8 rounded-3xl border-2 border-green-200">
               <h3 className="text-3xl font-bold text-green-800 mb-6 flex items-center gap-3">
                 <Stethoscope className="w-10 h-10"/> Wajib IPA
               </h3>
               <ul className="text-2xl text-gray-600 space-y-4 list-disc pl-6">
                 <li>Dokter / Nakes</li>
                 <li>Insinyur (Teknik)</li>
                 <li>Apoteker</li>
               </ul>
            </div>

            {/* KOTAK KANAN: KHUSUS IPS */}
            <div className="bg-blue-50 p-8 rounded-3xl border-2 border-blue-200">
               <h3 className="text-3xl font-bold text-blue-800 mb-6 flex items-center gap-3">
                 <Scale className="w-10 h-10"/> Wajib IPS
               </h3>
               <ul className="text-2xl text-gray-600 space-y-4 list-disc pl-6">
                 <li>Hakim / Pengacara</li>
                 <li>Psikolog Klinis</li>
                 <li>Diplomat</li>
               </ul>
            </div>
          </div>

          {/* KOTAK TENGAH: ZONA BEBAS */}
          <div className="w-full bg-gradient-to-r from-yellow-50 to-orange-50 p-10 rounded-[3rem] border-4 border-yellow-300 relative overflow-hidden flex-grow">
             <div className="absolute top-0 right-0 bg-yellow-300 text-yellow-900 px-8 py-3 rounded-bl-3xl font-black text-2xl tracking-wider">
                ZONA BEBAS (IPA/IPS MASUK!) 🔥
             </div>
             
             <div className="grid grid-cols-2 gap-x-8 gap-y-8 mt-8">
                <div className="flex items-center gap-4 text-3xl font-bold text-gray-800">
                  <Briefcase className="w-10 h-10 text-orange-500"/> CEO / Founder
                </div>
                <div className="flex items-center gap-4 text-3xl font-bold text-gray-800">
                  <Megaphone className="w-10 h-10 text-orange-500"/> Digital Marketing
                </div>
                <div className="flex items-center gap-4 text-3xl font-bold text-gray-800">
                  <LineChart className="w-10 h-10 text-orange-500"/> Data Analyst
                </div>
                <div className="flex items-center gap-4 text-3xl font-bold text-gray-800">
                  <Palette className="w-10 h-10 text-orange-500"/> UI/UX Designer
                </div>
                <div className="flex items-center gap-4 text-3xl font-bold text-gray-800">
                  <Code2 className="w-10 h-10 text-orange-500"/> Programmer
                </div>
                <div className="flex items-center gap-4 text-3xl font-bold text-gray-800">
                  <UserCircle2 className="w-10 h-10 text-orange-500"/> HRD / People
                </div>
             </div>
          </div>

        </div>
        <div className="h-24 bg-white border-t flex items-center justify-between px-12">
            <span className="text-gray-500 text-xl">Peluangmu luas banget!</span>
            <span className="text-gray-900 text-xl font-bold">Skill Masa Depan 👉</span>
        </div>
      </div>


      {/* --- SLIDE 5: SKILL MASA DEPAN --- */}
      <div className="w-[1080px] h-[1080px] bg-gray-900 flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="p-20 flex-1 flex flex-col justify-center">
          <BrainCircuit className="w-32 h-32 text-green-400 mb-10" />
          
          <h2 className="text-6xl font-bold text-white mb-10 leading-tight">
            Di Masa Depan, <br/>
            <span className="text-green-400">Skill</span> &gt; Jurusan SMA.
          </h2>

          <div className="space-y-8">
            <div className="flex items-start gap-6">
                <div className="bg-gray-700 p-3 rounded-xl"><Briefcase className="w-8 h-8 text-white"/></div>
                <div>
                    <h4 className="text-3xl font-bold text-white">Soft Skill Raja-nya</h4>
                    <p className="text-2xl text-gray-400">Komunikasi, kepemimpinan, dan adaptasi lebih dicari daripada sekadar hafal rumus.</p>
                </div>
            </div>
            <div className="flex items-start gap-6">
                <div className="bg-gray-700 p-3 rounded-xl"><Globe className="w-8 h-8 text-white"/></div>
                <div>
                    <h4 className="text-3xl font-bold text-white">Digital is Mandatory</h4>
                    <p className="text-2xl text-gray-400">Mau IPA atau IPS, kalau gak melek teknologi bakal ketinggalan.</p>
                </div>
            </div>
          </div>
        </div>
        <div className="h-24 bg-black flex items-center justify-between px-12">
            <span className="text-gray-500 text-xl">Jadi kesimpulannya?</span>
            <span className="text-white text-xl font-bold">👉</span>
        </div>
      </div>


      {/* --- SLIDE 6: OUTRO / CTA --- */}
      <div className="w-[1080px] h-[1080px] bg-white flex flex-col relative overflow-hidden shadow-2xl scale-50 origin-top -mt-[500px]">
        <div className="flex-1 flex flex-col justify-center items-center px-20 text-center z-10">
          <h2 className="text-7xl font-extrabold text-gray-900 mb-8">
            Pilih Sesuai <br/> <span className="text-green-600">Minat</span>, Bukan Gengsi.
          </h2>
          
          <p className="text-3xl text-gray-500 mb-16 max-w-3xl">
            Jangan masuk IPA cuma biar kelihatan pinter. Jangan masuk IPS cuma biar santai. Pilih jalur yang bikin kamu *excited* buat belajar!
          </p>

          <div className="bg-gray-900 text-white px-12 py-6 rounded-full text-4xl font-bold flex items-center gap-4 shadow-2xl hover:scale-105 transition-transform">
            <MousePointer2 className="w-10 h-10 text-green-400" />
            ufo-education
          </div>
          
          <p className="mt-12 text-xl text-gray-400 font-mono">
            Share ke temenmu yang lagi galau jurusan! 🔄
          </p>
        </div>
        <div className="h-6 bg-gradient-to-r from-green-600 via-emerald-500 to-green-600"></div>
      </div>

    </div>
  );
}
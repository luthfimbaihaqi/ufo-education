import { Rocket } from 'lucide-react';

export default function LogoPreview() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-12 p-8">
      
      <h1 className="text-white text-2xl font-mono mb-8">Konsep Logo UFO Education</h1>

      {/* KONSEP 1: Minimalis dengan Aksen Hijau + Tagline */}
      <div className="bg-white p-12 rounded-xl w-full max-w-2xl flex justify-center">
        <div className="flex items-center gap-3">
          <div className="font-black text-6xl tracking-tighter text-gray-900">
            UFO<span className="text-green-600">.</span>
          </div>
          <div className="flex flex-col justify-center h-full ml-2 border-l-2 border-gray-300 pl-4 py-1">
            <span className="text-lg font-bold text-gray-600 tracking-[0.3em] leading-none">EDUCATION</span>
            <div className="flex flex-col mt-1">
              <span className="text-[10px] text-gray-400 font-mono tracking-widest">EST. 2025</span>
              <span className="text-[8px] text-green-600 font-bold tracking-widest mt-0.5 uppercase">
                University For Everyone
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* KONSEP 2: Tech Box Style */}
      <div className="bg-white p-12 rounded-xl w-full max-w-2xl flex justify-center">
        <div className="flex items-center gap-4">
          <div className="bg-green-600 text-white p-3 rounded-lg shadow-lg shadow-green-600/30">
            <Rocket className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              UFO<span className="font-light text-gray-400">edu</span>
            </h1>
          </div>
        </div>
      </div>

      {/* KONSEP 3: Modern Clean (Mirip Startup) */}
      <div className="bg-white p-12 rounded-xl w-full max-w-2xl flex justify-center">
        <div className="font-sans">
          <span className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
            UFO
          </span>
          <span className="text-5xl font-bold text-gray-800 ml-2">
            Education
          </span>
        </div>
      </div>

    </div>
  );
}
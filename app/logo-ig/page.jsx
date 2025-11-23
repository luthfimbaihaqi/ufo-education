export default function LogoIG() {
  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center gap-8 p-8">
      
      <h1 className="text-white text-xl font-mono text-center">
        📸 Logo Generator untuk Foto Profil IG <br/>
        <span className="text-sm text-gray-400 font-normal">(Screenshot kotak putih ini)</span>
      </h1>

      {/* KANVAS LOGO (Ukuran rasio 1:1) */}
      <div className="w-[500px] h-[500px] bg-white flex flex-col items-center justify-center rounded-[80px] shadow-2xl overflow-hidden relative">
        
        {/* Dekorasi Halus (Opsional, biar gak terlalu sepi) */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-green-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-emerald-50 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>

        {/* LOGO UTAMA */}
        <div className="z-10 text-center flex flex-col items-center">
          
          {/* Tulisan UFO Besar */}
          <div className="font-black text-[140px] tracking-tighter text-gray-900 leading-none flex items-end">
            UFO
            <span className="text-green-600 w-8 h-8 rounded-full bg-green-600 mb-6 ml-1"></span>
          </div>
          
          {/* Tulisan Education Kecil */}
          <span className="text-2xl font-bold text-gray-500 tracking-[0.35em] mt-2 ml-2">
            EDUCATION
          </span>

        </div>
      </div>

    </div>
  );
}
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* --- LOGO BARU (UFO Education + Tagline) --- */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Bagian Kiri: UFO (Besar) */}
          <div className="font-black text-4xl tracking-tighter text-gray-900 flex items-end leading-none">
            UFO<span className="text-green-600 w-3 h-3 rounded-full bg-green-600 mb-1 ml-0.5 animate-pulse"></span>
          </div>
          
          {/* Garis Pemisah */}
          <div className="h-8 w-px bg-gray-300 mx-1"></div>

          {/* Bagian Kanan: EDUCATION + Tagline */}
          <div className="flex flex-col justify-center">
            <span className="text-sm font-bold text-gray-600 tracking-[0.25em] leading-tight">
              EDUCATION
            </span>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="text-[10px] text-gray-400 font-mono tracking-widest">EST. 2025</span>
              <span className="text-[8px] text-green-600 font-bold tracking-widest uppercase bg-green-50 px-1 rounded">
                University For Everyone
              </span>
            </div>
          </div>
        </Link>

        {/* --- MENU LINKS (Desktop) --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/insights" className="hover:text-green-600 transition-colors">
            Insights
          </Link>
          <Link href="/about" className="hover:text-green-600 transition-colors">
            About
          </Link>
          {/* Tombol CTA Kecil di Navbar */}
          <Link href="/insights" className="px-4 py-2 bg-gray-900 text-white rounded-full text-xs font-bold hover:bg-gray-800 transition-all">
            Mulai Belajar
          </Link>
        </div>

        {/* Mobile Menu Button (Placeholder) */}
        <div className="md:hidden p-2 text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </div>

      </div>
    </nav>
  );
}
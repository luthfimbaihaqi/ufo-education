import Link from 'next/link';
import { BookOpen } from 'lucide-react'; // Kita pakai icon buku dari library Lucide

export default function Navbar() {
  return (
    // Bagian Luar (Background & Border)
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      
      {/* Bagian Dalam (Kontainer agar rapi di tengah) */}
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* --- LOGO AREA --- */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-green-100 p-2 rounded-lg group-hover:bg-green-200 transition-colors">
            {/* Icon Buku Hijau */}
            <BookOpen className="w-5 h-5 text-green-700" />
          </div>
          <span className="font-bold text-xl text-gray-800 tracking-tight">
            UFO <span className="text-green-600">Education</span>
          </span>
        </Link>

        {/* --- MENU LINKS --- */}
        <div className="flex items-center gap-6 text-sm font-medium text-gray-500">
          <Link href="/" className="hover:text-green-600 transition-colors">
            Home
          </Link>
          <Link href="/insights" className="hover:text-green-600 transition-colors">
            Insights
          </Link>
          <Link href="/about" className="hover:text-green-600 transition-colors">
            About
          </Link>
        </div>

      </div>
    </nav>
  );
}
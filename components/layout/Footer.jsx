import Link from 'next/link';
import { Github, Twitter, Instagram } from 'lucide-react'; // Icon sosmed

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* KOLOM 1: Branding */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">UFO Education</h3>
          <p className="text-sm leading-relaxed text-gray-400">
           Hal-hal asing pun bisa jadi akrab ketika kita memahami.
Ayo jelajah pengetahuan bersama.
          </p>
        </div>

        {/* KOLOM 2: Menu Cepat */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Menu</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-green-400 transition-colors">Beranda</Link>
            </li>
            <li>
              <Link href="/insights" className="hover:text-green-400 transition-colors">Data Insight</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-green-400 transition-colors">Tentang Kami</Link>
            </li>
          </ul>
        </div>

        {/* KOLOM 3: Sosmed */}
        <div>
          <h3 className="text-white font-bold text-lg mb-4">Terhubung</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-green-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-green-400 transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bagian Paling Bawah */}
      <div className="max-w-4xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} UFO Education. Dibuat dengan 👽💚 di Indonesia.
      </div>
    </footer>
  );
}
import Link from 'next/link';
import { Heart, Code2, Coffee } from 'lucide-react';

export const metadata = {
  title: "Tentang Kami - UFO Education",
  description: "Misi di balik University For Everyone.",
};

export default function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* HEADER HERO */}
      <section className="pt-24 pb-12 px-6 text-center bg-green-50">
        <div className="max-w-4xl mx-auto">
          <span className="text-green-600 font-bold tracking-wider text-sm uppercase mb-2 block">
            Di Balik Layar
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Misi Kami Mendemokratisasi Data 👽
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            UFO (University For Everyone) lahir dari keresahan bahwa data pendidikan Indonesia terlalu sulit diakses dan dipahami oleh masyarakat umum.
          </p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center text-red-600">
                <Heart className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dibuat dengan Hati</h3>
              <p className="text-gray-600 leading-relaxed">
                Proyek ini adalah inisiatif independen (open source). Kami percaya bahwa transparansi data adalah kunci untuk memperbaiki kualitas pendidikan. Tidak ada agenda tersembunyi, hanya data murni.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                <Code2 className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Teknologi Modern</h3>
              <p className="text-gray-600 leading-relaxed">
                Website ini dibangun menggunakan teknologi web terkini untuk menjamin kecepatan dan aksesibilitas:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-gray-500 font-mono bg-gray-50 p-4 rounded-lg border border-gray-100">
                <li>• Next.js 15 (App Router)</li>
                <li>• Tailwind CSS v3</li>
                <li>• MDX (Markdown + JSX)</li>
                <li>• Recharts Visualization</li>
              </ul>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600">
                <Coffee className="w-6 h-6" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Dukung Kami</h3>
              <p className="text-gray-600 leading-relaxed">
                Ingin berkontribusi menulis artikel atau memperbaiki kode? Project ini terbuka untuk kolaborasi.
              </p>
              <div className="mt-6">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-green-600 font-bold hover:underline"
                >
                  Kembali ke Beranda &rarr;
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
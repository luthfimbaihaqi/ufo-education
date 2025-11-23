import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import ChartUKT from '@/components/charts/ChartUKT';
// Gabungkan semua icon dalam satu baris import
import { Calendar, ArrowLeft } from 'lucide-react'; 
import Link from 'next/link';

// --- FUNGSI AMBIL DATA ---
async function getInsightData(slug) {
  const filePath = path.join(process.cwd(), 'content', 'insights', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${slug}.mdx tidak ditemukan`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  return await compileMDX({
    source: fileContent,
    components: { ChartUKT },
    options: { parseFrontmatter: true }
  });
}

// --- KOMPONEN UTAMA ---
export default async function InsightPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) return <div>Error: URL tidak valid</div>;

  let postData;

  try {
    postData = await getInsightData(slug);
  } catch (error) {
    console.error("Gagal ambil data:", error);
    return (
      <div className="p-12 text-center text-red-600">
        <h2 className="font-bold text-xl">Artikel Tidak Ditemukan 😭</h2>
      </div>
    );
  }

  const { content, frontmatter } = postData;

  return (
    <article className="max-w-3xl mx-auto pt-8 pb-24 px-6">
      
      {/* 1. TOMBOL KEMBALI */}
      <Link 
        href="/insights" 
        className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 mb-8 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Kembali ke Daftar Insight
      </Link>

      {/* 2. HEADER ARTIKEL (JUDUL & GAMBAR) */}
      <header className="mb-10 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-600 text-xs font-bold mb-4">
          <Calendar className="w-3 h-3" />
          {frontmatter.date}
        </div>
        
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          {frontmatter.title}
        </h1>

        {/* Gambar Cover Besar */}
        {frontmatter.image && (
          <div className="relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-lg mb-8">
            <img 
              src={frontmatter.image} 
              alt={frontmatter.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </header>
      
      {/* 3. ISI KONTEN ARTIKEL */}
      <div className="prose prose-lg prose-green max-w-none mx-auto">
        {content}
      </div>

    </article>
  );
}
import fs from 'fs';
import path from 'path';
import { compileMDX } from 'next-mdx-remote/rsc';
import ChartContoh from '@/components/charts/ChartContoh';

// --- FUNGSI PEMBANTU: Khusus ambil data (Logic only) ---
// Kita pisahkan logic pengambilan data ke fungsi ini
async function getInsightData(slug) {
  const filePath = path.join(process.cwd(), 'content', 'insights', `${slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    throw new Error(`File ${slug}.mdx tidak ditemukan`);
  }

  const fileContent = fs.readFileSync(filePath, 'utf8');
  
  // Compile MDX
  return await compileMDX({
    source: fileContent,
    components: { ChartContoh },
    options: { parseFrontmatter: true }
  });
}

// --- KOMPONEN UTAMA (UI) ---
export default async function InsightPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  if (!slug) return <div>Error: URL tidak valid</div>;

  let postData;

  // 1. AMBIL DATA
  // Kita pakai try-catch HANYA saat mengambil data.
  // Di sini tidak ada kode JSX (tampilan), jadi ESLint senang.
  try {
    postData = await getInsightData(slug);
  } catch (error) {
    console.error("Gagal ambil data:", error);
    // Kalau error, kita return UI error di sini (ini boleh)
    return (
      <div className="p-12 text-red-600 bg-red-50 border border-red-200 rounded m-4">
        <h2 className="font-bold text-xl mb-2">Gagal Memuat Artikel 😭</h2>
        <p>{error.message}</p>
      </div>
    );
  }

  // 2. TAMPILKAN UI
  // Bagian ini sekarang berada DI LUAR try-catch.
  // Ini yang membuat garis merah error tadi hilang.
  const { content, frontmatter } = postData;

  return (
   <article className="max-w-2xl mx-auto pt-12 pb-24 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">{frontmatter.title}</h1>
      <p className="text-gray-500 mb-8">{frontmatter.date}</p>
      
      <div className="prose prose-lg prose-green max-w-none">
        {content}
      </div>
    </article>
  );
}
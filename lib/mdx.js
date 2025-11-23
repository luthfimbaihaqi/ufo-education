import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'; // Library untuk baca metadata

const root = process.cwd();

export function getAllInsights() {
  const contentPath = path.join(root, 'content', 'insights');
  
  // 1. Ambil daftar semua file di folder content/insights
  const files = fs.readdirSync(contentPath);

  const posts = files.map((fileName) => {
    // 2. Baca isi file satu per satu
    const source = fs.readFileSync(path.join(contentPath, fileName), 'utf8');
    
    // 3. Ambil metadata (frontmatter) tanpa compile isinya
    const { data } = matter(source);

    return {
      slug: fileName.replace('.mdx', ''), // Hapus ekstensi .mdx untuk jadi URL
      ...data, // Spread judul, tanggal, summary
    };
  });

  // 4. Urutkan berdasarkan tanggal (Terbaru di atas)
  return posts.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
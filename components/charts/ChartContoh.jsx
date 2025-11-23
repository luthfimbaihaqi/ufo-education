'use client'; 

import { useState, useEffect } from 'react'; // <--- 1. Tambah ini
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { bulan: 'Jan', siswa: 400 },
  { bulan: 'Feb', siswa: 300 },
  { bulan: 'Mar', siswa: 550 },
  { bulan: 'Apr', siswa: 450 },
  { bulan: 'Mei', siswa: 700 },
  { bulan: 'Jun', siswa: 800 },
];

export default function ChartContoh() {
  // 2. State untuk mendeteksi apakah sudah di browser
  const [isMounted, setIsMounted] = useState(false);

  // 3. Effect ini hanya jalan di browser, setelah loading selesai
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 4. Jika belum siap (masih di server), tampilkan kotak kosong (Skeleton)
  // Ini mencegah error "Hydration Mismatch"
  if (!isMounted) {
    return (
      <div className="w-full h-[300px] p-4 bg-gray-100 rounded-lg border border-gray-200 animate-pulse flex items-center justify-center">
        <span className="text-gray-400 text-sm">Memuat Grafik...</span>
      </div>
    );
  }

  // 5. Jika sudah siap, baru render chart aslinya
  return (
    <div className="w-full h-[300px] p-4 bg-white rounded-lg shadow-sm border border-gray-100">
      <h3 className="text-center font-bold text-gray-700 mb-4">Grafik Pertumbuhan Siswa</h3>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="bulan" tick={{fontSize: 12}} />
          <YAxis tick={{fontSize: 12}} />
          <Tooltip 
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }} 
          />
          <Line 
            type="monotone" 
            dataKey="siswa" 
            stroke="#16a34a" 
            strokeWidth={3} 
            dot={{ r: 4, fill: "#16a34a" }} 
            activeDot={{ r: 8 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
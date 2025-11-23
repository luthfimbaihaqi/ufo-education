'use client';

import { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { tahun: '2020', ukt: 6.5, gaji: 4.2 },
  { tahun: '2021', ukt: 8, gaji: 4.3 },
  { tahun: '2022', ukt: 10, gaji: 4.4 },
  { tahun: '2023', ukt: 12.5, gaji: 4.5 },
  { tahun: '2024', ukt: 15, gaji: 4.6 },
  { tahun: '2025', ukt: 19.5, gaji: 4.7 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg text-xs z-50">
        <p className="font-bold text-gray-700 mb-1">Tahun {label}</p>
        <p className="text-red-500 font-medium">
          UKT: Rp {payload[0].value} Juta
        </p>
        <p className="text-green-600 font-medium">
          Gaji: Rp {payload[1].value} Juta
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartUKT() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      // Tinggi Skeleton disamakan agar tidak layout shift
      <div className="w-full h-[1600px] p-4 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center mb-32">
        <span className="text-gray-400">Memuat Data UKT...</span>
      </div>
    );
  }

  return (
    // PERBAIKAN UTAMA:
    // 1. h-[600px]: Tinggi kotak diperbesar drastis agar grafik tidak gepeng di HP.
    // 2. mb-32: Memberi jarak 128px (sangat jauh) ke bawah agar tidak menabrak teks artikel.
    <div className="w-full h-[600px] p-4 bg-white rounded-lg shadow-sm border border-gray-100 mt-10 mb-64">
      <h3 className="text-center font-bold text-gray-800 mb-2">Biaya Kuliah vs Gaji (Update Nov 2025)</h3>
      <p className="text-center text-xs text-gray-400 mb-8">Data simulasi: Lonjakan UKT vs Stagnasi UMR</p>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart 
          data={data}
          // Margin bottom 120px: Memberi ruang kosong luas di dalam kotak khusus untuk Legend
          margin={{ top: 40, right: 20, left: 0, bottom: 120 }} 
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="tahun" tick={{fontSize: 12}} dy={10} />
          <YAxis 
            unit=" Jt" 
            tick={{fontSize: 12}} 
            domain={[0, 25]} 
          />
          
          <Tooltip content={<CustomTooltip />} />
          
          <Legend 
            verticalAlign="bottom" 
            height={36}
            // Legend ditaruh di posisi aman (40px dari bawah kotak)
            wrapperStyle={{ bottom: 40 }} 
          />
          
          <Line 
            name="Rata-rata UKT"
            type="monotone" 
            dataKey="ukt" 
            stroke="#ef4444" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
            activeDot={{ r: 6 }}
          />

          <Line 
            name="Gaji Fresh Grad"
            type="monotone" 
            dataKey="gaji" 
            stroke="#22c55e" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
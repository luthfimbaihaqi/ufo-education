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

export default function ChartUKT() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[400px] p-4 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <span className="text-gray-400">Memuat Data UKT...</span>
      </div>
    );
  }

  return (
  
    <div className="w-full h-[450px] p-4 bg-white rounded-lg shadow-sm border border-gray-100 my-12">
      <h3 className="text-center font-bold text-gray-800 mb-2">Biaya Kuliah vs Gaji (Update Nov 2025)</h3>
      <p className="text-center text-xs text-gray-400 mb-6">Data simulasi: Lonjakan UKT vs Stagnasi UMR</p>
      
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
          <XAxis dataKey="tahun" tick={{fontSize: 12}} />
          <YAxis unit=" Jt" tick={{fontSize: 12}} />
          <Tooltip 
            contentStyle={{ backgroundColor: "#fff", borderRadius: "8px", border: "1px solid #e5e7eb" }}
            formatter={(value) => [`Rp ${value} Juta`, 'Nominal']}
          />
          {/* Tambahkan margin wrapper legend biar gak terlalu mepet */}
          <Legend wrapperStyle={{ paddingTop: '40px' }} />
          
          <Line 
            name="Rata-rata UKT"
            type="monotone" 
            dataKey="ukt" 
            stroke="#ef4444" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
          />

          <Line 
            name="Gaji Fresh Grad"
            type="monotone" 
            dataKey="gaji" 
            stroke="#22c55e" 
            strokeWidth={3} 
            dot={{ r: 4 }} 
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
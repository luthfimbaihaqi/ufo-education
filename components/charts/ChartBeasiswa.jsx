'use client';

import { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { negara: 'Inggris 🇬🇧', uang: 28, color: '#ef4444' },
  { negara: 'Amerika 🇺🇸', uang: 25, color: '#3b82f6' },
  { negara: 'Australia 🇦🇺', uang: 22, color: '#eab308' },
  { negara: 'Jepang 🇯🇵', uang: 18, color: '#ec4899' },
  { negara: 'Jerman 🇩🇪', uang: 16, color: '#22c55e' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg text-xs z-50">
        <p className="font-bold text-gray-700 mb-1">{label}</p>
        <p className="text-green-600 font-bold">
          Rp {payload[0].value} Juta / Bulan
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartBeasiswa() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-[500px] p-4 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center mb-24">
        <span className="text-gray-400">Memuat Data Beasiswa...</span>
      </div>
    );
  }

  return (
    // PERBAIKAN:
    // 1. h-[500px]: Tinggi ditambah sedikit biar bar lebih tebal/jelas
    // 2. mb-24: Margin bawah diperbesar (sekitar 96px) biar tidak mepet teks artikel
    <div className="w-full h-[500px] p-4 bg-white rounded-lg shadow-sm border border-gray-100 mt-8 mb-24">
      <h3 className="text-center font-bold text-gray-800 mb-2">Adu Tajir: Uang Saku Beasiswa (Estimasi)</h3>
      <p className="text-center text-xs text-gray-400 mb-6">Konversi ke Rupiah (2025)</p>
      
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" unit=" Jt" tick={{fontSize: 12}} hide />
          <YAxis 
            dataKey="negara" 
            type="category" 
            tick={{fontSize: 14, fontWeight: 'bold'}} 
            width={100}
          />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
          
          <Bar dataKey="uang" radius={[0, 10, 10, 0]} barSize={35}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
'use client';

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, LabelList } from 'recharts';

// Data Estimasi Gaji Entry Level 2024/2025 (Juta Rupiah)
const data = [
  { bidang: 'Teknik (IPA)', gaji: 6.5, color: '#22c55e' }, // Hijau
  { bidang: 'IT/Data (IPA)', gaji: 7.5, color: '#16a34a' }, // Hijau Tua
  { bidang: 'Kesehatan (IPA)', gaji: 5.5, color: '#4ade80' }, // Hijau Muda
  { bidang: 'Bisnis (IPS)', gaji: 6.0, color: '#3b82f6' }, // Biru
  { bidang: 'Hukum (IPS)', gaji: 5.8, color: '#2563eb' }, // Biru Tua
  { bidang: 'Media/Kreatif (IPS)', gaji: 5.2, color: '#60a5fa' }, // Biru Muda
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg text-xs z-50">
        <p className="font-bold text-gray-700 mb-1">{label}</p>
        <p className="text-gray-900 font-bold">
          Rp {payload[0].value} Juta
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartJurusan() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 80, left: 60, bottom: 20 }} // Margin kanan lebar buat label angka
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" hide />
          
          {/* Label Kategori (Bidang) */}
          <YAxis 
            dataKey="bidang" 
            type="category" 
            tick={{fontSize: 18, fontWeight: 'bold', width: 200}} 
            width={200}
          />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
          
          <Bar dataKey="gaji" radius={[0, 10, 10, 0]} barSize={40}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            {/* Label Angka di Kanan Bar */}
            <LabelList 
              dataKey="gaji" 
              position="right" 
              formatter={(value) => `Rp ${value} Jt`}
              style={{ fontSize: '20px', fontWeight: 'bold', fill: '#374151' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
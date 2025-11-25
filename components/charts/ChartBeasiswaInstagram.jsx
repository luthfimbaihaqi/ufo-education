'use client';

// Tambahkan 'LabelList' di import
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer, LabelList } from 'recharts';

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
      <div className="bg-white p-4 border-2 border-gray-200 rounded-xl shadow-xl text-xl z-50">
        <p className="font-bold text-gray-700 mb-2">{label}</p>
        <p className="text-green-600 font-bold">
          Rp {payload[0].value} Juta / Bulan
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartBeasiswaInstagram() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart 
          data={data}
          layout="vertical"
          // Margin kanan diperbesar (right: 120) supaya teks label 'Rp XX Jt' tidak kepotong
          margin={{ top: 20, right: 120, left: 40, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          {/* Sumbu X disembunyikan karena angkanya sudah ada di batang */}
          <XAxis type="number" unit=" Jt" tick={{fontSize: 20}} hide />
          
          <YAxis 
            dataKey="negara" 
            type="category" 
            tick={{fontSize: 28, fontWeight: 'bold'}} 
            width={180}
          />
          <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
          
          <Bar dataKey="uang" radius={[0, 20, 20, 0]} barSize={50}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
            {/* INI KUNCINYA: LabelList untuk memunculkan angka secara permanen */}
            <LabelList 
              dataKey="uang" 
              position="right" 
              formatter={(value) => `Rp ${value} Jt`}
              style={{ fontSize: '24px', fontWeight: 'bold', fill: '#374151' }}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
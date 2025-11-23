'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { tahun: '2020', ukt: 6.5, gaji: 4.2 },
  { tahun: '2021', ukt: 8, gaji: 4.3 },
  { tahun: '2022', ukt: 10, gaji: 4.4 },
  { tahun: '2023', ukt: 12.5, gaji: 4.5 },
  { tahun: '2024', ukt: 15, gaji: 4.6 },
  { tahun: '2025', ukt: 19.5, gaji: 4.7 },
];

// Tooltip versi IG (Font lebih besar dikit biar terbaca di HP orang)
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-4 border-2 border-gray-200 rounded-xl shadow-xl text-lg z-50">
        <p className="font-bold text-gray-700 mb-2">Tahun {label}</p>
        <p className="text-red-500 font-bold">
          UKT: Rp {payload[0].value} Juta
        </p>
        <p className="text-green-600 font-bold">
          Gaji: Rp {payload[1].value} Juta
        </p>
      </div>
    );
  }
  return null;
};

export default function ChartInstagram() {
  return (
    // BEDA DENGAN WEBSITE: 
    // 1. Tidak ada margin bawah (mb-0)
    // 2. Background transparan (karena nanti ditempel di kanvas putih)
    // 3. Border/Shadow dihilangkan (biar menyatu)
    <div className="w-full h-full flex flex-col justify-center">
      
      <h3 className="text-center text-3xl font-extrabold text-gray-800 mb-4">
        Biaya Kuliah vs Gaji (Update Nov 2025)
      </h3>
      <p className="text-center text-xl text-gray-500 mb-10">
        Data simulasi: Lonjakan UKT vs Stagnasi UMR
      </p>

      <div className="h-[500px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart 
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }} 
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            {/* Font Axis diperbesar untuk IG */}
            <XAxis dataKey="tahun" tick={{fontSize: 16}} dy={10} />
            <YAxis 
              unit=" Jt" 
              tick={{fontSize: 16}} 
              domain={[0, 25]} 
            />
            
            <Tooltip content={<CustomTooltip />} />
            
            <Legend 
              verticalAlign="bottom" 
              height={40}
              wrapperStyle={{ bottom: 0, fontSize: '20px' }} 
            />
            
            <Line 
              name="Rata-rata UKT"
              type="monotone" 
              dataKey="ukt" 
              stroke="#ef4444" 
              strokeWidth={6} // Garis dipertebal biar jelas di IG
              dot={{ r: 8 }} 
              activeDot={{ r: 10 }}
            />

            <Line 
              name="Gaji Fresh Grad"
              type="monotone" 
              dataKey="gaji" 
              stroke="#22c55e" 
              strokeWidth={6} // Garis dipertebal
              dot={{ r: 8 }} 
              activeDot={{ r: 10 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
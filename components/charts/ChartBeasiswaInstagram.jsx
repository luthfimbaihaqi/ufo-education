  'use client';

  import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell, ResponsiveContainer } from 'recharts';

  const data = [
    { negara: 'Inggris 🇬🇧', uang: 28, color: '#ef4444' },
    { negara: 'Amerika 🇺🇸', uang: 25, color: '#3b82f6' },
    { negara: 'Australia 🇦🇺', uang: 22, color: '#eab308' },
    { negara: 'Jepang 🇯🇵', uang: 18, color: '#ec4899' },
    { negara: 'Jerman 🇩🇪', uang: 16, color: '#22c55e' },
  ];

  // Tooltip Besar untuk IG
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
        {/* Tanpa Judul & Tanpa Margin Bawah Jumbo */}
        <ResponsiveContainer width="100%" height="100%">
          <BarChart 
            data={data}
            layout="vertical"
            margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} />
            <XAxis type="number" unit=" Jt" tick={{fontSize: 20}} hide />
            
            {/* Font Negara Diperbesar */}
            <YAxis 
              dataKey="negara" 
              type="category" 
              tick={{fontSize: 28, fontWeight: 'bold'}} 
              width={180}
            />
            <Tooltip content={<CustomTooltip />} cursor={{fill: 'transparent'}} />
            
            {/* Batang Dipertebal */}
            <Bar dataKey="uang" radius={[0, 20, 20, 0]} barSize={50}>
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    );
  }
import React from 'react';

const ComparisonTable = ({ headers, rows }) => {
  return (
    <div className="mx-auto max-w-5xl w-full">
      <div className="overflow-x-auto rounded-[1.5rem] border border-gray-100 shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-3 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">
                {headers[0]}
              </th>
              <th className="px-3 py-6 text-gray-400 font-black text-base tracking-widest uppercase">
                {headers[1]}
              </th>
              <th className="px-3 py-6 text-[#e0006e] font-black text-base tracking-widest uppercase bg-[#e0006e]/5">
                {headers[2]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, i) => (
              <tr key={i} className="group hover:bg-gray-50 transition-colors">
                <td className="px-3 py-6 font-bold text-gray-500">{row[0]}</td>
                <td className="px-3 py-6 text-gray-500 font-medium text-sm italic">{row[1]}</td>
                <td className="px-3 py-6 font-bold text-[#e0006e] bg-[#e0006e]/5 group-hover:bg-[#e0006e]/10 transition-colors text-sm">{row[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;

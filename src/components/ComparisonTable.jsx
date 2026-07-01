import React from 'react';

const ComparisonTable = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm mx-auto max-w-5xl">
      <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 md:px-8 py-4 md:py-6 text-gray-900 font-black text-xs md:text-lg tracking-wider md:tracking-widest uppercase">
              {headers[0]}
            </th>
            <th className="px-4 md:px-8 py-4 md:py-6 text-gray-400 font-black text-xs md:text-lg tracking-wider md:tracking-widest uppercase">
              {headers[1]}
            </th>
            <th className="px-4 md:px-8 py-4 md:py-6 text-[#e0006e] font-black text-xs md:text-lg tracking-wider md:tracking-widest uppercase bg-[#e0006e]/5">
              {headers[2]}
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rows.map((row, i) => (
            <tr key={i} className="group hover:bg-gray-50 transition-colors">
              <td className="px-4 md:px-8 py-4 md:py-6 font-bold text-gray-900 bg-white text-sm md:text-base">
                {row[0]}
              </td>
              <td className="px-4 md:px-8 py-4 md:py-6 text-gray-500 bg-white text-sm md:text-base">
                {row[1]}
              </td>
              <td className="px-4 md:px-8 py-4 md:py-6 font-bold text-[#e0006e] bg-[#e0006e]/5 group-hover:bg-[#e0006e]/10 transition-colors text-sm md:text-base">
                {row[2]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonTable;

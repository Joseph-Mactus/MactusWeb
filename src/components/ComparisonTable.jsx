import React from 'react';

const ComparisonTable = ({ headers, rows }) => {
  return (
    <div className="mx-auto max-w-5xl w-full">
      {/* Desktop / Tablet Table View */}
      <div className="hidden md:block overflow-x-auto rounded-[2.5rem] border border-gray-100 shadow-sm">
        <table className="w-full text-left border-collapse min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-8 py-6 text-gray-900 font-black text-lg tracking-widest uppercase">
                {headers[0]}
              </th>
              <th className="px-8 py-6 text-gray-400 font-black text-lg tracking-widest uppercase">
                {headers[1]}
              </th>
              <th className="px-8 py-6 text-[#e0006e] font-black text-lg tracking-widest uppercase bg-[#e0006e]/5">
                {headers[2]}
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {rows.map((row, i) => (
              <tr key={i} className="group hover:bg-gray-50 transition-colors">
                <td className="px-8 py-6 font-bold text-gray-900 bg-white text-base">
                  {row[0]}
                </td>
                <td className="px-8 py-6 text-gray-500 bg-white text-base">
                  {row[1]}
                </td>
                <td className="px-8 py-6 font-bold text-[#e0006e] bg-[#e0006e]/5 group-hover:bg-[#e0006e]/10 transition-colors text-base">
                  {row[2]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="block md:hidden space-y-4 px-4">
        {rows.map((row, i) => (
          <div key={i} className="bg-white rounded-3xl border border-gray-100 p-5 shadow-sm flex flex-col gap-3">
            {/* Header/Risk */}
            <div>
              <span className="text-[9px] uppercase tracking-widest font-black text-gray-400 block mb-1">
                {headers[0]}
              </span>
              <h4 className="font-extrabold text-base text-gray-900 leading-snug">
                {row[0]}
              </h4>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-gray-100">
              {/* Option 1 */}
              <div>
                <span className="text-[9px] uppercase tracking-wider font-extrabold text-gray-400 block mb-1">
                  {headers[1]}
                </span>
                <p className="text-gray-500 text-xs font-semibold leading-relaxed">
                  {row[1]}
                </p>
              </div>

              {/* Option 2 (Product) */}
              <div className="bg-[#e0006e]/5 p-3 rounded-xl border border-[#e0006e]/10">
                <span className="text-[9px] uppercase tracking-wider font-black text-[#e0006e] block mb-1">
                  {headers[2]}
                </span>
                <p className="text-[#e0006e] text-xs font-bold leading-relaxed">
                  {row[2]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonTable;

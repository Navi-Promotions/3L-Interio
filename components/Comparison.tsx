import React from 'react';
import { Check, X, AlertTriangle } from 'lucide-react';

const comparisonData = [
  {
    feature: "Finish Quality",
    factory: "Seamless, bubble-free machine finish.",
    carpenter: "Manual pasting, visible bubbles & glue marks."
  },
  {
    feature: "Edge Banding",
    factory: "Machine-pressed (Hot Glue) for waterproof seal.",
    carpenter: "Hand-pasted (fevicol) - peels off over time."
  },
  {
    feature: "Precision",
    factory: "CNC cutting with 0.5mm tolerance.",
    carpenter: "Manual cutting, uneven gaps & misalignment."
  },
  {
    feature: "Delivery Time",
    factory: "Guaranteed 45 days (Parallel production).",
    carpenter: "Unpredictable delays (Work happens on-site)."
  },
  {
    feature: "Cost Transparency",
    factory: "Fixed quote. No hidden material costs.",
    carpenter: "Estimates vary. Material wastage charged to you."
  },
  {
    feature: "Dust & Noise",
    factory: "Zero. Installed in 2-3 days.",
    carpenter: "Messy home for weeks. Dust everywhere."
  }
];

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm">The Real Difference</span>
          <h2 className="text-3xl md:text-5xl font-bold text-primary mt-2">Factory vs. Carpentry</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            Why 3L Interio's engineering approach is the smarter investment for your home compared to traditional methods.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-6 text-left w-1/3 bg-gray-50 border-b-2 border-gray-100">
                  <span className="text-gray-400 uppercase tracking-widest text-xs font-bold">Feature</span>
                </th>
                <th className="p-6 text-left w-1/3 bg-primary text-white border-t-4 border-secondary rounded-t-sm relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-xl font-bold block">3L Interio</span>
                    <span className="text-secondary text-xs uppercase tracking-wider">Factory Finish</span>
                  </div>
                </th>
                <th className="p-6 text-left w-1/3 bg-gray-100 text-gray-500 border-b-2 border-gray-200">
                  <span className="text-xl font-bold block">Local Carpenter</span>
                  <span className="text-gray-400 text-xs uppercase tracking-wider">Manual Work</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, idx) => (
                <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="p-6 font-bold text-gray-700">
                    {row.feature}
                  </td>
                  <td className="p-6 bg-primary/5 border-l border-r border-white">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4" />
                      </div>
                      <span className="text-gray-800 font-medium">{row.factory}</span>
                    </div>
                  </td>
                  <td className="p-6 bg-gray-50/50">
                    <div className="flex items-start">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        {idx === 5 ? <AlertTriangle className="w-4 h-4" /> : <X className="w-4 h-4" />}
                      </div>
                      <span className="text-gray-500">{row.carpenter}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
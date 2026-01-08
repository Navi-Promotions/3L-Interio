import React from 'react';
import { Microscope, Layers, Droplets, Hammer, ClipboardCheck } from 'lucide-react';

const standards = [
  {
    icon: Layers,
    title: "Material Density Check",
    desc: "We verify the density of every MDF/Ply board to ensure it meets our structural strength requirements."
  },
  {
    icon: Microscope,
    title: "Precision Calibration",
    desc: "Our German machinery is calibrated daily to maintain a cutting tolerance of less than 0.5mm."
  },
  {
    icon: Droplets,
    title: "Moisture Resistance",
    desc: "Every exposed edge is sealed with Rehau edge bands using high-temperature glue to prevent water ingress."
  },
  {
    icon: Hammer,
    title: "Hardware Stress Test",
    desc: "Hinges and channels (Blum/Hettich) undergo a cycle test to ensure smooth operation for 10+ years."
  },
  {
    icon: ClipboardCheck,
    title: "Pre-Dispatch Inspection",
    desc: "Modules are assembled at the factory for a final fit-check before being packed for delivery."
  }
];

const QualityStandards: React.FC = () => {
  return (
    <section className="py-24 bg-dark-surface relative overflow-hidden">
        {/* Background grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(251,191,36,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(251,191,36,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
                <span className="text-secondary font-bold tracking-[0.2em] uppercase text-sm block mb-3">
                    Quality Assurance
                </span>
                <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                    Our 5-Point <br/><span className="text-secondary">Quality Check</span>
                </h2>
            </div>
            <p className="text-gray-400 max-w-md text-sm leading-relaxed mt-4 md:mt-0">
                We don't just rely on trust; we rely on testing. Every project passes through these rigorous checks.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {standards.map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-sm hover:bg-white/10 hover:border-secondary/50 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/10 group-hover:border-secondary">
                        <item.icon className="w-5 h-5 text-secondary" />
                    </div>
                    <div className="text-4xl font-black text-white/5 absolute top-4 right-4 group-hover:text-secondary/10 transition-colors">0{idx + 1}</div>
                    <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default QualityStandards;
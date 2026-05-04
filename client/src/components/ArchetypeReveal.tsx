import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TarotCard } from '../data/arcana';

interface ArchetypeRevealProps {
  card: TarotCard;
  onReset: () => void;
}

const ArchetypeReveal: React.FC<ArchetypeRevealProps> = ({ card, onReset }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="z-10 w-full max-w-5xl mx-auto space-y-12 py-12 px-6"
    >
      {/* Immersive Destination Hero: Aligned with SkyBound */}
      <section className="relative h-[55vh] flex flex-col items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-tertiary/10 blur-[150px] rounded-full scale-150 animate-pulse z-0" />
        <div className="z-10 space-y-6">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[10rem] md:text-[12rem] drop-shadow-[0_0_50px_rgba(255,215,0,0.3)] leading-none"
          >
            {card.image}
          </motion.div>
          <div className="space-y-2">
            <p className="text-[11px] font-black text-tertiary uppercase tracking-[0.6em]">Nature Manifested</p>
            <h2 className="text-7xl md:text-9xl font-black text-on-surface leading-none serif italic tracking-tighter">
              {card.name}
            </h2>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
        {/* Value Propositions: Curation Standard */}
        <div className="md:col-span-2 space-y-12">
          <div className="space-y-4 px-4 border-l-4 border-primary">
            <h3 className="text-[11px] font-black text-primary uppercase tracking-[0.4em]">Strategic Profile</h3>
            <p className="text-2xl md:text-3xl font-medium text-on-surface leading-snug serif">
              "{card.meaning}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {card.traits.map((trait, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                key={trait}
                className="p-10 bg-surface-container/40 border border-outline/10 rounded-m3-xl space-y-4 backdrop-blur-xl hover:bg-primary/5 transition-all group"
              >
                <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">verified</span>
                <h4 className="font-black text-sm uppercase tracking-widest text-on-surface">Architectural Trait</h4>
                <p className="text-xl font-bold text-on-surface-variant leading-tight">{trait}</p>
                <p className="text-[11px] text-on-surface-variant/60 font-bold leading-relaxed uppercase tracking-wider">
                  Verified by Stitch Intelligence 2026
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Loyalty Integration: Aligned with SkyPass */}
        <div className="space-y-8">
          <div className="bg-primary/10 text-on-primary-container p-10 rounded-[3rem] border border-primary/20 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-7xl text-primary">military_tech</span>
            </div>
            <div className="relative z-10 space-y-6">
              <div className="space-y-1">
                <h3 className="text-3xl font-black serif italic tracking-tight">The Arcana Pass</h3>
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Elite Membership</p>
              </div>
              <p className="text-xs font-bold leading-relaxed text-on-surface-variant">
                Unlock exclusive manifestations and synchronize your nature with the Global Intelligence Gateway.
              </p>
              <div className="pt-6 border-t border-primary/10">
                <button className="w-full py-5 bg-primary text-on-primary rounded-full font-black text-[11px] uppercase tracking-widest hover:scale-[1.03] active:scale-95 transition-all shadow-xl shadow-primary/20">
                  Join Elite Ritual
                </button>
              </div>
            </div>
          </div>

          <button
            onClick={onReset}
            className="w-full p-8 bg-surface-container/60 border border-outline/10 text-on-surface-variant rounded-m3-xl font-black text-xs uppercase tracking-[0.3em] hover:bg-surface-container hover:text-on-surface transition-all flex justify-between items-center group shadow-sm"
          >
            <span>Reset Horizon</span>
            <span className="material-symbols-outlined group-hover:rotate-180 transition-transform duration-700">refresh</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ArchetypeReveal;

import React from 'react';
import { motion } from 'framer-motion';
import { Question } from '../data/arcana';

interface DiscoveryQuizProps {
  question: Question;
  index: number;
  total: number;
  onAnswer: (weights: Record<string, number>) => void;
}

const DiscoveryQuiz: React.FC<DiscoveryQuizProps> = ({ question, index, total, onAnswer }) => {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="z-10 w-full max-w-2xl space-y-12 px-6"
    >
      <div className="flex justify-between items-end px-4">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-primary uppercase tracking-[0.4em]">Preference Analysis</p>
          <h3 className="text-sm font-black text-on-surface-variant uppercase tracking-widest">Ritual {index + 1} of {total}</h3>
        </div>
        <div className="flex space-x-1.5 pb-1">
          {Array.from({ length: total }).map((_, i) => (
            <div key={i} className={`w-8 h-1 rounded-full transition-all duration-500 ${i <= index ? 'bg-primary shadow-[0_0_10px_rgba(98,0,238,0.5)]' : 'bg-surface-container'}`} />
          ))}
        </div>
      </div>

      <div className="elite-widget border-outline/5 space-y-10">
        <h2 className="text-3xl md:text-4xl font-black text-on-surface leading-tight serif italic">
          {question.text}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {question.options.map((opt, i) => (
            <button
              key={i}
              onClick={() => onAnswer(opt.weights)}
              className="w-full p-8 bg-surface-container/40 text-left border border-outline/10 rounded-m3-xl font-bold text-on-surface hover:bg-primary/10 hover:border-primary/40 transition-all flex justify-between items-center group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10 text-lg">{opt.text}</span>
              <span className="material-symbols-outlined relative z-10 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                arrow_right_alt
              </span>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DiscoveryQuiz;

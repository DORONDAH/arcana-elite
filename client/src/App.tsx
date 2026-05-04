import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { QUESTIONS, TAROT_CARDS, TarotCard } from './data/arcana';
import DiscoveryQuiz from './components/DiscoveryQuiz';
import ArchetypeReveal from './components/ArchetypeReveal';

function App() {
  const [step, setStep] = useState<'intro' | 'discovery' | 'manifestation'>('intro');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<TarotCard | null>(null);

  const handleStepChange = (newStep: 'intro' | 'discovery' | 'manifestation') => {
    if (!(document as any).startViewTransition) {
      setStep(newStep);
      return;
    }
    (document as any).startViewTransition(() => {
      setStep(newStep);
    });
  };

  const handleAnswer = (weights: Record<string, number>) => {
    const applyLogic = () => {
      const newScores = { ...scores };
      Object.entries(weights).forEach(([key, val]) => {
        newScores[key] = (newScores[key] || 0) + val;
      });
      setScores(newScores);

      if (currentIdx < QUESTIONS.length - 1) {
        setCurrentIdx(currentIdx + 1);
      } else {
        calculateResult(newScores);
      }
    };

    if (!(document as any).startViewTransition) {
      applyLogic();
      return;
    }
    (document as any).startViewTransition(applyLogic);
  };

  const calculateResult = (finalScores: Record<string, number>) => {
    const winnerId = Object.entries(finalScores).reduce((a, b) => a[1] > b[1] ? a : b)[0];
    const card = TAROT_CARDS.find(c => c.id === winnerId) || TAROT_CARDS[0];
    setResult(card);
    setStep('manifestation');
  };

  const resetRitual = () => {
    const applyReset = () => {
      setStep('intro');
      setCurrentIdx(0);
      setScores({});
      setResult(null);
    };

    if (!(document as any).startViewTransition) {
      applyReset();
      return;
    }
    (document as any).startViewTransition(applyReset);
  };

  return (
    <main className="center-ritual bg-arcana-hero bg-cover bg-center overflow-y-auto no-scrollbar">
      {/* Professional Atmospheric Overlay */}
      <div className="fixed inset-0 atmospheric-overlay z-0 pointer-events-none" />

      <AnimatePresence mode="wait">
        {step === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="z-10 w-full max-w-4xl text-center space-y-12 px-6 py-20"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block px-5 py-2 bg-primary/10 border border-primary/20 rounded-full text-[11px] font-black tracking-[0.5em] text-primary uppercase"
              >
                Project Arcana Elite
              </motion.div>

              <h1 className="text-7xl md:text-9xl font-black text-on-surface leading-none tracking-tighter">
                Behold Your <br />
                <span className="text-tertiary italic serif">Intelligence.</span>
              </h1>

              <p className="max-w-xl mx-auto text-on-surface-variant font-medium text-lg leading-relaxed">
                Connect with the celestial architecture of your psychological archetypes.
                One ritual. Total self-discovery.
              </p>
            </div>

            {/* Immersive Discovery Widget: Aligned with Horizon Standard */}
            <div className="elite-widget max-w-2xl mx-auto flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 border-primary/10">
              <div className="flex-1 text-left px-4 hidden md:block border-r border-outline/10">
                <p className="text-[10px] font-black text-tertiary uppercase tracking-widest mb-1">Standard</p>
                <p className="text-sm font-bold text-on-surface">Stitch Horizon 2026</p>
              </div>

              <div className="flex-1 text-left px-4 hidden md:block">
                <p className="text-[10px] font-black text-tertiary uppercase tracking-widest mb-1">Status</p>
                <p className="text-sm font-bold text-on-surface">System Ready</p>
              </div>

              <button
                onClick={() => handleStepChange('discovery')}
                className="w-full md:w-auto px-10 py-6 bg-primary text-on-primary rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl shadow-primary/30 hover:scale-[1.03] active:scale-95 transition-all flex items-center justify-center space-x-3"
              >
                <span className="material-symbols-outlined">auto_awesome</span>
                <span>Initialize Ritual</span>
              </button>
            </div>

            <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {[
                { label: 'Authority', desc: 'Sophisticated Playfair typography architecture.' },
                { label: 'Immersion', desc: '4K Full-bleed celestial atmospheric visuals.' },
                { label: 'Precision', desc: 'Centered Viewport-Center layout logic.' }
              ].map((prop, i) => (
                <div key={i} className="space-y-2 px-6 border-l border-primary/20">
                  <h3 className="text-xs font-black uppercase tracking-widest text-primary">{prop.label}</h3>
                  <p className="text-[11px] text-on-surface-variant font-bold leading-relaxed">{prop.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {step === 'discovery' && (
          <DiscoveryQuiz
            question={QUESTIONS[currentIdx]}
            index={currentIdx}
            total={QUESTIONS.length}
            onAnswer={handleAnswer}
          />
        )}

        {step === 'manifestation' && result && (
          <ArchetypeReveal card={result} onReset={resetRitual} />
        )}
      </AnimatePresence>

      <footer className="fixed bottom-10 z-10 w-full text-center pointer-events-none">
        <p className="text-[10px] font-black text-on-surface-variant opacity-40 uppercase tracking-[0.5em]">
          Powered by Google Stitch • GitHub Enterprise Elite
        </p>
      </footer>
    </main>
  );
}

export default App;

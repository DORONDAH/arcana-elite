export interface TarotCard {
  id: string;
  name: string;
  meaning: string;
  traits: string[];
  image: string;
}

export const TAROT_CARDS: TarotCard[] = [
  {
    id: 'magician',
    name: 'The Magician',
    meaning: 'The architect of willed action and focused creation. You possess the elite ability to manifest complexity from simplicity.',
    traits: ['Active Intelligence', 'Strategic Vision', 'Manifestation'],
    image: '🪄'
  },
  {
    id: 'high-priestess',
    name: 'The High Priestess',
    meaning: 'The guardian of intuitive wisdom and hidden patterns. Your nature is rooted in the sophisticated observation of the unseen.',
    traits: ['Deep Intuition', 'Subconscious Authority', 'Knowledge'],
    image: '🌙'
  },
  {
    id: 'emperor',
    name: 'The Emperor',
    meaning: 'The pillar of structure, foundation, and logical authority. You provide the professional architecture upon which worlds are built.',
    traits: ['Structural Power', 'Logic', 'Foundation'],
    image: '👑'
  },
  {
    id: 'hermit',
    name: 'The Hermit',
    meaning: 'The seeker of inner reflection and solitary truth. Your nature is a lighthouse of wisdom in the midnight of the unknown.',
    traits: ['Introspective Truth', 'Solitude', 'Wisdom'],
    image: '🕯️'
  }
];

export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    weights: Record<string, number>;
  }[];
}

export const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "When the horizon is unknown, where is your instinct drawn?",
    options: [
      { text: "Toward the vibrant center of willed action", weights: { magician: 2, emperor: 1 } },
      { text: "Toward the quiet sanctuary of deep reflection", weights: { hermit: 2, high_priestess: 1 } }
    ]
  },
  {
    id: 2,
    text: "How do you navigate the architecture of a complex challenge?",
    options: [
      { text: "Through rigorous logic and structural authority", weights: { emperor: 2, magician: 1 } },
      { text: "By deciphering the hidden patterns of intuition", weights: { high_priestess: 2, hermit: 1 } }
    ]
  },
  {
    id: 3,
    text: "What defines your most professional achievement?",
    options: [
      { text: "The power to build and manifest lasting change", weights: { magician: 2, emperor: 1 } },
      { text: "The wisdom to uncover and protect essential truth", weights: { hermit: 2, high_priestess: 1 } }
    ]
  }
];

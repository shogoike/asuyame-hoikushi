import { useState } from 'react';
import abVariants from '../constants/abVariants';

const STORAGE_KEY = 'ab_variant';

const useABTest = () => {
  const [variant] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const found = abVariants.find((v) => v.id === saved);
      if (found) return found;
    }

    const selected = abVariants[Math.floor(Math.random() * abVariants.length)];
    localStorage.setItem(STORAGE_KEY, selected.id);
    return selected;
  });

  return variant;
};

export default useABTest;

import React from 'react';
import GuideHero from '../components/guide/GuideHero';
import Roadmap from '../components/guide/Roadmap';
import FaqAccordion from '../components/guide/FaqAccordion';
import InteractiveChecklist from '../components/guide/InteractiveChecklist';
import GuideCTA from '../components/guide/GuideCTA';

const Guide = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <GuideHero />
      <Roadmap />
      <FaqAccordion />
      <InteractiveChecklist />
      <GuideCTA />
    </div>
  );
};

export default Guide;

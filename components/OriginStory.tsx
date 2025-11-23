import React from 'react';

const OriginStory = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-stone-900 text-white border-b border-stone-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest mb-6 text-red-500">
          The Origin
        </h2>
        <p className="text-lg md:text-xl text-stone-300 leading-relaxed font-light mb-8">
          This movement was born from a pivotal conversation between <span className="font-bold text-white">Rob Hersov</span> and <span className="font-bold text-white">Prince Mashele</span>.
          Their dialogue served as the diagnostic spark—a brutal, honest assessment of our trajectory and the urgent need for a new political formation.
        </p>
        <p className="text-stone-400 italic">
          "The ANC fell a long time ago... A party first falls in the minds of people before you can experience the tangible expression of the fall."
        </p>
      </div>
    </section>
  );
};

export default OriginStory;


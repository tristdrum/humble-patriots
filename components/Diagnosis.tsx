import React from 'react';

const Diagnosis = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-white text-stone-900">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-12 uppercase tracking-tight border-b-4 border-stone-900 pb-4 inline-block">
          The Diagnosis <span className="text-stone-400 font-normal normal-case italic ml-2">(The Brutal Truth)</span>
        </h2>

        <blockquote className="text-2xl md:text-4xl font-serif italic text-stone-500 mb-16 border-l-8 border-red-600 pl-8 py-2">
          "The first step to greatness is the humility to admit we are backward."
        </blockquote>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-red-600">The Lie</h3>
            <p className="text-lg font-medium">That political freedom is enough.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-stone-900">The Truth</h3>
            <p className="text-lg text-stone-600">Without economic power and the rule of law, we are a nation of consumers, not creators.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider text-stone-900">The Reality</h3>
            <p className="text-lg text-stone-600">We are a country blessed with everything—resources, beauty, and people—governed by a class that treats the state like a football.</p>
          </div>
        </div>

        <div className="bg-stone-100 p-8 md:p-12 border border-stone-200">
          <p className="text-2xl md:text-3xl font-bold text-center leading-tight">
            The ANC has collapsed. The EFF offers chaos. The DA has hit a ceiling.
            <br className="hidden md:block" />
            <span className="text-red-600 block mt-4 text-4xl md:text-5xl">We need South Africa 2.0.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Diagnosis;


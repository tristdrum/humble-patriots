import React from 'react';

const People = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-stone-50 text-stone-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 uppercase tracking-tight text-center">
          The Voices of Reason
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Rob Hersov */}
          <div className="bg-white p-8 border border-stone-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-64 bg-stone-200 mb-6 flex items-center justify-center grayscale">
              {/* Placeholder for Image */}
              <span className="text-stone-400 font-bold text-2xl uppercase">Rob Hersov</span>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-2">Rob Hersov</h3>
            <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-4">Business Leader & Capitalist</p>
            <p className="text-stone-600 leading-relaxed">
              A fearless voice calling for the unseating of the incompetent and the mobilization of global capital to rebuild South Africa.
            </p>
          </div>

          {/* Prince Mashele */}
          <div className="bg-white p-8 border border-stone-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="h-64 bg-stone-200 mb-6 flex items-center justify-center grayscale">
               {/* Placeholder for Image */}
              <span className="text-stone-400 font-bold text-2xl uppercase">Prince Mashele</span>
            </div>
            <h3 className="text-2xl font-bold uppercase mb-2">Prince Mashele</h3>
            <p className="text-red-600 font-mono text-sm tracking-widest uppercase mb-4">Political Analyst</p>
            <p className="text-stone-600 leading-relaxed">
              The intellectual architect of the "Black Renaissance," arguing for meritocracy and a new coalition beyond racial identity politics.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default People;


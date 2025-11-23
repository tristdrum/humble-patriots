import React from 'react';

const CoreTenets = () => {
  const tenets = [
    {
      title: "Unapologetic Meritocracy",
      description: "We do not care about the color of the cat, only that it catches the mouse. We will appoint the smartest Black and White minds to run our institutions. No cadre deployment. Only excellence."
    },
    {
      title: "The Singapore Standard",
      description: "Our goal is not to be \"better than Zimbabwe.\" Our goal is to be the Switzerland of Africa. We aim for First World education, First World safety, and First World infrastructure."
    },
    {
      title: "Western Technique, African Spirit",
      description: "We will adopt the best global practices in science, math, and industrialization (Western Technique) while maintaining our unique identity and pride (African Spirit)."
    },
    {
      title: "Ruthless Accountability",
      description: "Political criminals, past and present, will face the full might of the law. We will professionalize the police and prosecute corruption without fear or favor."
    },
    {
      title: "Radical Unity",
      description: "We reject the politics of racial division. We believe that White capital and Black labor/leadership must not just coexist, but collaborate to build wealth. We are partners in this project."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-stone-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-[0.3em] text-red-500 uppercase mb-4">Our Covenant</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase">The Core Tenets</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tenets.map((tenet, index) => (
            <div key={index} className="p-8 border border-stone-800 hover:border-red-600 transition-colors duration-300 group">
              <div className="text-red-600 font-bold text-5xl mb-6 opacity-30 group-hover:opacity-100 transition-opacity">0{index + 1}</div>
              <h4 className="text-2xl font-bold mb-4">{tenet.title}</h4>
              <p className="text-stone-400 leading-relaxed">{tenet.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTenets;


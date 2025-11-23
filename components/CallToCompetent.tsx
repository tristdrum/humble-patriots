import React from 'react';

const CallToCompetent = () => {
  const cabinet = [
    { role: "The Intellectuals", name: "Dr. Sizwe Mpofu-Walsh (SMWX)", desc: "You speak truth to power; now help us wield power with truth." },
    { role: "The Strategists", name: "Frans Cronje", desc: "We need maps for the future, not just critiques of the present." },
    { role: "The Operators", name: "Mteto Nyati", desc: "You fixed Altron; help us fix the State." },
    { role: "The Guardians", name: "Thuli Madonsela", desc: "We need a moral compass that points true North." },
    { role: "The Builders", name: "Imtiaz Sooliman", desc: "You deliver where the government fails; teach us how to serve." },
    { role: "The Global South Africans", name: "Elon Musk & Diaspora", desc: "Come home. Not just with your money, but with your mind. Help us industrialize." },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-stone-100 text-stone-900">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-6 uppercase">The Call to the Competent</h2>
            <p className="text-xl md:text-2xl font-serif italic text-stone-600 max-w-2xl mx-auto">
            "Politics is too serious to be left to scoundrels."
            </p>
            <p className="mt-8 text-lg text-stone-800 max-w-3xl mx-auto">
                We are not looking for career politicians. We are looking for patriots who are willing to take a pay cut, pause their corporate ladders, and step into the arena to save the future for their children.
            </p>
        </div>

        <div className="bg-white p-8 md:p-12 shadow-2xl border-t-4 border-red-600">
            <h3 className="text-2xl font-bold uppercase tracking-widest text-center mb-12">Shadow Cabinet of Merit</h3>
            <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                {cabinet.map((member, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
                        <div className="w-12 h-12 bg-stone-900 text-white flex items-center justify-center font-bold text-xl shrink-0">
                            {member.name.charAt(0)}
                        </div>
                        <div>
                            <span className="text-red-600 text-sm font-bold uppercase tracking-wider block mb-1">{member.role}</span>
                            <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                            <p className="text-stone-600 text-sm italic">"{member.desc}"</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default CallToCompetent;


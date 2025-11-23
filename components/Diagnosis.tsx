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

        <div className="space-y-16">
          {/* 1. Construction and Plunder */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-stone-900 mb-4">1. The Cycle of Construction and Plunder</h3>
            <div className="md:grid md:grid-cols-2 gap-8">
              <p className="text-lg text-stone-600 leading-relaxed">
                Post-1994 governance has been defined by consumption rather than value creation. While previous eras built state power and infrastructure, the current dispensation has plundered it.
              </p>
              <div className="bg-stone-100 p-6 border-l-4 border-red-500">
                <p className="italic text-stone-700">"In the main, black people have been consumers; they have not been creators of wealth."</p>
              </div>
            </div>
          </div>

          {/* 2. The Vacuum */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-stone-900 mb-4">2. The Political Vacuum</h3>
            <div className="md:grid md:grid-cols-2 gap-8">
              <p className="text-lg text-stone-600 leading-relaxed">
                The ANC has collapsed in the minds of the people. However, existing opposition is not yet fit to govern. The EFF and MK represent "backwardness," while the DA has hit a "white ceiling" by failing to fully embrace diversity in leadership.
              </p>
              <div className="bg-stone-100 p-6 border-l-4 border-stone-500">
                <p className="italic text-stone-700">"The ANC is going to eat dust... [But] the DA has created a ceiling for themselves."</p>
              </div>
            </div>
          </div>

          {/* 3. The Vision */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-stone-900 mb-4">3. The Meritocratic Coalition</h3>
            <div className="md:grid md:grid-cols-2 gap-8">
              <p className="text-lg text-stone-600 leading-relaxed">
                A new movement must transcend racial identity politics. It requires a "Black Renaissance" of intellectual rigor combined with white expertise. Success depends on educated, meritocratic Blacks and Whites working together.
              </p>
              <div className="bg-stone-100 p-6 border-l-4 border-red-500">
                <p className="italic text-stone-700">"Nothing new will succeed politically in South Africa if it does not involve blacks and whites together."</p>
              </div>
            </div>
          </div>

          {/* 4. The Blueprint */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-stone-900 mb-4">4. Humility & Technical Education</h3>
            <div className="md:grid md:grid-cols-2 gap-8">
              <p className="text-lg text-stone-600 leading-relaxed">
                Like post-war Germany or Japan, we must admit our failures to fix them. This requires a strategy of humility and a relentless focus on technical education (Maths and Science), removing obstacles like SADTU.
              </p>
              <div className="bg-stone-100 p-6 border-l-4 border-stone-500">
                <p className="italic text-stone-700">"If you do not acknowledge that you are backward, you will never address your backwardness."</p>
              </div>
            </div>
          </div>

           {/* 5. Economic Strategy */}
           <div>
            <h3 className="text-2xl font-bold uppercase tracking-wider text-stone-900 mb-4">5. Aggressive Capital Recruitment</h3>
            <div className="md:grid md:grid-cols-2 gap-8">
              <p className="text-lg text-stone-600 leading-relaxed">
                We must abandon ideological posturing and aggressively court global capital. We need to bring investment home to create jobs and turn South Africa into the "Switzerland of Africa."
              </p>
              <div className="bg-stone-100 p-6 border-l-4 border-red-500">
                <p className="italic text-stone-700">"Let's go to Elon Musk... We want their billions here. They will create jobs."</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20 bg-stone-900 text-white p-8 md:p-12 text-center">
            <h4 className="text-xl md:text-2xl font-bold uppercase tracking-widest mb-4">The Conclusion</h4>
            <p className="text-lg md:text-xl font-light">
                "Something new will come before 2029... which is going to redefine South African politics."
            </p>
        </div>

      </div>
    </section>
  );
};

export default Diagnosis;

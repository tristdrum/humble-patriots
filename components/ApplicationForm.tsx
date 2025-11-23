import React from 'react';

const ApplicationForm = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-stone-950 text-white border-t border-stone-800">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase">The Application</h2>
        <p className="text-stone-400 font-medium mb-2 uppercase tracking-widest">(The Filter)</p>
        
        <p className="text-xl text-red-500 font-serif italic mb-12">
          We do not want your vote yet. We want your sacrifice.
        </p>

        <div className="bg-stone-900 p-8 md:p-12 border border-stone-800 text-left shadow-2xl">
            <h3 className="text-xl font-bold uppercase mb-8 text-center text-white">Apply to join The Renaissance Council</h3>
            
            <form className="space-y-6">
                <div>
                    <label className="block text-stone-400 text-sm font-bold uppercase mb-2">Name</label>
                    <input type="text" className="w-full bg-stone-800 border-b-2 border-stone-700 focus:border-red-500 outline-none text-white py-2 px-3 transition-colors" />
                </div>

                <div>
                    <label className="block text-stone-400 text-sm font-bold uppercase mb-2">Expertise (Science/Law/Business/Strategy)</label>
                    <input type="text" className="w-full bg-stone-800 border-b-2 border-stone-700 focus:border-red-500 outline-none text-white py-2 px-3 transition-colors" />
                </div>

                <div>
                    <label className="block text-stone-400 text-sm font-bold uppercase mb-2">What are you willing to lose to save South Africa?</label>
                    <textarea rows={3} className="w-full bg-stone-800 border-b-2 border-stone-700 focus:border-red-500 outline-none text-white py-2 px-3 transition-colors"></textarea>
                </div>

                <div className="space-y-3 pt-6">
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 accent-red-600" />
                        <span className="text-stone-400 text-sm group-hover:text-white transition-colors">I acknowledge that I am joining a meritocracy.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 accent-red-600" />
                        <span className="text-stone-400 text-sm group-hover:text-white transition-colors">I agree that White and Black must work together or fail together.</span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                        <input type="checkbox" className="mt-1 accent-red-600" />
                        <span className="text-stone-400 text-sm group-hover:text-white transition-colors">I commit to humility in service of the nation.</span>
                    </label>
                </div>

                <div className="pt-8">
                    <button type="submit" className="w-full bg-white text-black font-black uppercase tracking-widest py-4 hover:bg-stone-200 transition-colors">
                        Submit Application
                    </button>
                </div>
            </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationForm;


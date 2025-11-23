import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 text-center border-t border-stone-900">
      <h3 className="text-xl font-bold uppercase tracking-widest mb-2">The South African Renaissance</h3>
      <p className="text-stone-500 text-sm mb-6">For the children of 2029.</p>
      
      <div className="max-w-2xl mx-auto border-t border-stone-800 pt-8 mt-8">
         <p className="text-stone-700 text-xs font-mono uppercase tracking-widest mb-4">No more excuses. No more scoundrels.</p>
         
         <div className="text-stone-800 text-[10px] uppercase tracking-wider font-sans mt-8 flex flex-col items-center gap-1">
            <p>Built with ❤️ for South Africa by Tristan Drummond.</p>
            <p>Software Engineer & Entrepreneur | East London (eMonti), Eastern Cape.</p>
            <p className="opacity-50">This is not about me, but for the love of our land.</p>
         </div>
      </div>
    </footer>
  );
};

export default Footer;

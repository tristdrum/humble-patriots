import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left Panel: Union Buildings (Grayscale) */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-stone-900 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-left.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Right Panel: Futuristic Skyline (Golden Hour) */}
      <div
        className="w-full md:w-1/2 h-1/2 md:h-full bg-amber-600 relative bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-right.jpeg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-900/40 to-amber-500/20" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4 drop-shadow-2xl">
          We Are Not Here To Eat.<br />
          <span className="text-red-500">We Are Here To Fix.</span>
        </h1>
        
        <p className="text-lg md:text-2xl text-stone-200 max-w-3xl font-light mb-12 drop-shadow-lg leading-relaxed">
          South Africa is a declining empire. It requires a new coalition of the competent—the best of Black and the best of White—to execute the turnaround strategy.
        </p>

        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-none text-xl tracking-widest transition-all transform hover:scale-105 shadow-xl border border-red-500">
          APPLY TO SERVE
        </button>
      </div>
      
      <div className="absolute bottom-10 w-full text-center z-10">
          <p className="text-stone-400 text-sm tracking-[0.3em] uppercase">The South African Renaissance</p>
      </div>
    </section>
  );
};

export default Hero;

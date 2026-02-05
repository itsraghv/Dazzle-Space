import React from "react";

export const TrustedBy = () => {
  const partners = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5", "Logo 6"];

  return (
    <section className="py-20 border-y border-white/5">
      <div className="container mx-auto px-6">
        <p className="text-center text-white/40 text-sm font-medium uppercase tracking-widest mb-10">
          Trusted by 1,000+ teams and professionals worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-30">
           {partners.map(p => (
             <span key={p} className="text-xl font-bold italic tracking-tighter text-white">{p}</span>
           ))}
        </div>
      </div>
    </section>
  );
};

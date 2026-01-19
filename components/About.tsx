import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO: Elegante y proporcionado */}
        <div className="text-center space-y-4 mb-16 md:mb-24">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#C5B08B]"></span>
            <span className="text-stone-400 text-[9px] font-black uppercase tracking-[0.4em]">Deostampa Lab</span>
            <span className="w-10 h-[1px] bg-[#C5B08B]"></span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-stone-900 tracking-tighter uppercase">
            Personalizzazione <br /> 
            <span className="text-[#C5B08B] italic font-serif lowercase text-5xl md:text-7xl">senza limiti</span>
          </h1>
        </div>

        {/* CONTENIDO: Narrativa con tipografía equilibrada */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 p-10 md:p-16 rounded-[3rem] border border-stone-100 shadow-sm relative">
            
            <div className="space-y-10">
              <h2 className="text-[10px] font-black text-[#C5B08B] uppercase tracking-[0.3em] border-b border-stone-200 pb-3 inline-block">
                Il nostro approccio
              </h2>
              
              <div className="space-y-8">
                {/* Texto principal: Ahora es elegante, no gigante */}
                <p className="text-stone-900 text-xl md:text-2xl font-bold leading-tight tracking-tight uppercase">
                  {ABOUT_TEXT}
                </p>
                
                {/* Texto secundario: Estilo moderno y liviano */}
                <p className="text-stone-500 text-base md:text-lg font-light leading-relaxed border-t border-stone-200 pt-8">
                  In un mercato saturo di prodotti generici, <strong className="font-semibold text-stone-800">Deostampa</strong> si distingue per la precisione tecnica e la visione creativa. Non ci limitiamo a stampare: analizziamo ogni supporto per garantire che il tuo messaggio sia nitido, duraturo e d'impatto. Dalla singola tazza alla fornitura aziendale, ogni progetto riceve la nostra massima competenza tecnologica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN TÉCNICA: Limpia y profesional */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { t: "Precisione Digitale", d: "Tecnologie avanzate per riprodurre fedelmente ogni design su qualsiasi superficie." },
            { t: "Supporti Vari", d: "Dalla ceramica ai tessuti. Se si può sognare, si può stampare." },
            { t: "Soluzioni su Misura", d: "Qualità assoluta garantita per pezzi unici o forniture aziendali." }
          ].map((item, i) => (
            <div key={i} className="group">
              <h4 className="font-bold uppercase tracking-widest text-[11px] mb-3 text-stone-900 group-hover:text-[#C5B08B] transition-colors">{item.t}</h4>
              <p className="text-[11px] text-stone-400 leading-relaxed uppercase tracking-tighter">{item.d}</p>
              <div className="w-8 h-[1px] bg-stone-200 mt-4 group-hover:w-16 group-hover:bg-[#C5B08B] transition-all"></div>
            </div>
          ))}
        </div>

        {/* CIERRE */}
        <div className="mt-24 text-center">
          <div className="inline-block px-10 py-4 border border-stone-200 text-stone-400 rounded-full text-[9px] font-black uppercase tracking-[0.4em]">
            Professional Printing Solutions
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

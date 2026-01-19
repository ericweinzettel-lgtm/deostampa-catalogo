import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO: Adaptable a móvil */}
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <span className="w-8 md:w-10 h-[2px] bg-[#C5B08B]"></span>
            <span className="text-stone-900 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em]">Deostampa Lab</span>
            <span className="w-8 md:w-10 h-[2px] bg-[#C5B08B]"></span>
          </div>
          <h1 className="text-4xl md:text-7xl font-bold text-stone-900 tracking-tighter uppercase leading-tight">
            Personalizzazione <br /> 
            <span className="text-[#C5B08B] italic font-serif lowercase text-5xl md:text-8xl block md:inline mt-2 md:mt-0">senza limiti</span>
          </h1>
        </div>

        {/* CONTENIDO: Caja con padding fluido */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 p-8 md:p-16 rounded-[2rem] border border-stone-100 shadow-sm relative overflow-hidden">
            
            <div className="relative z-10 space-y-8 md:space-y-10">
              <h2 className="text-[10px] md:text-sm font-black text-[#C5B08B] uppercase tracking-[0.3em] border-b border-stone-200 pb-3 inline-block">
                Il nostro approccio
              </h2>
              
              <div className="space-y-6 md:space-y-8">
                {/* Texto principal: Ajustado para no desbordar en móvil */}
                <p className="text-stone-900 text-xl md:text-3xl font-extrabold leading-tight tracking-tighter uppercase">
                  {ABOUT_TEXT}
                </p>
                
                {/* Texto secundario: Lectura cómoda */}
                <p className="text-stone-500 text-base md:text-xl font-light leading-relaxed border-t border-stone-200 pt-6 md:pt-8">
                  In un mercato saturo di prodotti generici, <strong className="font-bold text-stone-800">Deostampa</strong> si distingue per la precisione tecnica e la visione creativa. Non ci limitiamo a stampare: analizziamo ogni supporto per garantire che il tuo messaggio sia nitido, duraturo e d'impatto. Dalla singola tazza alla fornitura aziendale, ogni progetto riceve la nostra massima competenza tecnologica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN TÉCNICA: De 1 columna en móvil a 3 en PC */}
        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            { 
              title: "Precisione Digitale", 
              desc: "Utilizziamo tecnologie di stampa avanzate per riprodurre fedelmente ogni tuo design su qualsiasi superficie." 
            },
            { 
              title: "Supporti Vari", 
              desc: "Dalla ceramica ai tessuti, dai gadget agli accessori. Se si può sognare, si può stampare." 
            },
            { 
              title: "Soluzioni su Misura", 
              desc: "Non importa se è un pezzo unico o una fornitura aziendale: la qualità resta la nostra priorità assoluta." 
            }
          ].map((item, idx) => (
            <div key={idx} className="p-6 md:p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors bg-white shadow-sm md:shadow-none">
              <h4 className="font-bold uppercase tracking-widest text-xs mb-3 md:mb-4 text-stone-900">{item.title}</h4>
              <p className="text-[11px] md:text-xs text-stone-400 leading-relaxed uppercase tracking-tighter font-medium">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CIERRE: Botón centrado y legible */}
        <div className="mt-20 md:mt-32 text-center">
          <div className="inline-block px-8 md:px-10 py-4 md:py-5 bg-stone-900 text-white rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] shadow-xl hover:bg-stone-800 transition-colors">
            Deostampa — Professional Printing Solutions
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

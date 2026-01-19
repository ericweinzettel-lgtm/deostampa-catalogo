import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO: ENFOQUE EN PERSONALIZACIÓN */}
        <div className="text-center space-y-6 mb-20">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[2px] bg-[#C5B08B]"></span>
            <span className="text-stone-900 text-[10px] font-black uppercase tracking-[0.5em]">Deostampa Lab</span>
            <span className="w-10 h-[2px] bg-[#C5B08B]"></span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-stone-900 tracking-tighter uppercase">
            Personalizzazione <br /> 
            <span className="text-[#C5B08B] italic font-serif lowercase text-6xl md:text-8xl">senza limiti</span>
          </h1>
        </div>

        {/* CONTENIDO: CAJA DE DISEÑO CON TIPOGRAFÍA MODERNA */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 p-10 md:p-16 rounded-[2rem] border border-stone-100 shadow-sm relative overflow-hidden">
            
            <div className="relative z-10 space-y-10">
              <h2 className="text-sm font-black text-[#C5B08B] uppercase tracking-[0.3em] border-b border-stone-200 pb-4 inline-block">
                Il nostro approccio
              </h2>
              
              {/* NARRATIVA: Tipografía más moderna, negrita y llamativa */}
              <div className="space-y-6">
                <p className="text-stone-900 text-2xl md:text-3xl font-extrabold leading-tight tracking-tighter uppercase">
                  {ABOUT_TEXT}
                </p>
                
                <p className="text-stone-500 text-lg md:text-xl font-light leading-relaxed border-t border-stone-200 pt-8">
                  In un mercato saturo di prodotti generici, **Deostampa** si distingue per la precisione tecnica e la visione creativa. Non ci limitiamo a stampare: analizziamo ogni supporto per garantire che il tuo messaggio sia nitido, duraturo e d'impatto. Dalla singola tazza alla fornitura aziendale, ogni progetto riceve la nostra massima competenza tecnologica.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECCIÓN TÉCNICA */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors group">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Precisione Digitale</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-tighter font-medium">Utilizziamo tecnologie di stampa avanzate per riprodurre fedelmente ogni tuo design su qualsiasi superficie.</p>
          </div>
          <div className="p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors group">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Supporti Vari</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-tighter font-medium">Dalla ceramica ai tessuti, dai gadget agli accessori. Se si può sognare, si può stampare.</p>
          </div>
          <div className="p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors group">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Soluzioni su Misura</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-tighter font-medium">Non importa se è un pezzo unico o una fornitura aziendale: la qualità resta la nostra priorità assoluta.</p>
          </div>
        </div>

        {/* CIERRE PROFESIONAL */}
        <div className="mt-32 text-center">
          <div className="inline-block px-10 py-5 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">
            Deostampa — Professional Printing Solutions
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

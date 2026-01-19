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
            <span className="text-[#C5B08B] italic font-serif lowercase">senza limiti</span>
          </h1>
        </div>

        {/* CONTENIDO: TU TEXTO ORIGINAL CON ESTILO DE LABORATORIO DE DISEÑO */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-stone-50 p-10 md:p-16 rounded-[2rem] border border-stone-100 shadow-sm relative overflow-hidden">
            {/* Decoración técnica de fondo */}
            <div className="absolute top-0 right-0 p-8 opacity-5 text-6xl font-black">HD</div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-2xl font-bold text-stone-800 uppercase tracking-tight border-b border-[#C5B08B] pb-4 inline-block">
                Il nostro approccio
              </h2>
              <p className="text-stone-600 text-xl md:text-2xl font-light leading-relaxed">
                {ABOUT_TEXT}
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN TÉCNICA: QUÉ HACEMOS REALMENTE */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors group">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Precisione Digitale</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-tighter">Utilizziamo tecnologie di stampa avanzate per riprodurre fedelmente ogni tuo design su qualsiasi superficie.</p>
          </div>
          <div className="p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors group">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Supporti Vari</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-tighter">Dalla ceramica ai tessuti, dai gadget agli accessori. Se si può sognare, si può stampare.</p>
          </div>
          <div className="p-8 border border-stone-100 rounded-2xl hover:border-[#C5B08B] transition-colors group">
            <h4 className="font-bold uppercase tracking-widest text-sm mb-4">Soluzioni su Misura</h4>
            <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-tighter">Non importa se è un pezzo unico o una fornitura aziendale: la qualità resta la nostra priorità assoluta.</p>
          </div>
        </div>

        {/* CIERRE PROFESIONAL */}
        <div className="mt-32 text-center">
          <div className="inline-block px-8 py-4 bg-stone-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.4em]">
            Deostampa — Professional Printing Solutions
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

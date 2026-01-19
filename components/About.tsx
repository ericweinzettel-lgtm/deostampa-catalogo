import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="bg-[#FCFAF7] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* ENCABEZADO EDITORIAL */}
        <div className="text-center space-y-6 mb-24">
          <div className="flex items-center justify-center gap-3">
            <span className="w-10 h-[1px] bg-[#C5B08B]"></span>
            <span className="text-[#C5B08B] text-[10px] font-black uppercase tracking-[0.5em]">L'Atelier Deostampa</span>
            <span className="w-10 h-[1px] bg-[#C5B08B]"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif text-stone-900 italic tracking-tighter">
            Chi Siamo
          </h1>
        </div>

        {/* CONTENIDO PRINCIPAL: TU TEXTO CON ESTILO */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* LADO IZQUIERDO: EL TEXTO ORIGINAL REFINADO */}
          <div className="space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-stone-800 italic leading-snug">
                Passione per il dettaglio, <br/>cura artigianale.
              </h2>
              {/* Aquí usamos tu ABOUT_TEXT pero con un estilo mucho más aireado */}
              <div className="text-stone-600 text-lg md:text-xl font-serif italic leading-relaxed space-y-6">
                <p>
                  {ABOUT_TEXT}
                </p>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-200">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-stone-400">
                Basati a Reggio Emilia — Operiamo in tutta Italia
              </p>
            </div>
          </div>

          {/* LADO DERECHO: ELEMENTO VISUAL ELEGANTE */}
          <div className="relative order-1 lg:order-2">
            <div className="aspect-[4/5] bg-stone-100 rounded-[4rem] overflow-hidden border-[15px] border-white shadow-2xl relative">
              {/* Capa de diseño decorativa */}
              <div className="absolute inset-0 flex items-center justify-center">
                 <span className="text-[20rem] font-serif italic text-stone-200/50 select-none">D</span>
              </div>
              
              {/* Overlay de calidad */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-full text-center px-10">
                <p className="text-[#C5B08B] text-[10px] font-black uppercase tracking-[0.4em] mb-2">Quality Standard</p>
                <p className="text-stone-900 text-xs font-light uppercase tracking-widest bg-white/80 backdrop-blur-md py-3 rounded-full">
                  Materiali Premium Selezionati
                </p>
              </div>
            </div>
            
            {/* Sello flotante */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-stone-900 rounded-full flex items-center justify-center text-center p-4 shadow-2xl rotate-12">
              <p className="text-white text-[9px] font-black uppercase tracking-tight">
                Fatto a Mano con Amore
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE VALORES INFERIOR */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-16 text-center border-t border-stone-200 pt-20">
          <div className="space-y-4">
            <p className="text-[#C5B08B] text-2xl">01</p>
            <h4 className="font-serif italic text-xl text-stone-800">Unicità</h4>
            <p className="text-xs text-stone-400 uppercase tracking-widest leading-loose">Ogni creazione è un pezzo unico, pensato esclusivamente per te.</p>
          </div>
          <div className="space-y-4">
            <p className="text-[#C5B08B] text-2xl">02</p>
            <h4 className="font-serif italic text-xl text-stone-800">Tecnologia</h4>
            <p className="text-xs text-stone-400 uppercase tracking-widest leading-loose">Utilizziamo le migliori tecnologie di stampa per risultati ultra-nitidi.</p>
          </div>
          <div className="space-y-4">
            <p className="text-[#C5B08B] text-2xl">03</p>
            <h4 className="font-serif italic text-xl text-stone-800">Supporto</h4>
            <p className="text-xs text-stone-400 uppercase tracking-widest leading-loose">Ti seguiamo dalla bozza grafica fino alla consegna a casa tua.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;

import React from 'react';
import { ABOUT_TEXT } from '../constants';

const About = () => {
  return (
    <div className="bg-white min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* TITULO DINÁMICO */}
        <div className="text-center space-y-6 mb-24">
          <div className="flex items-center justify-center gap-4">
            <span className="w-12 h-[2px] bg-[#C5B08B]"></span>
            <span className="text-stone-400 text-[10px] font-black uppercase tracking-[0.6em]">Innovazione & Design</span>
            <span className="w-12 h-[2px] bg-[#C5B08B]"></span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-stone-900 tracking-tighter uppercase leading-none">
            Beyond <br /> 
            <span className="text-[#C5B08B]">Printing.</span>
          </h1>
        </div>

        {/* CONTENIDO EXPANDIDO */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* COLUMNA IZQUIERDA: TU TEXTO ORIGINAL (EN NEGRITA MODERNA) */}
            <div className="lg:col-span-7">
              <p className="text-2xl md:text-3xl font-bold text-stone-900 leading-tight uppercase tracking-tighter border-l-4 border-[#C5B08B] pl-8">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* COLUMNA DERECHA: TEXTO INVENTADO PARA DAR CUERPO */}
            <div className="lg:col-span-5 space-y-6 text-stone-500 font-light leading-relaxed text-lg">
              <p>
                In un mondo dove l'omologazione è la norma, **Deostampa** nasce per rompere gli schemi. Non ci limitiamo a stampare loghi; trasformiamo superfici neutre in messaggi potenti attraverso tecnologie di precisione millimetrica.
              </p>
              <p>
                Dall'abbigliamento tecnico alla ceramica d'avanguardia, ogni materiale viene analizzato e trattato con il processo di stampa più idoneo per garantire colori che non sbiadiscono e dettagli che sfidano lo sguardo. La nostra missione è fornire soluzioni che elevano l'identità dei nostri clienti.
              </p>
            </div>
          </div>
        </div>

        {/* SECCIÓN DE CAPACIDADES TÉCNICAS */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-4">
          {[
            { t: "Versatilità Totale", d: "Sperimentiamo su materiali diversi: tessuti, plastiche, metalli e ceramiche." },
            { t: "Cromia Perfetta", d: "Gestione del colore avanzata per risultati vividi e fedeli all'originale." },
            { t: "Rapidità B2B", d: "Flussi di lavoro ottimizzati per gestire piccoli lotti o grandi forniture." },
            { t: "Design Focus", d: "Ogni file viene revisionato dai nostri esperti prima di andare in produzione." }
          ].map((item, i) => (
            <div key={i} className="bg-stone-50 p-8 rounded-3xl group hover:bg-stone-900 transition-all duration-500">
              <p className="text-[#C5B08B] font-black mb-4 tracking-tighter">0{i+1}</p>
              <h4 className="font-bold uppercase text-xs tracking-widest text-stone-900 group-hover:text-white mb-2">{item.t}</h4>
              <p className="text-[10px] text-stone-400 leading-normal uppercase group-hover:text-stone-300">{item.d}</p>
            </div>
          ))}
        </div>

        {/* BANNER DE CIERRE MODERNO */}
        <div className="mt-32 relative py-20 border-y border-stone-100 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-6xl font-black text-stone-900 uppercase tracking-tighter mb-8">
            Se puoi pensarlo, <br/> <span className="text-stone-300 italic">possiamo stamparlo.</span>
          </h2>
          <button 
            onClick={() => { window.scrollTo(0,0); /* Aquí puedes redirigir a productos */ }}
            className="bg-[#C5B08B] text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.4em] hover:scale-105 transition-transform"
          >
            Esplora le Soluzioni
          </button>
        </div>

      </div>
    </div>
  );
};

export default About;

import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/TU_ID_AQUÍ", { // <--- RECUERDA TU ID
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  const inputStyle = "w-full bg-transparent border-b-2 border-stone-300 py-3 focus:outline-none focus:border-[#C5B08B] transition-all duration-300 text-stone-800 font-light placeholder:text-stone-300";

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6 italic">
      <div className="max-w-7xl mx-auto">
        
        {/* CABECERA */}
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tight italic">
            Contatti
          </h1>
          <div className="w-16 h-[1px] bg-[#C5B08B] mx-auto"></div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.5em] text-stone-400 font-black italic">
            Creiamo insieme il tuo pezzo unico
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          
          {/* INFORMACIÓN */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-serif text-stone-800 italic leading-snug">
                Ogni dettaglio conta. <br/> Raccontaci la tua idea.
              </h2>
              <p className="text-stone-500 font-light leading-relaxed max-w-md text-lg">
                Dalla scelta dei materiali alla bozza finale, ti accompagniamo in ogni fase della creazione.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C5B08B]">Scrivici</p>
                <p className="text-base font-serif text-stone-900">info@deostampa.it</p>
              </div>
              <div className="space-y-3">
                <p className="text-[10px] font-black uppercase tracking-widest text-[#C5B08B]">WhatsApp Business</p>
                <p className="text-base font-serif text-stone-900">+39 342 779 6083</p>
              </div>
            </div>

            <a 
              href="https://wa.me/393427796083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-stone-900 text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C5B08B] hover:shadow-[0_20px_40px_rgba(197,176,139,0.3)] transition-all duration-500 group"
            >
              <span>Consulenza su WhatsApp</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          {/* FORMULARIO MEJORADO */}
          <div className="bg-[#FBF9F6] p-10 md:p-16 rounded-[3rem] shadow-sm border border-stone-100">
            {status === "SUCCESS" ? (
              <div className="flex flex-col items-center justify-center py-20 text-center space-y-6 animate-in fade-in zoom-in">
                <div className="w-20 h-20 bg-[#C5B08B] rounded-full flex items-center justify-center text-white text-3xl shadow-lg">✓</div>
                <h3 className="text-2xl font-serif text-stone-800 italic">Messaggio Inviato!</h3>
                <p className="text-stone-500">Ti risponderemo al più presto.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5B08B]">Nome</label>
                    <input name="name" required type="text" className={inputStyle} placeholder="Il tuo nome" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5B08B]">Email</label>
                    <input name="email" required type="email" className={inputStyle} placeholder="tua@email.it" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5B08B]">Telefono (Opzionale)</label>
                  <input name="phone" type="tel" className={inputStyle} placeholder="+39 000 0000000" />
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-[0.2em] text-[#C5B08B]">Il tuo Progetto</label>
                  <textarea name="message" required rows={4} className={inputStyle} placeholder="Come possiamo aiutarti?" />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-stone-900 text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.4em] hover:bg-black hover:-translate-y-1 transition-all duration-300 shadow-xl active:scale-[0.98]"
                >
                  Invia Richiesta
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

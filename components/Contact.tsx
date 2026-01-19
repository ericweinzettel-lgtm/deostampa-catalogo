
import React, { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState<"IDLE" | "SUCCESS" | "ERROR">("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/TU_ID_AQUÍ", { // <--- PON TU ID AQUÍ
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

  return (
    <div className="min-h-screen bg-white pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TITULO EDITORIAL */}
        <div className="text-center space-y-4 mb-20">
          <h1 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tight italic">
            Contatti
          </h1>
          <div className="w-12 h-[1px] bg-[#C5B08B] mx-auto"></div>
          <p className="text-[10px] md:text-xs uppercase tracking-[0.4em] text-stone-400 font-black">
            Personalizzazione senza confini
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* INFO DE CONTACTO */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-stone-800">Parliamo del tuo progetto</h2>
              <p className="text-stone-500 font-light leading-relaxed max-w-md">
                Che sia un regalo unico o una fornitura aziendale, siamo qui per trasformare la tua idea in realtà.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#C5B08B]">Email Ufficiale</p>
                <p className="text-sm font-bold text-stone-900">info@deostampa.it</p>
              </div>
              <div className="space-y-2">
                <p className="text-[9px] font-black uppercase tracking-widest text-[#C5B08B]">WhatsApp Business</p>
                <p className="text-sm font-bold text-stone-900">+39 342 779 6083</p>
              </div>
            </div>

            <a 
              href="https://wa.me/393427796083"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-6 bg-stone-900 text-white px-12 py-5 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C5B08B] transition-all shadow-xl group"
            >
              <span>Avvia Chat Diretta</span>
              <span className="group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </div>

          {/* FORMULARIO */}
          <div className="bg-[#F9F8F6] p-10 md:p-16 rounded-[3rem] shadow-sm relative overflow-hidden">
            {status === "SUCCESS" ? (
              <div className="flex flex-col items-center justify-center h-full space-y-6 animate-in fade-in zoom-in duration-500 text-center">
                <div className="w-20 h-20 bg-[#C5B08B] rounded-full flex items-center justify-center text-white text-3xl shadow-lg">✓</div>
                <h3 className="text-2xl font-serif text-stone-800">Messaggio Inviato</h3>
                <p className="text-sm text-stone-500 max-w-[250px]">Grazie per averci contattato. Ti risponderemo entro 24 ore.</p>
                <button 
                  onClick={() => setStatus("IDLE")}
                  className="text-[9px] font-black uppercase tracking-widest text-[#C5B08B] border-b border-[#C5B08B] pb-1"
                >
                  Invia un altro messaggio
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Nome</label>
                    <input name="name" required type="text" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#C5B08B] transition-colors font-light" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Email</label>
                    <input name="email" required type="email" className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#C5B08B] transition-colors font-light" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest text-stone-400">Messaggio</label>
                  <textarea name="message" required rows={4} className="w-full bg-transparent border-b border-stone-200 py-3 focus:outline-none focus:border-[#C5B08B] transition-colors font-light resize-none" />
                </div>

                <button 
                  type="submit"
                  className="w-full bg-stone-900 text-white py-6 rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] hover:bg-black transition-all shadow-lg active:scale-[0.98]"
                >
                  Invia Richiesta
                </button>
                {status === "ERROR" && <p className="text-red-500 text-[10px] text-center uppercase font-bold tracking-widest mt-4">Errore nell'invio. Riprova più tardi.</p>}
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;

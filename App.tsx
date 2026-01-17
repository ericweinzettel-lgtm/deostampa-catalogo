
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Page, Product, VisitorInfo } from './types';
import { PRODUCTS, ABOUT_TEXT, PRIVACY_POLICY, TERMS_AND_CONDITIONS, REFUND_POLICY, SHIPPING_POLICY, EBAY_STORE_URL } from './constants';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({ ip: '...', count: 0, lastVisit: '' });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [activeImage, setActiveImage] = useState<string>('');
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  useEffect(() => {
    const storedStats = localStorage.getItem('deostampa_analytics');
    let stats: { count: number; lastVisit: string } = storedStats ? JSON.parse(storedStats) : { count: 0, lastVisit: '' };
    stats.count += 1;
    stats.lastVisit = new Date().toLocaleString();
    localStorage.setItem('deostampa_analytics', JSON.stringify(stats));
    setVisitorInfo({ ip: '192.168.1.1', ...stats });
  }, []);

  const getWhatsAppLink = (productName: string) => {
    const phoneNumber = "393427796083";
    const message = encodeURIComponent(`Ciao! Vorrei personalizzare il prodotto: ${productName}. Come posso procedere?`);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  const renderHome = () => (
    <div className="space-y-24 pb-24">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 bg-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#C5B08B]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-[#C5B08B]/5 rounded-full blur-[150px]"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')] opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl space-y-10 md:space-y-12 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="space-y-4">
              <span className="text-[#C5B08B] font-bold tracking-[0.5em] uppercase text-[10px] md:text-[12px] block mb-4">Artigianalità & Creatività</span>
              <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 leading-[1] tracking-tighter">
                DeoStampa: <br/><span className="italic text-[#C5B08B] font-normal">L'Emozione</span> <br/>
                <span className="font-black">Personalizzata.</span>
              </h1>
            </div>
            
            <p className="text-lg md:text-2xl text-stone-600 leading-relaxed font-light max-w-2xl border-l-4 border-[#C5B08B] pl-8">
              Creazioni uniche realizzate a mano con cura sartoriale. Ogni pezzo racconta una storia, disponibile in esclusiva sulla nostra vetrina ufficiale eBay.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-10">
              <button 
                onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }}
                className="group relative overflow-hidden bg-[#C5B08B] text-white px-10 md:px-14 py-5 rounded-2xl font-bold shadow-xl hover:shadow-[#C5B08B]/30 hover:-translate-y-1 transition-all duration-300 text-base md:text-lg"
              >
                <span className="relative z-10">Esplora Catalogo</span>
                <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </button>
              <a 
                href={EBAY_STORE_URL}
                target="_blank"
                className="group flex items-center space-x-4 px-8 py-5 text-stone-900 font-bold text-base md:text-lg border-2 border-stone-100 rounded-2xl hover:border-[#C5B08B] hover:text-[#C5B08B] transition-all duration-300"
              >
                <span>Vetrina eBay</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-2 transition-transform">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: "Design Unico", desc: "Ogni prodotto viene creato per essere unico e irripetibile.", icon: "🎨" },
          { title: "Qualità Premium", desc: "Utilizziamo solo materiali di altissima scelta per i nostri clienti.", icon: "💎" },
          { title: "Acquisto Sicuro", desc: "Tutte le transazioni sono protette dalla garanzia eBay.", icon: "🛡️" }
        ].map((item, i) => (
          <div key={i} className="group p-10 rounded-[2.5rem] bg-white border border-stone-100 hover:shadow-2xl hover:border-[#C5B08B]/20 transition-all duration-500">
            <span className="text-4xl block mb-6 group-hover:scale-125 transition-transform duration-500">{item.icon}</span>
            <h3 className="font-serif text-2xl font-bold text-stone-900 mb-4">{item.title}</h3>
            <p className="text-stone-500 text-base leading-relaxed font-light">{item.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );

  const renderProducts = () => (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <div className="text-center space-y-4">
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 tracking-tight font-bold">Le Nostre Creazioni</h1>
        <p className="text-stone-400 max-w-2xl mx-auto font-medium text-lg italic">Ogni pezzo è unico, come te.</p>
        <div className="w-24 h-1.5 bg-[#C5B08B] mx-auto rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group bg-white p-6 rounded-[3rem] border border-stone-50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3 flex flex-col">
            <div 
              className="relative aspect-square overflow-hidden rounded-[2.2rem] bg-stone-100 cursor-pointer" 
              onClick={() => { setSelectedProduct(product); setActiveImage(product.image); setCurrentPage(Page.PRODUCT_DETAIL); window.scrollTo(0,0); }}
            >
              <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                 <div className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold shadow-2xl transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 text-xs uppercase tracking-widest">Dettagli</div>
              </div>
            </div>
            <div className="mt-8 space-y-4 flex-1 flex flex-col">
              <div className="flex justify-between items-start">
                <h3 className="font-serif font-bold text-2xl text-stone-900 leading-tight">{product.name}</h3>
                <span className="text-2xl font-serif text-[#C5B08B] font-black">€{product.price.toFixed(2)}</span>
              </div>
              <p className="text-stone-500 text-sm leading-relaxed font-light line-clamp-2">{product.description}</p>
              
              <div className="mt-auto space-y-3 pt-4">
                <a 
                  href={product.ebayUrl}
                  target="_blank"
                  className="block w-full bg-stone-900 text-white text-center py-4 rounded-xl font-bold hover:bg-[#C5B08B] transition-all duration-300 text-[10px] uppercase tracking-[0.2em] shadow-lg active:scale-95"
                >
                  Acquista su eBay
                </a>
                <a 
                  href={getWhatsAppLink(product.name)}
                  target="_blank"
                  className="block w-full bg-white text-[#C5B08B] border border-[#C5B08B] text-center py-4 rounded-xl font-bold hover:bg-[#FAF9F6] transition-all duration-300 text-[10px] uppercase tracking-[0.2em] active:scale-95"
                >
                  Personalizza su WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;

    return (
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 animate-in fade-in slide-in-from-bottom-6 duration-700">
        <button 
          onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }}
          className="flex items-center space-x-3 text-stone-400 hover:text-[#C5B08B] mb-12 transition-colors group"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 group-hover:-translate-x-2 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest">Torna al Catalogo</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl bg-white border-8 border-white">
            <img src={activeImage} alt={selectedProduct.name} className="w-full h-full object-cover" />
          </div>

          <div className="space-y-12 lg:sticky lg:top-32">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-serif text-stone-900 font-bold leading-tight tracking-tight">{selectedProduct.name}</h1>
              <div className="flex items-center space-x-10">
                 <span className="text-4xl md:text-5xl font-serif text-[#C5B08B] font-black">€{selectedProduct.price.toFixed(2)}</span>
                 <span className="text-[10px] bg-stone-900 text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-widest border border-stone-800 shadow-xl">Garanzia eBay</span>
              </div>
            </div>

            <div className="bg-white rounded-[3rem] p-10 md:p-12 shadow-2xl border border-stone-50 space-y-6">
              <p className="text-stone-600 leading-relaxed italic text-lg">
                "Realizziamo la tua idea. Inviaci i dettagli della tua personalizzazione direttamente su WhatsApp o procedi all'acquisto su eBay."
              </p>
              
              <div className="space-y-4">
                <a 
                  href={selectedProduct.ebayUrl}
                  target="_blank"
                  className="w-full bg-stone-900 text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-[#C5B08B] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3 text-lg uppercase tracking-widest"
                >
                  <span>Acquista su eBay</span>
                </a>
                <a 
                  href={getWhatsAppLink(selectedProduct.name)}
                  target="_blank"
                  className="w-full bg-[#C5B08B] text-white py-5 rounded-2xl font-bold shadow-2xl hover:bg-[#A68B6A] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-3 text-lg uppercase tracking-widest"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.63 1.438h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  <span>Personalizza via WhatsApp</span>
                </a>
              </div>
              <p className="text-center text-[10px] text-stone-400 font-bold uppercase tracking-widest">Spedizione Gratuita in Italia</p>
            </div>

            <div className="prose prose-stone max-w-none">
              <h4 className="text-xl font-serif text-stone-900 mb-6 border-l-4 border-[#C5B08B] pl-6 font-bold italic">Dettagli Artigianali</h4>
              <p className="text-stone-600 leading-relaxed text-lg whitespace-pre-line font-light">{selectedProduct.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAbout = () => (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="max-w-4xl mx-auto text-center space-y-12">
        <h1 className="text-6xl md:text-8xl font-serif text-stone-900 font-bold tracking-tighter">Chi Siamo</h1>
        <div className="w-24 h-2 bg-[#C5B08B] mx-auto rounded-full"></div>
        <p className="text-2xl md:text-4xl font-serif italic text-stone-700 leading-relaxed font-light">
          {ABOUT_TEXT}
        </p>
      </div>
    </div>
  );

  const renderCorporate = () => (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-24">
      <div className="text-center space-y-6">
        <span className="text-[#C5B08B] font-bold tracking-[0.4em] uppercase text-xs">Servizi per Aziende</span>
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 font-bold tracking-tight">Vantaggi Business</h1>
        <div className="w-24 h-1.5 bg-[#C5B08B] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div className="space-y-12">
          <div className="bg-white p-12 rounded-[3rem] border border-stone-100 shadow-xl space-y-8">
            <h2 className="text-3xl font-serif font-bold text-stone-900">Perché scegliere DeoStampa?</h2>
            <div className="space-y-6">
              {[
                { t: "Prezzi all'ingrosso", d: "Sconti scalari in base al volume dell'ordine." },
                { t: "Branding Personalizzato", d: "Inseriamo il tuo logo con tecniche laser o digitali HD." },
                { t: "Logistica Dedicata", d: "Spedizioni multiple a vari indirizzi aziendali." },
                { t: "Fatturazione Elettronica", d: "Gestione contabile rapida e conforme alle normative." }
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-5">
                  <span className="bg-[#C5B08B]/10 text-[#C5B08B] p-2 rounded-lg font-bold">✓</span>
                  <div>
                    <h4 className="font-bold text-stone-800 uppercase tracking-wide text-sm">{item.t}</h4>
                    <p className="text-stone-500 text-sm font-light">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-stone-100 shadow-2xl space-y-8">
          <h2 className="text-3xl font-serif font-bold text-stone-900">Richiedi un Preventivo</h2>
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Nome Azienda" className="bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all text-sm font-medium" required />
              <input type="text" placeholder="Referente" className="bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all text-sm font-medium" required />
            </div>
            <input type="email" placeholder="Email Aziendale" className="w-full bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all text-sm font-medium" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" placeholder="Prodotto di interesse" className="bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all text-sm font-medium" required />
              <input type="number" placeholder="Quantità stimata" className="bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all text-sm font-medium" required />
            </div>
            <textarea placeholder="Dettagli del progetto..." rows={4} className="w-full bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all text-sm font-medium" required></textarea>
            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className={`w-full py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 ${
                formStatus === 'success' ? 'bg-green-500 text-white' : 'bg-stone-900 text-white hover:bg-[#C5B08B]'
              }`}
            >
              {formStatus === 'sending' ? 'Invio in corso...' : formStatus === 'success' ? 'Richiesta Inviata!' : 'Invia Richiesta Aziendale'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderContact = () => (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-20">
      <div className="text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif text-stone-900 font-bold tracking-tight">Contattaci</h1>
        <p className="text-stone-400 text-lg italic max-w-2xl mx-auto">Siamo qui per dare vita alle tue idee. Scrivici o chiamaci per qualsiasi dubbio.</p>
        <div className="w-24 h-1.5 bg-[#C5B08B] mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-1 space-y-10">
          <div className="bg-[#FAF9F6] p-10 rounded-[2.5rem] border border-stone-100 shadow-lg space-y-8">
            <h3 className="text-2xl font-serif font-bold text-stone-900">Informazioni</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-5 group cursor-pointer">
                <div className="w-12 h-12 bg-[#C5B08B]/10 rounded-full flex items-center justify-center text-[#C5B08B] group-hover:bg-[#C5B08B] group-hover:text-white transition-all">📧</div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-stone-400">Email</p>
                  <p className="font-bold text-stone-800">info@deostampa.it</p>
                </div>
              </div>
              <div className="flex items-center space-x-5 group cursor-pointer">
                <div className="w-12 h-12 bg-[#C5B08B]/10 rounded-full flex items-center justify-center text-[#C5B08B] group-hover:bg-[#C5B08B] group-hover:text-white transition-all">💬</div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-stone-400">WhatsApp</p>
                  <p className="font-bold text-stone-800">+39 342 7796083</p>
                </div>
              </div>
              <div className="flex items-center space-x-5 group">
                <div className="w-12 h-12 bg-[#C5B08B]/10 rounded-full flex items-center justify-center text-[#C5B08B]">🕒</div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-stone-400">Orari</p>
                  <p className="font-bold text-stone-800">Lun-Ven 09:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 bg-white p-10 md:p-14 rounded-[3.5rem] border border-stone-50 shadow-2xl space-y-10">
          <h2 className="text-3xl font-serif font-bold text-stone-900 italic">Inviaci un Messaggio</h2>
          <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-2">Nome Completo</label>
                <input type="text" className="w-full bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all font-medium" required />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-2">Email</label>
                <input type="email" className="w-full bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all font-medium" required />
              </div>
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-2">Oggetto</label>
                <input type="text" className="w-full bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all font-medium" required />
            </div>
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 ml-2">Messaggio</label>
                <textarea rows={6} className="w-full bg-stone-50 border-none p-5 rounded-2xl outline-none focus:ring-2 focus:ring-[#C5B08B]/20 transition-all font-medium" required></textarea>
            </div>
            <button 
              type="submit" 
              disabled={formStatus !== 'idle'}
              className={`w-full md:w-auto px-16 py-5 rounded-2xl font-bold uppercase tracking-[0.2em] shadow-xl transition-all active:scale-95 ${
                formStatus === 'success' ? 'bg-green-500 text-white' : 'bg-stone-900 text-white hover:bg-[#C5B08B]'
              }`}
            >
              {formStatus === 'sending' ? 'Invio...' : formStatus === 'success' ? 'Inviato con Successo!' : 'Invia Messaggio'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderPolicy = (title: string, text: string) => (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <div className="bg-white rounded-[4rem] shadow-3xl p-12 md:p-20 border border-stone-50">
        <h1 className="text-4xl md:text-6xl font-serif text-stone-900 mb-12 font-bold tracking-tight">{title}</h1>
        <div className="prose prose-stone max-w-none text-stone-600 leading-relaxed whitespace-pre-line text-lg font-light">
          {text}
        </div>
      </div>
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME: return renderHome();
      case Page.PRODUCTS: return renderProducts();
      case Page.PRODUCT_DETAIL: return renderProductDetail();
      case Page.ABOUT: return renderAbout();
      case Page.CORPORATE: return renderCorporate();
      case Page.CONTACT: return renderContact();
      case Page.PRIVACY: return renderPolicy('Privacy Policy', PRIVACY_POLICY);
      case Page.TERMS: return renderPolicy('Termini e Condizioni', TERMS_AND_CONDITIONS);
      case Page.REFUNDS: return renderPolicy('Resi e Rimborsi', REFUND_POLICY);
      case Page.SHIPPING: return renderPolicy('Spedizioni', SHIPPING_POLICY);
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C5B08B]/20 bg-[#FAF9F6]">
      <Navbar 
        currentPage={currentPage} 
        onPageChange={(p) => { setCurrentPage(p); window.scrollTo(0,0); }} 
      />
      <main className="flex-1">
        {renderContent()}
      </main>
      <Footer onPageChange={(p) => setCurrentPage(p)} />
      <WhatsAppButton />
    </div>
  );
};

export default App;
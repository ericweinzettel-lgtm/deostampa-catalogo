import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Page, Product, VisitorInfo } from './types';
import { PRODUCTS, ABOUT_TEXT } from './constants';

// --- IMPORTACIONES DE SWIPER ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({ ip: '...', count: 0, lastVisit: '' });
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    const storedStats = localStorage.getItem('deostampa_analytics');
    let stats = storedStats ? JSON.parse(storedStats) : { count: 0, lastVisit: '' };
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

  // --- COMPONENTES DE DISEÑO ---

  const renderTrustBar = () => (
    <div className="bg-stone-900 py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🚚", text: "Spedizione Gratuita" },
            { icon: "✨", text: "Anteprima Gratuita" },
            { icon: "🛡️", text: "Acquisto Protetto" },
            { icon: "⚡", text: "Esecuzione Rapida" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              <span className="text-xl">{item.icon}</span>
              <span className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderFeatures = () => (
    <section className="bg-white py-24 border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] text-4xl group-hover:text-white">🚀</div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Stampa Ultra-HD</h3>
          <p className="opacity-70 text-sm">Colori vibranti e dettagli microscopici che durano nel tempo.</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] text-4xl group-hover:text-white">⚡</div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Esecuzione Rapida</h3>
          <p className="opacity-70 text-sm">Gestione prioritaria per garantire la consegna in tempi record.</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] text-4xl group-hover:text-white">🎨</div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Design Esclusivo</h3>
          <p className="opacity-70 text-sm">Layout grafici moderni progettati per massimizzare l'impatto.</p>
        </div>
      </div>
    </section>
  );

  const renderBusinessBanner = () => (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-[#C5B08B] rounded-[3rem] p-12 relative overflow-hidden text-white">
        <div className="relative z-10 max-w-xl space-y-4">
          <h2 className="text-4xl font-black uppercase italic tracking-tighter">Soluzioni Business</h2>
          <p className="text-lg">Forniture personalizzate per aziende ed eventi con sconti quantità.</p>
          <a href="https://wa.me/393427796083" target="_blank" className="inline-block bg-stone-900 px-8 py-4 rounded-xl font-bold uppercase text-xs">Richiedi Preventivo B2B</a>
        </div>
        <div className="hidden md:block absolute right-[-5%] bottom-[-10%] text-[15rem] font-black opacity-10 select-none">B2B</div>
      </div>
    </section>
  );

  const renderReviews = () => (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif italic mb-16">Cosa dicono di noi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{name: "Marco R.", text: "Qualità incredibile e spedizione veloce!"}, {name: "Elena V.", text: "Il regalo perfetto, colori nitidi."}, {name: "Giuseppe S.", text: "Professionalità e cortesia al top."}].map((rev, i) => (
            <div key={i} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 italic shadow-sm">
              <div className="text-[#C5B08B] mb-4">★★★★★</div>
              <p className="text-sm text-stone-700">"{rev.text}"</p>
              <p className="mt-4 font-bold text-xs uppercase tracking-widest text-stone-900">— {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContactForm = () => (
    <section className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-2">
          <h2 className="text-4xl font-serif italic text-stone-900">Progetti Speciali</h2>
          <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">Hai un'idea particolare? Creiamola insieme.</p>
        </div>
        <form className="grid grid-cols-1 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input type="text" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-[#C5B08B]" placeholder="Nome" />
            <input type="email" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-[#C5B08B]" placeholder="Email" />
          </div>
          <textarea rows={4} className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-[#C5B08B]" placeholder="Descrivi il tuo progetto..."></textarea>
          <button className="bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-black transition-all shadow-lg">Invia Richiesta</button>
        </form>
      </div>
    </section>
  );

  // --- RENDER DE PÁGINAS ---

const renderHome = () => (
  <div className="flex flex-col bg-white">
    {/* HERO: CHIARO, ELEGANTE E PROFESSIONALE */}
    <section className="relative min-h-[85vh] flex items-center px-6 md:px-16 overflow-hidden bg-[#fafafa]">
      
      {/* Elemento decorativo di sfondo */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-stone-100 -skew-x-12 translate-x-24 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LADO IZQUIERDO: MESSAGGIO DI VALORE */}
        <div className="space-y-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[1px] bg-[#C5B08B]"></span>
              <span className="text-[#C5B08B] text-[10px] font-black uppercase tracking-[0.4em]">Laboratorio di Personalizzazione</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[0.95] tracking-tighter">
              Le tue foto <br />
              <span className="italic font-light text-stone-400 text-5xl md:text-6xl lg:text-7xl block mt-2">diventano realtà</span>
              <span className="font-black uppercase">su ogni oggetto.</span>
            </h1>
            
            <p className="text-stone-500 text-lg max-w-md font-light leading-relaxed">
              Trasformiamo i tuoi ricordi più belli e le tue idee in oggetti unici. Dalle tazze ai calendari, stampiamo con qualità professionale su una vasta gamma di materiali.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <button 
              onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} 
              className="bg-stone-900 text-white px-12 py-5 text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#C5B08B] transition-all duration-500 shadow-xl rounded-sm"
            >
              Scopri il Catalogo
            </button>
            <button 
               onClick={() => { setCurrentPage(Page.CONTACT); window.scrollTo(0,0); }}
               className="text-stone-900 text-[10px] font-black uppercase tracking-[0.3em] border-b border-stone-300 hover:border-stone-900 pb-2 transition-all"
            >
              Richiedi Info
            </button>
          </div>
        </div>

        {/* LADO DERECHO: COMPOSIZIONE VISIVA (Variedad de productos) */}
        <div className="relative">
          <div className="relative z-10 aspect-[4/5] md:aspect-square overflow-hidden rounded-sm shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)] border-[12px] border-white">
            {/* Imagen che evoca artigianalità e qualità */}
            <img 
              src="https://images.unsplash.com/photo-1572044162444-ad60f128bde3?q=80&w=2070&auto=format&fit=crop" 
              alt="Personalizzazione Professionale" 
              className="w-full h-full object-cover"
            />
            {/* Badge informativo */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-md px-6 py-4 shadow-sm border border-stone-50">
              <p className="text-[9px] font-black uppercase tracking-widest text-[#C5B08B]">Qualità di Stampa</p>
              <p className="text-[11px] font-bold text-stone-900 italic">Sublimazione Ultra HD</p>
            </div>
          </div>
          
          {/* Elenco Servizi (Per dare serietà e chiarezza) */}
          <div className="absolute -bottom-6 -right-6 bg-stone-900 text-white p-10 hidden md:block shadow-2xl">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5B08B] mb-6 border-b border-[#C5B08B]/30 pb-2">Cosa Personalizziamo</p>
            <ul className="text-[11px] font-bold uppercase tracking-[0.15em] space-y-3">
              <li className="flex items-center gap-3"><span className="text-[#C5B08B] text-lg">•</span> Tazze & Boccali</li>
              <li className="flex items-center gap-3"><span className="text-[#C5B08B] text-lg">•</span> Abbigliamento</li>
              <li className="flex items-center gap-3"><span className="text-[#C5B08B] text-lg">•</span> Idee Regalo & Gadget</li>
              <li className="flex items-center gap-3"><span className="text-[#C5B08B] text-lg">•</span> Foto & Calendari</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* BARRA DEI SERVIZI (Serietà professionale) */}
    <section className="py-16 bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center md:text-left">
          {[
            { t: "Pezzi Unici", d: "Ordina anche una sola unità" },
            { t: "Anteprima Gratuita", d: "Controlli il design prima di stampare" },
            { t: "Spedizione Rapida", d: "Consegna in tutta Italia in 24/48 ore" },
            { t: "Assistenza Diretta", d: "Parla subito con noi su WhatsApp" }
          ].map((item, i) => (
            <div key={i} className="space-y-2">
              <p className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-900">{item.t}</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-tight leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);
  
  const renderProducts = () => (
  <div className="flex flex-col">
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-[3rem] border border-stone-50 group hover:shadow-xl transition-all">
            {/* Contenedor de Imagen con Swiper */}
            <div className="relative aspect-square overflow-hidden rounded-[2.2rem] bg-stone-100 cursor-pointer">
              
              {/* Etiqueta Premium Calidad */}
              <div className="absolute top-4 left-4 z-20 bg-stone-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg shadow-xl border border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5B08B] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5B08B]"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Premium Quality</span>
                </div>
              </div>

              {/* Carrusel Swiper */}
              <Swiper
                modules={[Autoplay, Pagination]}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full h-full"
              >
                {(product.images || [product.image]).map((img, idx) => (
                  <SwiperSlide key={idx} onClick={() => { setSelectedProduct(product); setCurrentPage(Page.PRODUCT_DETAIL); window.scrollTo(0,0); }}>
                    <img 
                      src={`/${img}`} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

            {/* Info del Producto */}
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-stone-900 uppercase tracking-tighter">{product.name}</h3>
                <p className="text-[#C5B08B] font-black text-lg">€{product.price.toFixed(2)}</p>
              </div>
              <button 
                onClick={() => { setSelectedProduct(product); setCurrentPage(Page.PRODUCT_DETAIL); window.scrollTo(0,0); }}
                className="bg-stone-50 p-3 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    {renderContactForm()}
  </div>
);

  const renderProductDetail = () => {
  if (!selectedProduct) return null;
  const allImages = selectedProduct.images || [selectedProduct.image];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 animate-in fade-in duration-500">
      <button 
        onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} 
        className="flex items-center space-x-3 text-stone-400 hover:text-[#C5B08B] mb-12 transition-colors uppercase text-xs font-bold tracking-widest"
      >
        <span>← Torna al Catalogo</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* LADO IZQUIERDO: CARRUSEL DE DETALLE */}
        <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl bg-white border-8 border-white cursor-zoom-in relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            className="w-full h-full mySwiper"
          >
            {allImages.map((img, index) => (
              <SwiperSlide key={index} onClick={() => setZoomedImage(`/${img}`)}>
                <img 
                  src={`/${img}`} 
                  alt={`${selectedProduct.name} ${index}`} 
                  className="w-full h-full object-cover" 
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* LADO DERECHO: INFORMACIÓN Y BOTONES */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-serif text-stone-900 font-bold leading-tight">
              {selectedProduct.name}
            </h1>
            <div className="h-1 w-20 bg-[#C5B08B]"></div>
          </div>

          <div className="bg-white rounded-[3rem] p-10 shadow-xl border border-stone-50 space-y-8">
            <span className="text-6xl font-serif text-[#C5B08B] font-black block">
              €{selectedProduct.price.toFixed(2)}
            </span>
            
            <div className="space-y-4">
              <a 
                href={selectedProduct.ebayUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-stone-900 text-white py-6 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transition-all hover:bg-black hover:shadow-2xl active:scale-95 w-full"
              >
                <span>Acquista su eBay Store</span>
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>

              <a 
                href={getWhatsAppLink(selectedProduct.name)} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border-2 border-[#C5B08B] text-[#C5B08B] py-6 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] transition-all hover:bg-[#C5B08B] hover:text-white active:scale-95 w-full"
              >
                <span>Personalizza via WhatsApp</span>
              </a>
              
              <div className="pt-6 flex items-center justify-center gap-8 border-t border-stone-100">
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Spedizione</p>
                  <p className="text-xs font-bold text-stone-900">Rapida</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Anteprima</p>
                  <p className="text-xs font-bold text-stone-900">Gratuita</p>
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-black uppercase tracking-widest text-stone-400">Qualità</p>
                  <p className="text-xs font-bold text-stone-900">Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

  const renderContactPage = () => (
    <div className="animate-fade-in">
      <section className="bg-white py-24 text-center border-b border-stone-100">
        <h1 className="text-6xl font-serif italic text-stone-900 tracking-tighter">Contattaci</h1>
        <p className="text-stone-400 uppercase tracking-[0.3em] text-xs mt-6 font-bold">Siamo qui per dare vita alle tue idee</p>
      </section>
      {renderContactForm()}
    </div>
  );

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME: return renderHome();
      case Page.PRODUCTS: return renderProducts();
      case Page.PRODUCT_DETAIL: return renderProductDetail();
      case Page.ABOUT: return (
        <div className="max-w-4xl mx-auto px-6 py-32 text-center">
          <h1 className="text-6xl font-serif mb-16 italic text-stone-900">Chi Siamo</h1>
          <p className="text-2xl font-serif italic text-stone-700 leading-relaxed">{ABOUT_TEXT}</p>
        </div>
      );
      case Page.CONTACT: return renderContactPage();
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-stone-900 selection:bg-[#C5B08B] selection:text-white">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} Page={Page} />
      <main className="pt-20">
        {renderContent()}
      </main>
      <Footer setCurrentPage={setCurrentPage} Page={Page} />
      <WhatsAppButton />
      
      {/* Modal de Zoom */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out" onClick={() => setZoomedImage(null)}>
          <img src={zoomedImage} className="max-w-full max-h-full object-contain animate-in zoom-in-95" alt="Zoom" />
          <button className="absolute top-10 right-10 text-white text-5xl">&times;</button>
        </div>
      )}
    </div>
  );
};

export default App;

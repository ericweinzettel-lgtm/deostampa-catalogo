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
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 bg-white">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 leading-[0.9] tracking-tighter"> 
              DeoStampa: <br/>
              <span className="italic text-[#C5B08B] font-normal tracking-tight">L'Emozione</span> <br/>
              <span className="font-black uppercase">Personalizzata.</span>
            </h1>
            <p className="text-xl text-stone-500 max-w-xl border-l-4 border-[#C5B08B] pl-6">Qualità di stampa superiore per i tuoi momenti indimenticabili.</p>
            <button onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} className="bg-[#C5B08B] text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform">
              Esplora Catalogo
            </button>
          </div>
        </div>
      </section>
      {renderTrustBar()}
      {renderFeatures()}
      {renderBusinessBanner()}
      {renderReviews()}
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
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <button onClick={() => setCurrentPage(Page.PRODUCTS)} className="flex items-center gap-2 text-stone-400 hover:text-stone-900 mb-12 transition-colors uppercase text-xs font-bold tracking-widest">
          ← Torna al Catalogo
        </button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-2xl cursor-zoom-in border border-stone-100" onClick={() => setZoomedImage(`/${selectedProduct.image}`)}>
            <img src={`/${selectedProduct.image}`} alt={selectedProduct.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8 py-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-stone-900">{selectedProduct.name}</h1>
            <p className="text-5xl text-[#C5B08B] font-black italic">€{selectedProduct.price.toFixed(2)}</p>
            <div className="flex flex-col gap-4 pt-8">
              <a href={selectedProduct.ebayUrl} target="_blank" rel="noopener noreferrer" className="bg-stone-900 text-white py-5 rounded-2xl text-center font-bold uppercase text-xs tracking-[0.2em] hover:bg-black transition-all">
                Acquista su eBay Official Store
              </a>
              <a href={getWhatsAppLink(selectedProduct.name)} target="_blank" rel="noopener noreferrer" className="border-2 border-[#C5B08B] text-[#C5B08B] py-5 rounded-2xl text-center font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#C5B08B] hover:text-white transition-all">
                Personalizza via WhatsApp
              </a>
              <p className="text-[10px] text-stone-400 text-center uppercase tracking-widest mt-2">Anteprima gratuita inclusa</p>
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

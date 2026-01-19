import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Page, Product, VisitorInfo } from './types';
import { PRODUCTS, ABOUT_TEXT } from './constants';
import Contact from './components/Contact';
import About from './components/About';

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


  // --- RENDER DE PÁGINAS ---

const renderHome = () => (
  <div className="flex flex-col bg-white">
    {/* HERO SECTION - REFINADA Y LUMINOSA */}
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 py-20 overflow-hidden bg-[#FCFAF7]">
      
      {/* Decoración de fondo minimalista */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -skew-x-12 translate-x-24"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* TEXTO PRINCIPALE */}
          <div className="space-y-12 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="w-10 h-[1px] bg-[#C5B08B]"></span>
                <span className="text-[#C5B08B] text-[10px] font-black uppercase tracking-[0.5em]">Atelier di Stampa</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-stone-900 leading-[1.1] tracking-tighter">
                L'emozione di <br />
                <span className="italic font-light text-stone-400">creare qualcosa</span> <br />
                <span className="font-black uppercase text-stone-800">di unico.</span>
              </h1>
              
              <p className="text-stone-500 text-base md:text-lg max-w-md mx-auto lg:mx-0 font-light leading-relaxed">
                Trasformiamo i tuoi ricordi in oggetti d'arte quotidiana. Qualità artigianale e precisione tecnologica su ogni materiale.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start pt-4">
              <button 
                onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} 
                className="group relative inline-flex items-center justify-center px-16 py-6 overflow-hidden border border-stone-900 bg-transparent transition-all duration-500 hover:text-white"
              >
                {/* Efecto de llenado elegante al hacer hover */}
                <div className="absolute inset-0 w-0 bg-stone-900 transition-all duration-500 ease-out group-hover:w-full"></div>
                <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.4em]">Vai al Catalogo</span>
              </button>
            </div>
          </div>

          {/* BOX COSA FACCIAMO - ESTETICA "SAND & GOLD" (Sin Negro) */}
          <div className="relative">
            <div className="bg-white p-4 shadow-[0_40px_100px_-20px_rgba(197,176,139,0.2)] rounded-sm border border-stone-100">
              {/* Fondo color crema/arena suave */}
              <div className="bg-[#F4F1EC] p-10 md:p-16 relative overflow-hidden border border-[#C5B08B]/20">
                
                <p className="text-[#C5B08B] text-[10px] font-black uppercase tracking-[0.4em] mb-12 border-b border-[#C5B08B]/20 pb-6 text-center lg:text-left">
                  Cosa Personalizziamo
                </p>
                
                <ul className="space-y-10">
                  {[
                    { t: "Tazze & Boccali", d: "Collezioni in ceramica e vetro satinato" },
                    { t: "Abbigliamento", d: "Tessuti selezionati e stampa morbida" },
                    { t: "Foto & Calendari", d: "Ricordi stampati in alta definizione" },
                    { t: "Idee Regalo", d: "Gadget esclusivi curati nei dettagli" }
                  ].map((item, i) => (
                    <li key={i} className="group cursor-default flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                      <div>
                        <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-stone-800 group-hover:text-[#C5B08B] transition-colors">
                          {item.t}
                        </p>
                        <p className="text-[9px] text-stone-400 uppercase tracking-widest mt-1">
                          {item.d}
                        </p>
                      </div>
                      <span className="hidden lg:block text-[#C5B08B] opacity-0 group-hover:opacity-100 transition-all transform translate-x-[-10px] group-hover:translate-x-0">
                        →
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Sello de autenticidad sutil */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl border border-stone-50 hidden md:block">
              <p className="text-[24px] font-serif italic text-[#C5B08B]">100%</p>
              <p className="text-[8px] font-black uppercase tracking-tighter text-stone-400">Qualità Garantita</p>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* BARRA DEI SERVIZI - MINIMALISMO TOTAL */}
    <section className="py-24 bg-white border-y border-stone-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-20 text-center lg:text-left">
          {[
            { t: "Pezzi Unici", d: "Diamo valore anche al singolo ordine" },
            { t: "Design Preview", d: "Revisione grafica prima della stampa" },
            { t: "Logistica", d: "Spedizioni rapide e imballi sicuri" },
            { t: "Su Misura", d: "Soluzioni per privati e aziende" }
          ].map((item, i) => (
            <div key={i} className="space-y-4 group">
              <p className="text-[11px] font-black uppercase tracking-[0.3em] text-stone-900 group-hover:text-[#C5B08B] transition-colors">
                {item.t}
              </p>
              <div className="w-6 h-[1px] bg-stone-200 mx-auto lg:mx-0 group-hover:w-12 group-hover:bg-[#C5B08B] transition-all"></div>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest leading-loose">
                {item.d}
              </p>
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

  const renderContent = () => {
    switch (currentPage) {
      case Page.HOME: return renderHome();
      case Page.PRODUCTS: return renderProducts();
      case Page.PRODUCT_DETAIL: return renderProductDetail();
      case Page.ABOUT: return <About />;
      case Page.CONTACT: return <Contact />;
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

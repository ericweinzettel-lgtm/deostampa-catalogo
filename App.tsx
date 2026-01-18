import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Page, Product, VisitorInfo } from './types';
import { PRODUCTS, ABOUT_TEXT, PRIVACY_POLICY, TERMS_AND_CONDITIONS, REFUND_POLICY, SHIPPING_POLICY, EBAY_STORE_URL } from './constants';

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
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null); // Estado para el Zoom

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  // --- COMPONENTE DE ZOOM (MODAL) ---
  const ImageZoomModal = () => {
    if (!zoomedImage) return null;
    return (
      <div 
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        onClick={() => setZoomedImage(null)}
      >
        <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        <img 
          src={zoomedImage} 
          className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" 
          alt="Zoom" 
        />
      </div>
    );
  };

  const renderHome = () => (
  <div className="flex flex-col pb-24">
    <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 bg-white">
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#C5B08B]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-[#C5B08B]/5 rounded-full blur-[150px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 leading-[0.9] tracking-tighter hero-title-shadow"> 
            DeoStampa: <br/>
            <span className="italic text-[#C5B08B] font-normal tracking-tight">L'Emozione</span> <br/>
            <span className="font-black uppercase">Personalizzata.</span>
          </h1>
          <p className="text-lg md:text-2xl text-stone-600 border-l-4 border-[#C5B08B] pl-8 max-w-2xl">
            La nostra tecnologia al servizio delle tue emozioni. Design esclusivi e qualità di stampa superiore.
          </p>
          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} 
              className="bg-[#C5B08B] text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform"
            >
              Esplora Catalogo
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Sección de Confianza (Barra Negra) */}
    {renderTrustBar()}

    {/* Sección de Tecnología (Features) */}
    {renderFeatures()}

    {/* Sección para Empresas (B2B) */}
    {renderBusinessBanner()}

    {/* Sección de Testimonios (Reseñas) */}
    {renderReviews()}
  </div>
);

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
            <span className="text-[10px] text-stone-400 uppercase tracking-[0.2em] font-bold">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

  const renderContactForm = () => (
  <section className="py-24 bg-stone-50">
    <div className="max-w-3xl mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-4xl font-serif italic text-stone-900">Progetti Speciali</h2>
        <p className="text-stone-500 uppercase tracking-[0.2em] text-xs font-bold">Hai un'idea particolare? Creiamola insieme.</p>
      </div>
      
      <form className="grid grid-cols-1 gap-8" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-2">Nome</label>
            <input type="text" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-[#C5B08B] transition-colors text-stone-900" placeholder="Il tuo nome" />
          </div>
          <div className="space-y-2 text-left">
            <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-2">Email</label>
            <input type="email" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-[#C5B08B] transition-colors text-stone-900" placeholder="la-tua@email.com" />
          </div>
        </div>
        <div className="space-y-2 text-left">
          <label className="text-[10px] uppercase tracking-widest font-bold text-stone-400 ml-2">Messaggio / Idea</label>
          <textarea rows={4} className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:outline-none focus:border-[#C5B08B] transition-colors text-stone-900 resize-none" placeholder="Descrivi il tuo progetto personalizzato..."></textarea>
        </div>
        <button className="bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase text-xs tracking-[0.2em] hover:bg-black transition-all shadow-xl">
          Invia Richiesta
        </button>
      </form>
    </div>
  </section>
);
  const renderFeatures = () => (
  <section className="bg-white py-24 border-y border-stone-100">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Tarjeta 1 */}
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04a11.352 11.352 0 00-1.23 6.257c0 4.423 2.522 8.243 6.236 10.122a11.954 11.954 0 007.382 0c3.714-1.879 6.236-5.599 6.236-10.122a11.352 11.352 0 00-1.23-6.257z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Stampa Ultra-HD</h3>
          <p className="opacity-70 leading-relaxed text-sm">Tecnologie di sublimazione avanzate per colori vibranti e dettagli microscopici che durano nel tempo.</p>
        </div>

        {/* Tarjeta 2 */}
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Esecuzione Rapida</h3>
          <p className="opacity-70 leading-relaxed text-sm">Produzione ottimizzata e gestione prioritaria per garantire la consegna in tempi record.</p>
        </div>

        {/* Tarjeta 3 */}
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] group-hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-7.714 2.143L11 21l-2.286-6.857L1 12l7.714-2.143L11 3z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Design Esclusivo</h3>
          <p className="opacity-70 leading-relaxed text-sm">Layout grafici moderni progettati per massimizzare l'impatto visivo di ogni prodotto.</p>
        </div>
      </div>
    </div>
  </section>
);

  const renderBusinessBanner = () => (
  <section className="max-w-7xl mx-auto px-6 py-20">
    <div className="bg-[#C5B08B] rounded-[3rem] p-12 relative overflow-hidden group">
      <div className="relative z-10 md:flex items-center justify-between">
        <div className="max-w-xl space-y-4 text-left">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">Soluzioni Business</h2>
          <p className="text-white/90 text-lg leading-relaxed">
            Realizziamo forniture personalizzate per aziende, eventi e attività commerciali con sconti per quantità e gestione prioritaria.
          </p>
          <a 
            href="https://wa.me/393331234567?text=Vorrei%20informazioni%20per%20un%20ordine%20aziendale" 
            target="_blank"
            className="inline-block bg-stone-900 text-white px-8 py-4 rounded-xl font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform"
          >
            Richiedi preventivo B2B
          </a>
        </div>
        <div className="hidden md:block text-white/10 text-[12rem] font-black absolute -right-10 -bottom-10 select-none">
          B2B
        </div>
      </div>
    </div>
  </section>
);

const renderReviews = () => (
  <section className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-center text-3xl font-serif italic mb-16 text-stone-900 tracking-tighter">Cosa dicono di noi</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { name: "Marco R.", text: "Qualità di stampa incredibile e spedizione rapidissima. Cinque stelle!", city: "Milano" },
          { name: "Elena V.", text: "Il regalo perfetto. La nitidezza dei colori è superiore a qualsiasi altra stampa vista prima.", city: "Roma" },
          { name: "Giuseppe S.", text: "Professionalità e cortesia. Hanno curato il design nei minimi dettagli. Consigliatissimo.", city: "Napoli" }
        ].map((rev, i) => (
          <div key={i} className="text-left space-y-4 p-8 rounded-3xl bg-stone-50 border border-stone-100 shadow-sm transition-transform hover:-translate-y-2 duration-300">
            <div className="flex text-[#C5B08B]">{"★".repeat(5)}</div>
            <p className="text-stone-700 leading-relaxed italic text-sm">"{rev.text}"</p>
            <div className="pt-4 border-t border-stone-200">
              <p className="font-bold text-xs uppercase tracking-widest text-stone-900">{rev.name}</p>
              <p className="text-[10px] text-stone-400 uppercase tracking-widest">{rev.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
  const renderProducts = () => (
  <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
      {PRODUCTS.map((product, index) => (
        <div 
          key={product.id} 
          className="product-card group bg-white p-6 rounded-[3rem] border border-stone-50 animate-fade-in-up"
          style={{ animationDelay: `${index * 0.1}s` }} // Efecto cascada
        >
          <div className="relative aspect-square overflow-hidden rounded-[2.2rem] bg-stone-100 cursor-pointer">
            {/* SUSTITUYE LA ETIQUETA ANTERIOR POR ESTA VERSIÓN PREMIUM */}
<div className="absolute top-4 left-4 z-20 bg-stone-900/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg shadow-xl border border-white/10">
  <div className="flex items-center space-x-2">
    {/* Punto parpadeante tecnológico */}
    <span className="relative flex h-2 w-2">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5B08B] opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5B08B]"></span>
    </span>
    {/* Texto de calidad */}
    <span className="text-[10px] font-black uppercase tracking-[0.2em]">Premium Quality</span>
  </div>
</div>

            <Swiper
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {(product.images || [product.image]).map((img, idx) => (
                <SwiperSlide key={idx} onClick={() => { setSelectedProduct(product); setCurrentPage(Page.PRODUCT_DETAIL); window.scrollTo(0,0); }}>
                  <img src={`/${img}`} alt={product.name} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* ... resto del contenido igual ... */}
        </div>
      ))}
    </div>
    {renderContactForm()}
  </div>
);

  const renderProductDetail = () => {
    if (!selectedProduct) return null;
    const allImages = selectedProduct.images || [selectedProduct.image];

    return (
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-24">
        <button onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} className="flex items-center space-x-3 text-stone-400 hover:text-[#C5B08B] mb-12 transition-colors">
          <span>← Torna al Catalogo</span>
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="aspect-square rounded-[3.5rem] overflow-hidden shadow-2xl bg-white border-8 border-white cursor-zoom-in">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              className="w-full h-full"
            >
              {allImages.map((img, index) => (
                <SwiperSlide key={index} onClick={() => setZoomedImage(`/${img}`)}>
                  <img src={`/${img}`} alt={`${selectedProduct.name} ${index}`} className="w-full h-full object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="space-y-12">
            <h1 className="text-5xl md:text-6xl font-serif text-stone-900 font-bold">{selectedProduct.name}</h1>
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl space-y-8">
              <span className="text-5xl font-serif text-[#C5B08B] font-black block">€{selectedProduct.price.toFixed(2)}</span>
              <div className="space-y-4">
 {/* --- COPIA DESDE AQUÍ --- */}
<div className="flex flex-col gap-4 mt-8">
  {/* Opción eBay: Confiable y oficial */}
  <a 
    href={selectedProduct.ebayUrl} 
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative flex items-center justify-center gap-3 bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-black hover:shadow-lg active:scale-95"
  >
    <span>Acquista su eBay Store</span>
    <span className="transition-transform group-hover:translate-x-1">→</span>
  </a>

  {/* Opción WhatsApp: Personalización y lujo */}
  <a 
    href={getWhatsAppLink(selectedProduct.name)} 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-3 border-2 border-[#C5B08B] text-[#C5B08B] py-5 rounded-2xl font-bold uppercase text-[11px] tracking-[0.2em] transition-all hover:bg-[#C5B08B] hover:text-white active:scale-95"
  >
    <span>Personalizza via WhatsApp</span>
  </a>
  
  <p className="text-[10px] text-stone-400 text-center uppercase tracking-[0.15em] mt-4 font-medium">
    Servizio Clienti Attivo • Anteprime Digitali Gratuite
  </p>
</div>
{/* --- HASTA AQUÍ --- */}
        </div>
      </div>
    );
  };

  const renderContent = () => {
  switch (currentPage) {
    case Page.HOME: return renderHome();
    case Page.PRODUCTS: return renderProducts();
    case Page.PRODUCT_DETAIL: return renderProductDetail();
    case Page.ABOUT: return (
      <div className="max-w-4xl mx-auto px-6 py-24 text-center animate-fade-in-up">
        <h1 className="text-6xl font-serif mb-12">Chi Siamo</h1>
        <p className="text-2xl font-serif italic text-stone-700 leading-relaxed">{ABOUT_TEXT}</p>
      </div>
    );
    // ESTA ES LA LÍNEA QUE ESTAMOS AGREGANDO:
    case Page.CONTACT: return renderContactPage(); 
    
    default: return renderHome();
  }
};

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <ImageZoomModal />
      <Navbar currentPage={currentPage} onPageChange={(p) => { setCurrentPage(p); window.scrollTo(0,0); }} />
      <main key={currentPage} className="flex-1 animate-fade-in-up">
  {renderContent()}
</main>
      <Footer onPageChange={(p) => { setCurrentPage(p); window.scrollTo(0,0); }} />
      <WhatsAppButton />
    </div>
  );
};

            const renderContactPage = () => (
  <div className="animate-fade-in-up">
    {/* Cabecera elegante para la página de contacto */}
    <section className="bg-white py-20 border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif italic text-stone-900 tracking-tighter hero-title-shadow">
          Contattaci
        </h1>
        <p className="mt-6 text-stone-500 uppercase tracking-[0.3em] text-xs font-bold">
          Siamo qui per dare vita alle tue idee
        </p>
      </div>
    </section>

    {/* Información de contacto directo (Opcional pero recomendado) */}
    <section className="py-12 bg-white">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
        <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100">
          <span className="text-2xl mb-4 block">💬</span>
          <h3 className="font-bold uppercase text-[10px] tracking-widest text-stone-400 mb-2">WhatsApp Diretto</h3>
          <p className="text-stone-900 font-bold italic">Risposta rapida per anteprime</p>
        </div>
        <div className="p-8 rounded-3xl bg-stone-50 border border-stone-100">
          <span className="text-2xl mb-4 block">📦</span>
          <h3 className="font-bold uppercase text-[10px] tracking-widest text-stone-400 mb-2">Ordini eBay</h3>
          <p className="text-stone-900 font-bold italic">Assistenza acquisti e spedizioni</p>
        </div>
      </div>
    </section>

    {/* EL FORMULARIO */}
    {renderContactForm()}
  </div>
);
export default App;

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

  // --- COMPONENTES AUXILIARES ---
  const ImageZoomModal = () => {
    if (!zoomedImage) return null;
    return (
      <div 
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
        onClick={() => setZoomedImage(null)}
      >
        <button className="absolute top-6 right-6 text-white text-4xl">&times;</button>
        <img src={zoomedImage} className="max-w-full max-h-full object-contain animate-in zoom-in-95 duration-300" alt="Zoom" />
      </div>
    );
  };

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
          <div className="mb-6 text-[#C5B08B] group-hover:text-white">🚀</div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Stampa Ultra-HD</h3>
          <p className="opacity-70 text-sm">Colori vibranti e dettagli microscopici che durano nel tempo.</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] group-hover:text-white">⚡</div>
          <h3 className="text-xl font-bold mb-4 uppercase tracking-tighter">Esecuzione Rapida</h3>
          <p className="opacity-70 text-sm">Gestione prioritaria per garantire la consegna in tempi record.</p>
        </div>
        <div className="p-10 rounded-[2rem] bg-stone-50 hover:bg-stone-900 hover:text-white transition-all duration-500 group">
          <div className="mb-6 text-[#C5B08B] group-hover:text-white">🎨</div>
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
          <a href="https://wa.me/393427796083" target="_blank" className="inline-block bg-stone-900 px-8 py-4 rounded-xl font-bold uppercase text-xs">Richiedi B2B</a>
        </div>
      </div>
    </section>
  );

  const renderReviews = () => (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif italic mb-16">Cosa dicono di noi</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{name: "Marco R.", text: "Qualità incredibile!"}, {name: "Elena V.", text: "Regalo perfetto."}, {name: "Giuseppe S.", text: "Professionali."}].map((rev, i) => (
            <div key={i} className="p-8 rounded-3xl bg-stone-50 border border-stone-100 italic">
              <p className="text-sm text-stone-700">"{rev.text}"</p>
              <p className="mt-4 font-bold text-xs uppercase tracking-widest">— {rev.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderContactForm = () => (
    <section className="py-24 bg-stone-50">
      <div className="max-w-3xl mx-auto px-6 text-center space-y-8">
        <h2 className="text-4xl font-serif italic text-stone-900">Progetti Speciali</h2>
        <form className="grid grid-cols-1 gap-6 text-left" onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="w-full bg-white border p-4 rounded-xl" placeholder="Nome" />
          <input type="email" className="w-full bg-white border p-4 rounded-xl" placeholder="Email" />
          <textarea rows={4} className="w-full bg-white border p-4 rounded-xl" placeholder="La tua idea..."></textarea>
          <button className="bg-stone-900 text-white py-5 rounded-2xl font-bold uppercase text-xs tracking-widest">Invia Richiesta</button>
        </form>
      </div>
    </section>
  );

  // --- PÁGINAS ---
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
            <button onClick={() => setCurrentPage(Page.PRODUCTS)} className="bg-[#C5B08B] text-white px-10 py-5 rounded-2xl font-bold shadow-xl">Esplora Catalogo</button>
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
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map((product) => (
          <div key={product.id} className="bg-white p-6 rounded-[3rem] border border-stone-50 group">
            <div className="relative aspect-square overflow-hidden rounded-[2.2rem] bg-stone-100 cursor-pointer" onClick={() => { setSelectedProduct(product); setCurrentPage(Page.PRODUCT_DETAIL); window.scrollTo(0,0); }}>
              <img src={`/${product.image}`} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <h3 className="mt-6 text-xl font-bold text-stone-900 uppercase tracking-tighter">{product.name}</h3>
            <p className="text-[#C5B08B] font-black">€{product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
      {renderContactForm()}
    </div>
  );

  const renderProductDetail = () => {
    if (!selectedProduct) return null;
    return (
      <div className="max-w-7xl mx-auto px-6 py-24">
        <button onClick={() => setCurrentPage(Page.PRODUCTS)} className="text-stone-400 mb-12">← Torna al Catalogo</button>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="aspect-square rounded-[3rem] overflow-hidden bg-white shadow-xl cursor-zoom-in" onClick={() => setZoomedImage(`/${selectedProduct.image}`)}>
            <img src={`/${selectedProduct.image}`} alt={selectedProduct.name} className="w-full h-full object-cover" />
          </div>
          <div className="space-y-8">
            <h1 className="text-5xl font-serif font-bold">{selectedProduct.name}</h1>
            <p className="text-4xl text-[#C5B08B] font-black">€{selectedProduct.price.toFixed(2)}</p>
            <div className="flex flex-col gap-4">
              <a href={selectedProduct.ebayUrl} target="_blank" className="bg-stone-900 text-white py-5 rounded-2xl text-center font-bold uppercase text-xs tracking-widest">Acquista su eBay</a>
              <a href={getWhatsAppLink(selectedProduct.name)} target="_blank" className="border-2 border-[#C5B08B] text-[#C5B08B] py-5 rounded-2xl text-center font-bold uppercase text-xs tracking-widest">Personalizza via WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderContactPage = () => (
    <div className="animate-fade-in">
      <section className="bg-white py-20 text-center border-b border-stone-100">
        <h1 className="text-5xl font-serif italic text-stone-900">Contattaci</h1>
        <p className="text-stone-400 uppercase tracking-widest text-xs mt-4">Siamo a tua disposizione</p>
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
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-serif mb-12">Chi Siamo</h1>
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
      <ImageZoomModal />
    </div>
  );
};

export default App;

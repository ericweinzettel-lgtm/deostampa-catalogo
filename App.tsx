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
    <div className="space-y-24 pb-24">
      <section className="relative min-h-[90vh] flex items-center overflow-hidden py-20 bg-white">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-[#C5B08B]/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[70%] bg-[#C5B08B]/5 rounded-full blur-[150px]"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-5xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-stone-900 leading-[1] tracking-tighter">
              DeoStampa: <br/><span className="italic text-[#C5B08B] font-normal">L'Emozione</span> <br/>
              <span className="font-black">Personalizzata.</span>
            </h1>
            <p className="text-lg md:text-2xl text-stone-600 border-l-4 border-[#C5B08B] pl-8 max-w-2xl">
              Creazioni uniche realizzate a mano con cura sartoriale. Ogni pezzo racconta una storia.
            </p>
            <div className="flex flex-wrap gap-6">
              <button onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }} className="bg-[#C5B08B] text-white px-10 py-5 rounded-2xl font-bold shadow-xl">Esplora Catalogo</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

  const renderProducts = () => (
    <div className="max-w-7xl mx-auto px-6 py-24 space-y-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {PRODUCTS.map(product => (
          <div key={product.id} className="group bg-white p-6 rounded-[3rem] border border-stone-50 hover:shadow-3xl transition-all duration-500 hover:-translate-y-3">
            <div className="relative aspect-square overflow-hidden rounded-[2.2rem] bg-stone-100 cursor-pointer">
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
            <div className="mt-8 space-y-4">
              <h3 className="font-serif font-bold text-2xl text-stone-900">{product.name}</h3>
              <p className="text-stone-500 text-sm line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-serif text-[#C5B08B] font-black">€{product.price.toFixed(2)}</span>
                <button onClick={() => { setSelectedProduct(product); setCurrentPage(Page.PRODUCT_DETAIL); window.scrollTo(0,0); }} className="text-[#C5B08B] font-bold text-sm uppercase tracking-widest">Vedi Dettagli</button>
              </div>
            </div>
          </div>
        ))}
      </div>
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
                <a href={selectedProduct.ebayUrl} target="_blank" className="block w-full bg-stone-900 text-white text-center py-5 rounded-2xl font-bold text-lg uppercase">Acquista su eBay</a>
                <a href={getWhatsAppLink(selectedProduct.name)} target="_blank" className="block w-full bg-[#C5B08B] text-white text-center py-5 rounded-2xl font-bold text-lg uppercase">Personalizza via WhatsApp</a>
              </div>
            </div>
            <p className="text-stone-600 leading-relaxed text-lg whitespace-pre-line">{selectedProduct.description}</p>
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
      case Page.ABOUT: return (
        <div className="max-w-4xl mx-auto px-6 py-24 text-center">
          <h1 className="text-6xl font-serif mb-12">Chi Siamo</h1>
          <p className="text-2xl font-serif italic text-stone-700 leading-relaxed">{ABOUT_TEXT}</p>
        </div>
      );
      default: return renderHome();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF9F6]">
      <ImageZoomModal />
      <Navbar currentPage={currentPage} onPageChange={(p) => { setCurrentPage(p); window.scrollTo(0,0); }} />
      <main className="flex-1">{renderContent()}</main>
      <Footer onPageChange={(p) => { setCurrentPage(p); window.scrollTo(0,0); }} />
      <WhatsAppButton />
    </div>
  );
};

export default App;

import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  Page: typeof Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, Page }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
        
        {/* LOGO ARTESANAL */}
        <div 
          onClick={() => { setCurrentPage(Page.HOME); window.scrollTo(0,0); }} 
          className="cursor-pointer group flex flex-col"
        >
          <span className="text-xl font-serif tracking-[0.3em] text-stone-900 group-hover:text-[#C5B08B] transition-colors uppercase">
            DEOSTAMPA
          </span>
          <span className="text-[7px] tracking-[0.5em] uppercase text-stone-400 font-black -mt-1">
            Atelier Creativo
          </span>
        </div>

        {/* MENÚ DE NAVEGACIÓN - Estilo Boutique */}
        <div className="hidden md:flex items-center gap-10">
          {[
            { name: 'Home', id: Page.HOME },
            { name: 'Catalogo', id: Page.PRODUCTS },
            { name: 'Chi Siamo', id: Page.ABOUT },
            { name: 'Contatti', id: Page.CONTACT }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); window.scrollTo(0,0); }}
              className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all pb-1 border-b ${
                currentPage === item.id 
                ? 'border-[#C5B08B] text-stone-900' 
                : 'border-transparent text-stone-400 hover:text-stone-900'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* ACCIÓN RÁPIDA */}
        <div className="hidden md:block">
          <button 
            onClick={() => { setCurrentPage(Page.CONTACT); window.scrollTo(0,0); }}
            className="text-[9px] font-black uppercase tracking-[0.3em] px-8 py-3 border border-stone-200 hover:border-stone-900 transition-all duration-500"
          >
            Preventivo
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

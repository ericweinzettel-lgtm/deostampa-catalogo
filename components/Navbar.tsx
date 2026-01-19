import React from 'react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  Page: typeof Page;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, Page }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white border-b border-stone-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO: Recuperamos tu estilo original pero más nítido */}
        <div 
          onClick={() => { setCurrentPage(Page.HOME); window.scrollTo(0,0); }} 
          className="cursor-pointer flex flex-col"
        >
          <span className="text-2xl font-black tracking-tighter text-stone-900 uppercase">
            DEO<span className="text-[#C5B08B]">STAMPA</span>
          </span>
          <span className="text-[9px] tracking-[0.3em] uppercase text-stone-400 font-bold -mt-1">
            Personalizzazione
          </span>
        </div>

        {/* MENÚ: El de antes, con mejor espaciado */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { name: 'Home', id: Page.HOME },
            { name: 'Catalogo', id: Page.PRODUCTS },
            { name: 'Chi Siamo', id: Page.ABOUT },
            { name: 'Contatti', id: Page.CONTACT }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => { setCurrentPage(item.id); window.scrollTo(0,0); }}
              className={`text-xs font-bold uppercase tracking-widest transition-colors ${
                currentPage === item.id 
                ? 'text-[#C5B08B]' 
                : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* BOTÓN: Fuerte y claro como el original */}
        <div className="hidden md:block">
          <button 
            onClick={() => { setCurrentPage(Page.CONTACT); window.scrollTo(0,0); }}
            className="bg-stone-900 text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-xl hover:bg-[#C5B08B] transition-all shadow-md"
          >
            Richiedi Preventivo
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;

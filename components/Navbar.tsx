import React, { useState } from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { EBAY_STORE_URL } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  const navItems = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.PRODUCTS, label: 'Catalogo' },
    { id: Page.ABOUT, label: 'Chi Siamo' },
    { id: Page.CONTACT, label: 'Contatti' },
  ];

  return (
    <div className="sticky top-0 z-50">
      {/* BARRA SUPERIOR - Se queda igual porque es muy efectiva */}
      <div className="bg-[#C5B08B] text-white text-[10px] md:text-[11px] py-2.5 text-center font-black tracking-[0.3em] uppercase">
        ✨ SCOPRI TUTTE LE NOSTRE CREAZIONI SU EBAY ✨
      </div>

      <nav className="bg-white/95 backdrop-blur-md border-b border-stone-100 px-6 py-5 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="cursor-pointer transition-transform hover:scale-105 active:scale-95"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <Logo className="h-9" />
          </div>
          
          {/* MENU DESKTOP - Aquí es donde mejoramos las letras */}
          <div className="hidden md:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-[10px] font-black uppercase tracking-[0.25em] transition-all relative pb-1 group ${
                  currentPage === item.id 
                  ? 'text-[#C5B08B]' 
                  : 'text-stone-500 hover:text-stone-900'
                }`}
              >
                {item.label}
                {/* Línea decorativa más fina */}
                <span className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C5B08B] transition-all duration-300 ${
                  currentPage === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={EBAY_STORE_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block bg-stone-900 text-white px-8 py-3 rounded-sm text-[9px] font-black uppercase tracking-[0.2em] hover:bg-[#C5B08B] transition-all shadow-sm active:scale-95"
            >
              Vetrina eBay
            </a>

            {/* Hamburger Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-stone-600 hover:text-[#C5B08B] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[110px] bg-white z-40 md:hidden animate-in fade-in slide-in-from-top duration-300 border-t border-stone-100 shadow-2xl overflow-y-auto">
          <div className="flex flex-col p-10 space-y-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left text-2xl font-serif tracking-tight transition-colors border-b border-stone-50 pb-4 ${
                  currentPage === item.id ? 'text-[#C5B08B] italic' : 'text-stone-800'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* BOTÓN EBAY - REDISEÑADO PARA SER MÁS ELEGANTE */}
<div className="hidden md:block">
  <a 
    href={EBAY_STORE_URL}
    target="_blank" 
    rel="noopener noreferrer"
    className="group relative inline-flex items-center justify-center px-10 py-3.5 overflow-hidden border border-stone-900 bg-stone-900 transition-all duration-500 hover:bg-transparent"
  >
    {/* Efecto de fondo al hacer hover */}
    <div className="absolute inset-0 w-0 bg-white transition-all duration-500 ease-out group-hover:w-full"></div>
    
    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white transition-colors duration-500 group-hover:text-stone-900">
      VETRINA EBAY
    </span>
  </a>
</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

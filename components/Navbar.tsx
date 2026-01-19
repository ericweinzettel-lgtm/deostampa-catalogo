import React, { useState } from 'react';
import { Page } from '../types';
import Logo from './Logo';
import { EBAY_STORE_URL } from '../constants';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void; // Cambiado para coincidir con App.tsx
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Definimos los items del menú asegurándonos de que Page.CONTACT y Page.PRODUCTS existan
  const navItems = [
    { id: Page.HOME, label: 'Home' },
    { id: Page.PRODUCTS, label: 'Catalogo' },
    { id: Page.ABOUT, label: 'Chi Siamo' },
    { id: Page.CONTACT, label: 'Contatti' },
  ];

  return (
    <div className="sticky top-0 z-50">
      <div className="bg-[#C5B08B] text-white text-[10px] md:text-xs py-2 text-center font-bold tracking-widest uppercase">
        ✨ SCOPRI TUTTE LE NOSTRE CREAZIONI SU EBAY ✨
      </div>
      <nav className="bg-white/90 backdrop-blur-md border-b border-stone-100 px-6 py-4 relative z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div 
            className="cursor-pointer transition-transform hover:scale-105"
            onClick={() => handleNavClick(Page.HOME)}
          >
            <Logo className="h-9" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-stone-600">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`hover:text-[#C5B08B] transition-colors relative pb-1 ${
                  currentPage === item.id 
                  ? 'text-[#C5B08B] after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#C5B08B]' 
                  : ''
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="flex items-center">
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
            
            <a 
              href={EBAY_STORE_URL}
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden md:block bg-stone-900 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-[#C5B08B] transition-colors"
            >
              VETRINA EBAY
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[104px] bg-white z-40 md:hidden animate-in fade-in slide-in-from-top duration-300 border-t border-stone-100 shadow-2xl">
          <div className="flex flex-col p-8 space-y-6 text-xl font-serif text-stone-800">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left hover:text-[#C5B08B] transition-colors border-b border-stone-50 pb-4 ${
                  currentPage === item.id ? 'text-[#C5B08B] font-bold italic' : ''
                }`}
              >
                {item.label}
              </button>
            ))}
            <a 
              href={EBAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-stone-900 text-white text-center py-4 rounded-xl font-bold"
            >
              VISITA EBAY
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

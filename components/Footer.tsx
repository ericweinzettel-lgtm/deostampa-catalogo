import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void; // Ajustado a tu App.tsx
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  // Función para navegar y subir al inicio
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-[#F5F2EA] text-stone-600 py-12 md:py-16 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto">
        {/* Grid principal: 2 columnas en móvil, 4 en desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
          
          {/* COLUMNA 1: LOGO (Ocupa las 2 columnas en móvil para que no se vea apretado) */}
          <div className="col-span-2 md:col-span-1 space-y-6 text-center md:text-left">
            <div className="flex justify-center md:justify-start">
              <Logo className="h-9 md:h-10" />
            </div>
            <p className="text-[11px] md:text-sm leading-relaxed opacity-80 font-medium uppercase tracking-wider max-w-sm mx-auto md:mx-0">
              Eccellenza nella personalizzazione e cura del dettaglio. Trasformiamo le tue idee in creazioni uniche.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://instagram.com/deostampa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-[#C5B08B] hover:border-[#C5B08B] transition-all group">
                <svg className="w-3.5 h-3.5 fill-stone-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://facebook.com/deostampa" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center hover:bg-[#C5B08B] hover:border-[#C5B08B] transition-all group">
                <svg className="w-3.5 h-3.5 fill-stone-400 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                  <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMNA 2: MENU (Lado izquierdo en móvil) */}
          <div className="space-y-6">
            <h4 className="text-stone-800 font-black text-[10px] uppercase tracking-[0.2em] border-l-2 border-[#C5B08B] pl-3">Menu</h4>
            <ul className="space-y-3 text-[11px] font-bold uppercase tracking-widest">
              <li><button onClick={() => handleNav(Page.HOME)} className="hover:text-[#C5B08B] transition-colors">Home</button></li>
              <li><button onClick={() => handleNav(Page.PRODUCTS)} className="hover:text-[#C5B08B] transition-colors">Prodotti</button></li>
              <li><button onClick={() => handleNav(Page.ABOUT)} className="hover:text-[#C5B08B] transition-colors">Chi Siamo</button></li>
              <li><button onClick={() => handleNav(Page.CONTACT)} className="hover:text-[#C5B08B] transition-colors">Contatti</button></li>
            </ul>
          </div>

          {/* COLUMNA 3: CONTATTI (Lado derecho en móvil) */}
          <div className="space-y-6">
            <h4 className="text-stone-800 font-black text-[10px] uppercase tracking-[0.2em] border-l-2 border-[#C5B08B] pl-3">Contatti</h4>
            <ul className="space-y-4 text-[10px] font-bold uppercase tracking-widest text-stone-500">
              <li className="flex items-center space-x-2">
                <span className="text-[#C5B08B] text-xs">📞</span>
                <span>+39 342 7796083</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-[#C5B08B] text-xs">✉️</span>
                <span>info@deostampa.it</span>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: LEGAL (Ocupa las 2 columnas abajo en móvil) */}
          <div className="col-span-2 md:col-span-1 space-y-6 pt-6 md:pt-0">
            <h4 className="text-stone-800 font-black text-[10px] uppercase tracking-[0.2em] border-l-2 border-[#C5B08B] pl-3">Info</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-3 text-[9px] font-bold uppercase tracking-widest opacity-70">
              <li><button className="hover:text-[#C5B08B]">Privacy</button></li>
              <li><button className="hover:text-[#C5B08B]">Termini</button></li>
              <li><button className="hover:text-[#C5B08B]">Rimborsi</button></li>
              <li><button className="hover:text-[#C5B08B]">Cookies</button></li>
            </ul>
            <p className="text-[8px] mt-6 font-black tracking-[0.2em] text-stone-400">© 2024 DEOSTAMPA.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

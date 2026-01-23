import React from 'react';
import { Page } from '../types';
import Logo from './Logo';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onPolicyClick: (type: string) => void; // Mantenemos tu conexión intacta
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage, onPolicyClick }) => {
  return (
    <footer className="bg-[#F5F2EA] text-stone-700 py-16 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* SECCIÓN 1: LOGO Y DESCRIPCIÓN */}
        <div className="space-y-6">
          <Logo className="h-10" />
          <p className="text-sm leading-relaxed opacity-90 font-light">
            Eccellenza nella personalizzazione e cura del dettaglio. Trasformiamo le tue idee in creazioni uniche con passione artigianale.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://instagram.com/deostampa" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Seguici su Instagram" // <--- Google ahora sabe qué es este link
              className="w-9 h-9 rounded-full border border-stone-400 flex items-center justify-center hover:bg-[#C5B08B] hover:border-[#C5B08B] transition-all cursor-pointer group"
            >
              <svg className="w-4 h-4 fill-stone-600 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a 
              href="https://facebook.com/deostampa" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Seguici su Facebook" // <--- Google ahora sabe qué es este link
              className="w-9 h-9 rounded-full border border-stone-400 flex items-center justify-center hover:bg-[#C5B08B] hover:border-[#C5B08B] transition-all cursor-pointer group"
            >
              <svg className="w-4 h-4 fill-stone-600 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" />
              </svg>
            </a>
          </div>
        </div>

        {/* CONTENEDOR DE LISTAS */}
        <div className="grid grid-cols-2 md:grid-cols-3 col-span-1 md:col-span-3 gap-12">
          
          {/* Menu */}
          <div>
            {/* Cambiado de h4 a h2 para jerarquía SEO, pero mismo diseño */}
            <h2 className="text-stone-900 font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-[#C5B08B] pl-3">Menu</h2>
            <ul className="space-y-4 text-sm font-medium">
              <li><button onClick={() => setCurrentPage(Page.HOME)} className="hover:text-[#C5B08B] transition-colors text-left" aria-label="Home">Home</button></li>
              <li><button onClick={() => setCurrentPage(Page.PRODUCTS)} className="hover:text-[#C5B08B] transition-colors text-left" aria-label="Prodotti">Prodotti</button></li>
              <li><button onClick={() => setCurrentPage(Page.ABOUT)} className="hover:text-[#C5B08B] transition-colors text-left" aria-label="Chi Siamo">Chi Siamo</button></li>
              <li><button onClick={() => setCurrentPage(Page.CONTACT)} className="hover:text-[#C5B08B] transition-colors text-left" aria-label="Contatti">Contatti</button></li>
            </ul>
          </div>

          {/* Contatti */}
          <div>
            <h2 className="text-stone-900 font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-[#C5B08B] pl-3">Contatti</h2>
            <ul className="space-y-4 text-sm font-medium opacity-90">
              <li className="flex items-center space-x-3 group">
                <span className="text-[#C5B08B]" aria-hidden="true">📞</span>
                <span className="group-hover:text-stone-900 transition-colors text-xs md:text-sm">+39 342 7796083</span>
              </li>
              <li className="flex items-center space-x-3 group text-xs md:text-sm">
                <span className="text-[#C5B08B]" aria-hidden="true">✉️</span>
                <span className="group-hover:text-stone-900 transition-colors break-all">info@deostampa.it</span>
              </li>
            </ul>
          </div>

          {/* Note Legali: Seguimos usando tu onPolicyClick */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="text-stone-900 font-bold mb-6 text-sm uppercase tracking-widest border-l-2 border-[#C5B08B] pl-3">Note Legali</h2>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 text-xs font-medium mb-8">
              <li><button onClick={() => onPolicyClick('privacy')} className="hover:text-[#C5B08B] text-left" aria-label="Privacy Policy">Privacy</button></li>
              <li><button onClick={() => onPolicyClick('termini')} className="hover:text-[#C5B08B] text-left" aria-label="Termini e Condizioni">Termini</button></li>
              <li><button onClick={() => onPolicyClick('rimborsi')} className="hover:text-[#C5B08B] text-left" aria-label="Resi e Rimborsi">Rimborsi</button></li>
              <li><button onClick={() => onPolicyClick('spedizione')} className="hover:text-[#C5B08B] text-left" aria-label="Spedizione e Consegna">Spedizioni</button></li>
            </ul>
            <p className="text-[11px] mt-6 opacity-80 font-mono text-stone-500">© 2026 DEOSTAMPA. TUTTI I DIRITTI RISERVATI.</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;

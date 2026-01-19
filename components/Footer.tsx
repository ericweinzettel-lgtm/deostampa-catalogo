const Footer: React.FC<FooterProps> = ({ setCurrentPage, Page }) => {
  return (
    <footer className="bg-[#F9F8F6] pt-16 pb-8 border-t border-stone-100">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Estructura Principal */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12 md:gap-0">
          
          {/* BLOQUE 1: LOGO Y FRASE (Centro en móvil, Izquierda en PC) */}
          <div className="flex flex-col items-center md:items-start space-y-4 md:w-1/3">
            <div 
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => { setCurrentPage(Page.HOME); window.scrollTo(0,0); }}
            >
              <Logo className="h-8" />
            </div>
            <p className="text-[10px] text-stone-400 tracking-[0.2em] uppercase font-bold text-center md:text-left leading-relaxed">
              L'eccellenza della personalizzazione <br className="hidden md:block"/> italiana a Reggio Emilia.
            </p>
          </div>

          {/* BLOQUE 2: ENLACES Y CONTACTO (Dos columnas en móvil para ahorrar espacio) */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-24">
            
            {/* Esplora */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5B08B]">Esplora</p>
              <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-stone-500">
                <li className="hover:text-stone-900 cursor-pointer" onClick={() => { setCurrentPage(Page.PRODUCTS); window.scrollTo(0,0); }}>Catalogo</li>
                <li className="hover:text-stone-900 cursor-pointer" onClick={() => { setCurrentPage(Page.ABOUT); window.scrollTo(0,0); }}>Storia</li>
                <li className="hover:text-stone-900 cursor-pointer" onClick={() => { setCurrentPage(Page.CONTACT); window.scrollTo(0,0); }}>Contatti</li>
              </ul>
            </div>

            {/* Contatti / Social */}
            <div className="space-y-4">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C5B08B]">Social</p>
              <ul className="space-y-3 text-[10px] font-bold uppercase tracking-widest text-stone-500">
                <li className="hover:text-[#C5B08B] cursor-pointer transition-colors">Instagram</li>
                <li className="hover:text-[#C5B08B] cursor-pointer transition-colors">Facebook</li>
              </ul>
            </div>
          </div>

          {/* BLOQUE 3: INFO DIRECTA (Visible sobre todo en PC, Compacto en móvil) */}
          <div className="flex flex-col items-center md:items-end space-y-2 md:w-1/3">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-stone-900">Supporto Diretto</p>
            <a href="mailto:info@deostampa.it" className="text-[10px] font-bold text-stone-500 hover:text-stone-900 tracking-widest transition-colors">INFO@DEOSTAMPA.IT</a>
            <p className="text-[10px] font-black text-[#C5B08B] tracking-widest">WA: +39 342 779 6083</p>
          </div>
        </div>

        {/* LÍNEA FINAL (Copyright) */}
        <div className="mt-16 pt-8 border-t border-stone-200/40">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[8px] font-black uppercase tracking-[0.4em] text-stone-300">
            <p>© 2026 DEOSTAMPA ATELIER CREATIVO</p>
            <div className="flex gap-6">
              <span className="cursor-pointer hover:text-stone-500">Privacy Policy</span>
              <span className="cursor-pointer hover:text-stone-500">Cookies</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

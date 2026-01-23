import React from 'react';

const Logo: React.FC<{ className?: string }> = ({ className = "h-8" }) => {
  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* CÍRCULO CON LA "D" */}
      <svg 
        viewBox="0 0 100 100" 
        width="40" 
        height="40" 
        className="h-full w-auto" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Logo DeoStampa"
      >
        <title>Logo DeoStampa</title>
        {/* El círculo dorado */}
        <circle cx="50" cy="50" r="48" stroke="#C5B08B" strokeWidth="2"/>
        {/* La letra D estilizada */}
        <path d="M35 30V70C35 70 65 70 65 50C65 30 35 30 35 30Z" stroke="#C5B08B" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        {/* El pequeño cuadro decorativo */}
        <rect x="42" y="42" width="16" height="16" fill="#C5B08B" opacity="0.4"/>
      </svg>
      
      {/* EL NOMBRE DEOSTAMPA */}
      <span className="font-serif text-2xl font-bold tracking-tighter text-stone-900">
        DEO<span className="text-[#C5B08B]">STAMPA</span>
      </span>
    </div>
  );
};

export default Logo;

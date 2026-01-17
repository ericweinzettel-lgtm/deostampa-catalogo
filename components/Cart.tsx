
import React, { useState } from 'react';
import { CartItem, Order } from '../types';
import { ACCENT_COLOR, DISCOUNT_CODE, DISCOUNT_PERCENT } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onRemove: (id: string) => void;
  onUpdateQty: (id: string, delta: number) => void;
  onCheckoutComplete: (order: Order) => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onRemove, onUpdateQty, onCheckoutComplete }) => {
  const [step, setStep] = useState<'cart' | 'shipping' | 'payment'>('cart');
  const [promoCode, setPromoCode] = useState('');
  const [isPromoApplied, setIsPromoApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'googlepay'>('card');
  
  const [shippingInfo, setShippingInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: '',
    country: 'Italia',
    company: ''
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const cartSubtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = isPromoApplied ? cartSubtotal * DISCOUNT_PERCENT : 0;
  const shippingCost = shippingInfo.country === 'Italia' ? 0 : 20;
  const total = cartSubtotal - discountAmount + shippingCost;

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleApplyPromo = () => {
    if (promoCode.toUpperCase() === DISCOUNT_CODE) {
      setIsPromoApplied(true);
      setErrors({ ...errors, promo: '' });
    } else {
      setErrors({ ...errors, promo: 'Codice non valido' });
    }
  };

  const goToPayment = () => {
    const newErrors: Record<string, string> = {};
    if (!shippingInfo.fullName) newErrors.fullName = 'Inserisci il nome completo';
    if (!shippingInfo.email || !validateEmail(shippingInfo.email)) newErrors.email = 'Inserisci un email valida';
    if (!shippingInfo.address) newErrors.address = 'Inserisci l\'indirizzo';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setErrors({});
    setStep('payment');
  };

  const handleCompleteOrder = () => {
    if (paymentMethod === 'card') {
      const pErrors: Record<string, string> = {};
      if (paymentInfo.cardNumber.length < 16) pErrors.cardNumber = 'Inserisci un numero di carta valido';
      if (!paymentInfo.expiry.includes('/')) pErrors.expiry = 'Inserisci MM/AA';
      if (paymentInfo.cvv.length < 3) pErrors.cvv = 'Inserisci il CVV';
      
      if (Object.keys(pErrors).length > 0) {
        setErrors(pErrors);
        return;
      }
    }

    const order: Order = {
      id: Math.random().toString(36).substr(2, 9),
      customerName: shippingInfo.fullName,
      email: shippingInfo.email,
      address: shippingInfo.address,
      country: shippingInfo.country,
      items,
      total,
      date: new Date().toISOString(),
      ip: 'USER_IP'
    };
    
    onCheckoutComplete(order);
    onClose();
    setStep('cart');
    setPaymentInfo({ cardNumber: '', expiry: '', cvv: '' });
    setErrors({});
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex justify-end">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative w-full max-w-lg bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
        <div className="p-6 border-b border-stone-100 flex justify-between items-center bg-stone-50">
          <h2 className="text-2xl font-bold font-serif tracking-tight text-stone-900">
            {step === 'cart' ? 'Il Tuo Carrello' : step === 'shipping' ? 'Spedizione' : 'Pagamento'}
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-stone-200 rounded-full transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          {step === 'cart' && (
            <>
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center space-y-6 opacity-40">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-20 h-20">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                  </svg>
                  <p className="font-serif text-xl italic">Il tuo carrello è ancora vuoto</p>
                </div>
              ) : (
                items.map((item, idx) => (
                  <div key={`${item.id}-${idx}`} className="flex space-x-5 border-b border-stone-100 pb-8 last:border-0">
                    <div className="relative w-24 h-28 shrink-0">
                        <img src={item.customImage || item.image} alt={item.name} className="w-full h-full object-cover rounded-xl shadow-md border border-stone-100" />
                    </div>
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="font-serif font-semibold text-base leading-tight text-stone-900 tracking-tight">{item.name}</h3>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {item.size && <p className="text-[9px] text-stone-500 uppercase font-bold tracking-[0.1em] bg-stone-100 px-2 py-1 rounded-md">Size: {item.size}</p>}
                            {item.selectedShape && <p className="text-[9px] text-stone-500 uppercase font-bold tracking-[0.1em] bg-stone-100 px-2 py-1 rounded-md">Form: {item.selectedShape}</p>}
                          </div>
                          {item.customText && <p className="text-[11px] italic text-stone-600 mt-3 border-l-2 border-[#C5B08B] pl-3 leading-relaxed">"{item.customText}"</p>}
                        </div>
                        <button onClick={() => onRemove(item.id)} className="text-stone-300 hover:text-red-500 transition-colors p-1">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex justify-between items-end mt-6">
                        <div className="flex items-center border border-stone-200 rounded-xl overflow-hidden h-9 bg-white shadow-sm">
                          <button onClick={() => onUpdateQty(item.id, -1)} className="px-3.5 hover:bg-stone-50 transition-colors text-stone-400 font-bold">-</button>
                          <span className="px-4 text-xs font-bold text-stone-800 tabular-nums">{item.quantity}</span>
                          <button onClick={() => onUpdateQty(item.id, 1)} className="px-3.5 hover:bg-stone-50 transition-colors text-stone-400 font-bold">+</button>
                        </div>
                        <span className="font-serif font-bold text-lg text-[#C5B08B] tabular-nums">€{(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </>
          )}

          {step === 'shipping' && (
            <div className="space-y-5 bg-white p-6 rounded-2xl border border-stone-100 shadow-md">
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 px-1">Dati Spedizione</label>
                <input type="text" placeholder="Nome e Cognome *" className={`w-full bg-white border ${errors.fullName ? 'border-red-500' : 'border-stone-200'} p-4 rounded-xl focus:ring-2 focus:ring-[#C5B08B]/20 outline-none font-medium text-sm`} value={shippingInfo.fullName} onChange={e => setShippingInfo({...shippingInfo, fullName: e.target.value})} />
                {errors.fullName && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.fullName}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <input type="email" placeholder="Email di contatto *" className={`w-full bg-white border ${errors.email ? 'border-red-500' : 'border-stone-200'} p-4 rounded-xl focus:ring-2 focus:ring-[#C5B08B]/20 outline-none font-medium text-sm`} value={shippingInfo.email} onChange={e => setShippingInfo({...shippingInfo, email: e.target.value})} />
                  {errors.email && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.email}</p>}
                </div>
                <input type="tel" placeholder="Telefono" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:ring-2 focus:ring-[#C5B08B]/20 outline-none font-medium text-sm" value={shippingInfo.phone} onChange={e => setShippingInfo({...shippingInfo, phone: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <input type="text" placeholder="Indirizzo completo (Via, Civico) *" className={`w-full bg-white border ${errors.address ? 'border-red-500' : 'border-stone-200'} p-4 rounded-xl focus:ring-2 focus:ring-[#C5B08B]/20 outline-none font-medium text-sm`} value={shippingInfo.address} onChange={e => setShippingInfo({...shippingInfo, address: e.target.value})} />
                {errors.address && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.address}</p>}
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Città" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:ring-2 focus:ring-[#C5B08B]/20 outline-none font-medium text-sm" value={shippingInfo.city} onChange={e => setShippingInfo({...shippingInfo, city: e.target.value})} />
                <input type="text" placeholder="CAP" className="w-full bg-white border border-stone-200 p-4 rounded-xl focus:ring-2 focus:ring-[#C5B08B]/20 outline-none font-medium text-sm" value={shippingInfo.zip} onChange={e => setShippingInfo({...shippingInfo, zip: e.target.value})} />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400 px-1">Paese di destinazione</label>
                <select className="w-full bg-white border border-stone-200 p-4 rounded-xl outline-none font-medium text-sm appearance-none" value={shippingInfo.country} onChange={e => setShippingInfo({...shippingInfo, country: e.target.value})}>
                    <option value="Italia">Italia (Spedizione Gratuita)</option>
                    <option value="Estero">Estero (+€20.00)</option>
                </select>
              </div>
            </div>
          )}

          {step === 'payment' && (
            <div className="space-y-5">
              <div className={`p-5 border-2 ${paymentMethod === 'card' ? 'border-[#C5B08B]' : 'border-stone-100'} rounded-2xl bg-white shadow-md transition-all cursor-pointer`} onClick={() => setPaymentMethod('card')}>
                <label className="flex items-center space-x-4 cursor-pointer">
                  <input type="radio" name="pay" checked={paymentMethod === 'card'} onChange={() => setPaymentMethod('card')} className="accent-[#C5B08B]" />
                  <span className="font-bold text-stone-800 tracking-tight">Carta di Credito / Debito</span>
                </label>
                {paymentMethod === 'card' && (
                  <div className="mt-5 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                    <div className="space-y-1.5">
                      <input 
                        type="text" 
                        placeholder="Numero Carta (16 cifre)" 
                        maxLength={16}
                        className={`w-full bg-white border ${errors.cardNumber ? 'border-red-500' : 'border-stone-200'} p-4 rounded-xl outline-none text-sm font-medium`} 
                        value={paymentInfo.cardNumber} 
                        onChange={e => setPaymentInfo({...paymentInfo, cardNumber: e.target.value.replace(/\D/g,'')})}
                      />
                      {errors.cardNumber && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.cardNumber}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <input 
                          type="text" 
                          placeholder="Scadenza MM/AA" 
                          maxLength={5}
                          className={`w-full bg-white border ${errors.expiry ? 'border-red-500' : 'border-stone-200'} p-4 rounded-xl outline-none text-sm font-medium`}
                          value={paymentInfo.expiry} 
                          onChange={e => setPaymentInfo({...paymentInfo, expiry: e.target.value})}
                        />
                        {errors.expiry && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.expiry}</p>}
                      </div>
                      <div className="space-y-1.5">
                        <input 
                          type="password" 
                          placeholder="CVV" 
                          maxLength={3}
                          className={`w-full bg-white border ${errors.cvv ? 'border-red-500' : 'border-stone-200'} p-4 rounded-xl outline-none text-sm font-medium`}
                          value={paymentInfo.cvv} 
                          onChange={e => setPaymentInfo({...paymentInfo, cvv: e.target.value.replace(/\D/g,'')})}
                        />
                        {errors.cvv && <p className="text-[10px] text-red-500 font-bold ml-1">{errors.cvv}</p>}
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className={`p-5 border-2 ${paymentMethod === 'paypal' ? 'border-[#C5B08B]' : 'border-stone-100'} rounded-2xl bg-white hover:border-[#C5B08B]/30 transition-all cursor-pointer`} onClick={() => setPaymentMethod('paypal')}>
                <label className="flex items-center space-x-4 cursor-pointer">
                  <input type="radio" name="pay" checked={paymentMethod === 'paypal'} onChange={() => setPaymentMethod('paypal')} className="accent-[#C5B08B]" />
                  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-7" />
                </label>
              </div>

              <div className={`p-5 border-2 ${paymentMethod === 'googlepay' ? 'border-[#C5B08B]' : 'border-stone-100'} rounded-2xl bg-white hover:border-[#C5B08B]/30 transition-all cursor-pointer`} onClick={() => setPaymentMethod('googlepay')}>
                <label className="flex items-center space-x-4 cursor-pointer">
                  <input type="radio" name="pay" checked={paymentMethod === 'googlepay'} onChange={() => setPaymentMethod('googlepay')} className="accent-[#C5B08B]" />
                  <div className="flex items-center space-x-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Google_Pay_Logo.svg" alt="Google Pay" className="h-7" />
                    <span className="font-bold text-stone-800 tracking-tight">Google Pay</span>
                  </div>
                </label>
              </div>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-stone-100 space-y-6 bg-stone-50">
            <div className="space-y-3">
                <div className="flex justify-between text-sm text-stone-500 font-medium">
                    <span>Subtotale</span>
                    <span className="tabular-nums">€{cartSubtotal.toFixed(2)}</span>
                </div>
                {shippingCost > 0 && (
                    <div className="flex justify-between text-sm text-stone-500 font-medium">
                        <span>Spedizione Estera</span>
                        <span className="tabular-nums">€{shippingCost.toFixed(2)}</span>
                    </div>
                )}
                {isPromoApplied && (
                    <div className="flex justify-between text-sm text-green-600 font-semibold italic">
                        <span>Sconto Benvenuto (10%)</span>
                        <span className="tabular-nums">- €{discountAmount.toFixed(2)}</span>
                    </div>
                )}
                <div className="flex justify-between font-serif font-bold text-2xl text-stone-900 pt-3 border-t border-stone-200">
                    <span>Totale</span>
                    <span className="text-[#C5B08B] tabular-nums">€{total.toFixed(2)}</span>
                </div>
            </div>
            
            <button 
              onClick={step === 'cart' ? () => setStep('shipping') : step === 'shipping' ? goToPayment : handleCompleteOrder}
              className="w-full bg-stone-900 text-white py-5 rounded-xl font-bold shadow-2xl hover:bg-stone-800 transition-all transform active:scale-[0.98] tracking-tight text-lg"
            >
              {step === 'payment' ? 'Conferma e Acquista' : step === 'shipping' ? 'Vai al Pagamento' : 'Procedi con l\'ordine'}
            </button>
            <p className="text-[10px] text-center text-stone-400 font-medium uppercase tracking-widest">Transazione sicura e crittografata</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

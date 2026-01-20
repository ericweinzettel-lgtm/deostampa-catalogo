import { Product } from './types';

export const ACCENT_COLOR = '#C5B08B';
export const DISCOUNT_CODE = 'BENVENUTO10';
export const DISCOUNT_PERCENT = 0.10;

// URL Base per il venditore deostampa_2
const SELLER_ID = "deostampa_2";
export const EBAY_STORE_URL = `https://www.ebay.it/usr/${SELLER_ID}`;

export const PRODUCTS: Product[] = [
  {
    id: 'ds-casa-beer-mug',
    name: 'Boccale da Birra Personalizatto',
    price: 19.90,
    category: 'Casa',
    image: 'images/boccale-01.jpg',
    images: [
      "images/boccale-01.jpg",
      "images/boccale-02.jpg",
      "images/boccale-03.jpg",
      "images/boccale-04.jpg",
      "images/boccale-05.jpg",
      "images/boccale-06.jpg",
      "images/boccale-07.jpg",
      "images/boccale-08.jpg",
      "images/boccale-09.jpg",
      "images/boccale-10.jpg"],
    description: `🍺 Il tuo boccale, il tuo stile!

Dai carattere ai tuoi brindisi con un boccale da birra satinato da 500 ml.

Puoi scegliere tra:
✨ Design esclusivi già pronti come quelli mostrati in foto
📸 Personalizzazione con foto, frasi o loghi

Perfetto per:
🎁 Regali originali
🎉 Eventi speciali
🏢 Aziende, locali, birrerie
🍻 Serate tra amici

✅ Vetro smerigliato di alta qualità
✅ Stampa brillante e resistente
✅ Lavabile a mano e in lavastoviglie
✅ Confezionato con etichetta DeoStampa
✅ Spedizione gratuita in tutta Italia

💡 Ordini singoli o grandi quantità con prezzi personalizzati!

👉 Scegli il tuo design preferito o crea il tuo boccale personalizzato e brinda con personalità!. Perfetto per regali originali. 
Venduto e protetto tramite eBay.`,
    ebayUrl: `https://www.ebay.it/sch/i.html?_ssn=${SELLER_ID}&_nkw=boccale`,
    isCustomizable: true
  },
  {
    id: 'ds-casa-mug-standard',
    name: 'Tazza Classica Personalizzata',
    description: `☕ Trasforma la colazione in un ricordo. Ceramica premium resistente. Colori brillanti. Acquista in totale sicurezza su eBay dal venditore ${SELLER_ID}.`,
    price: 14.90,
    category: 'Casa',
    image: 'https://images.unsplash.com/photo-1514228742587-6b1558fbed20?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1514228742587-6b1558fbed20?auto=format&fit=crop&w=800&q=80'],
    ebayUrl: `https://www.ebay.it/sch/i.html?_ssn=${SELLER_ID}&_nkw=tazza`,
    isCustomizable: true
  },
  {
    id: 'ds-casa-mug-magic',
    name: 'Tazza Magica Termosensibile',
    description: `✨ Appare il design solo con il calore! Un effetto wow assicurato. Scopri la magia sulla nostra vetrina eBay.`,
    price: 17.90,
    category: 'Casa',
    image: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1577937927133-66ef06acdf18?auto=format&fit=crop&w=800&q=80'],
    ebayUrl: `https://www.ebay.it/sch/i.html?_ssn=${SELLER_ID}&_nkw=magica`,
    isCustomizable: true
  },
  {
    id: 'ds-app-tshirt-custom',
    name: 'Maglietta in Cotone Premium',
    description: `👕 Indossa le tue parole. Cotone 100% morbido. Stampa di alta qualità. Consulta le taglie disponibili su eBay.`,
    price: 16.90,
    category: 'Abbigliamento',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80'],
    ebayUrl: `https://www.ebay.it/sch/i.html?_ssn=${SELLER_ID}&_nkw=maglietta`,
    isCustomizable: true
  },
  {
    id: 'ds-acc-agenda-daily',
    name: 'Agenda Daily 2025/2026',
    description: `📔 Organizza la tua giornata con eleganza. Copertina rigida personalizzata. Disponibile ora su eBay.`,
    price: 24.90,
    category: 'Accessori',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80',
    images: ['https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80'],
    ebayUrl: `https://www.ebay.it/sch/i.html?_ssn=${SELLER_ID}&_nkw=agenda`,
    isCustomizable: true
  }
];

export const ABOUT_TEXT = `In DeoStampa crediamo che ogni oggetto debba raccontare una story. 

Siamo un laboratorio artigianale specializzato nella personalizzazione di alta qualità. Per garantire ai nostri clienti la massima sicurezza nei pagamenti e una logistica impeccabile, abbiamo scelto eBay come nostra piattaforma di vendita ufficiale. 

Qui sul nostro sito puoi esplorare il catalogo completo, trarre ispirazione dalle nostre creazioni e, con un semplice clic, completare l'acquisto in totale tranquillità sulla nostra vetrina eBay ufficiale (utente: ${SELLER_ID}).`;

export const PRIVACY_POLICY = `Informativa sulla privacy per deostampa.it...`;
export const TERMS_AND_CONDITIONS = `Termini e condizioni del catalogo deostampa.it...`;
export const REFUND_POLICY = `I resi e i rimborsi sono gestiti direttamente tramite la piattaforma eBay secondo le loro normative di protezione acquirente...`;
export const SHIPPING_POLICY = `Le spedizioni sono gestite tramite i corrieri convenzionati eBay, garantendo tracciabilità e velocità...`;
export const COOKIE_POLICY_TEXT = `Cookie policy di deostampa.it...`;

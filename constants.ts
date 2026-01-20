import { Product } from './types';

export const ACCENT_COLOR = '#C5B08B';
export const DISCOUNT_CODE = 'BENVENUTO10';
export const DISCOUNT_PERCENT = 0.10;

// URL Base per il venditore deostampa_2
const SELLER_ID = "deostampa_2";
export const EBAY_STORE_URL = `https://www.ebay.it/usr/${SELLER_ID}`;

export const PRODUCTS: Product[] = [
  {
    id: 'boccale',
    name: 'Boccale da Birra Personalizatto',
    price: 19.90,
    category: 'Casa',
    image: 'images/boccale-01.jpg',
    images: ["images/boccale-01.jpg",
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
    id: 'tazza',
    name: 'Tazza Classica Personalizzata',
    price: 14.90,
    category: 'Casa',
    image: 'images/tazza-01.jpg',
    images: ["images/tazza-01.jpg",
      "images/tazza-02.jpg",
      "images/tazza-03.jpg",
      "images/tazza-04.jpg",
      "images/tazza-05.jpg",
      "images/tazza-06.jpg",
      "images/tazza-07.jpg",
      "images/tazza-08.jpg",
      "images/tazza-09.jpg"],
    description: `☕ Tazza Personalizzata

🎁 Cerchi un regalo utile ma davvero speciale?
La tazza personalizzata DeoStampa è l’idea perfetta per trasformare un oggetto di uso quotidiano in un ricordo unico.
Personalizza con foto, nome, frase o logo e rendi ogni colazione o pausa caffè un momento speciale.

🔥 Caratteristiche:
✔ Tazza in ceramica di alta qualità
✔ Capacità circa 330 ml
✔ Colore bianco
✔ Personalizzazione completa (foto, testo o logo)
✔ Stampa nitida e dai colori brillanti
✔ Ideale per uso quotidiano

🎉 Perfetta per: Compleanni • Anniversari • Natale • Festa della mamma/papà • Regali aziendali • Uso personale

⚠️ Consigli d’uso:

Per una maggiore durata della stampa, si consiglia lavaggio a mano
(Utilizzabile in lavastoviglie e microonde, ma il lavaggio a mano preserva meglio i colori)

📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/sch/i.html?_ssn=${SELLER_ID}&_nkw=tazza`,
    isCustomizable: true
  },
  {
    id: 'tazza-magica',
    name: 'Tazza Magica',
    price: 17.90,
    category: 'Casa',
    image: 'images/tazzam-01.jpg',
    images: ["images/tazzam-01.jpg",
      "images/tazzam-02.jpg",
      "images/tazzam-03.jpg",
      "images/tazzam-04.jpg",
      "images/tazzam-05.jpg",
      "images/tazzam-06.jpg",
      "images/tazzam-07.jpg"],
    description: `☕ Tazza Magica Personalizzata

🎁 Cerchi un regalo che sorprende davvero?

Questa tazza magica personalizzata sembra nera a freddo, ma con una bevanda calda rivela la tua foto, frase o logo come per magia!
Un’idea regalo originale ed emozionante, perfetta per stupire chi ami o per valorizzare il tuo brand.

🔥 Caratteristiche:
✔ Tazza in ceramica di alta qualità
✔ Effetto termico magico
✔ Capacità circa 330 ml
✔ Colore a freddo: nero
✔ Personalizzazione totale (foto, testo o logo)
✔ Stampa brillante e resistente

🎉 Ideale per: Compleanni • Anniversari • Natale • San Valentino • Festa della mamma/papà • Regali aziendali

⚠️ Consigli d’uso:
Per mantenere l’effetto magico si consiglia lavaggio a mano.
Non adatta a microonde e lavastoviglie.

📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
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

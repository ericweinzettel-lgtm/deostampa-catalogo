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
✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236457259237`,
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
    ebayUrl: `https://www.ebay.it/itm/236529692336`,
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
    ebayUrl: `https://www.ebay.it/itm/236535493787`,
    isCustomizable: true
  },
  {
    id: 'pack-10-portachiavi-rotondi',
    name: '🔑 PACK 10 PORTACHIAVI ROTONDI MDF PERSONALIZZATI CON LOGO',
    price: 19.90,
    category: 'Casa',
    image: 'images/portachiavi10-01.jpg',
    images: ["images/portachiavi10-01.jpg",
      "images/portachiavi10-02.jpg",
      "images/portachiavi10-03.jpg",
      "images/portachiavi-01.jpg",
      "images/portachiavi-02.jpg"],
    description: `Rendi unico ogni dettaglio 🔑✨

Con questo Pack da 10 portachiavi rotondi in MDF personalizzati, puoi creare un prodotto speciale per:

Aziende (logo aziendale)
Famiglie (foto e nomi)
Eventi e ricorrenze

Un articolo utile, leggero e sempre apprezzato.

✅ CARATTERISTICHE
✔ Set da 10 portachiavi rotondi in MDF
✔ Personalizzazione con foto, testo o logo
✔ Stampa brillante e resistente
✔ Anello in metallo robusto
✔ Diametro circa 5 cm
✔ Realizzati artigianalmente su richiesta

🎯 IDEALI PER
Gadget aziendali
Eventi e fiere
Compleanni
Natale
Regali per famiglie
Squadre sportive
Scuole e associazioni

📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236575131978`,
    isCustomizable: true
  },
  {
    id: 'pack-5-portachiavi-rotondi',
    name: '🔑 PACK 5 PORTACHIAVI ROTONDI MDF PERSONALIZZATI CON LOGO',
    price: 15.90,
    category: 'Casa',
    image: 'images/portachiavi5-01.jpg',
    images: ["images/portachiavi5-01.jpg",
      "images/portachiavi5-02.jpg",
      "images/portachiavi-01.jpg",
      "images/portachiavi-02.jpg"],
    description: `Rendi unico ogni dettaglio 🔑✨

Con questo Pack da 5 portachiavi rotondi in MDF personalizzati, puoi creare un prodotto speciale per:

Aziende (logo aziendale)
Famiglie (foto e nomi)
Eventi e ricorrenze

Un articolo utile, leggero e sempre apprezzato.

✅ CARATTERISTICHE
✔ Set da 5 portachiavi rotondi in MDF
✔ Personalizzazione con foto, testo o logo
✔ Stampa brillante e resistente
✔ Anello in metallo robusto
✔ Diametro circa 5 cm
✔ Realizzati artigianalmente su richiesta

🎯 IDEALI PER
Gadget aziendali
Eventi e fiere
Compleanni
Natale
Regali per famiglie
Squadre sportive
Scuole e associazioni

📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236575110077`,
    isCustomizable: true
  },
  {
    id: 'portachiavi-personalizzati',
    name: '🔑 Portachiavi Personalizzati con Foto, Logo o Testo',
    price: 8.90,
    category: 'Casa',
    image: 'images/portachiavi-06.jpg',
    images: ["images/portachiavi-06.jpg",
      "images/portachiavi-05.jpg",
      "images/portachiavi-01.jpg",
      "images/portachiavi-02.jpg",
      "images/portachiavi-03.jpg"],
    description: `🔑 Il dettaglio che parla di te!
I nostri portachiavi personalizzati sono il mix perfetto tra utilità e stile.
Disponibili in forma rotonda, quadrata o a cuore, puoi renderli unici con:
📸 Foto
💬 Frasi speciali o nomi
🏢 Loghi aziendali o grafiche promozionali

Perfetti per:
🎁 Regali originali
🎉 Eventi, bomboniere, fiere
🏢 Gadget aziendali o merchandising

✅ Materiali resistenti e leggeri
✅ Stampa brillante e durevole
✅ Design su misura per ogni occasione
✅ Spedizione gratuita in tutta Italia

💡 Ordini singoli o in quantità, con prezzi personalizzati!
👉 Crea ora il tuo portachiavi personalizzato e porta con te un ricordo ovunque!
📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236457241126`,
    isCustomizable: true
  },
  {
    id: 'portachiavi-maglia-calcio',
    name: 'Pack 15 Portachiavi Maglia Calcio Personalizzati',
    price: 29.90,
    category: 'Casa',
    image: 'images/portachiavicamiseta-01.jpg',
    images: ["images/portachiavicamiseta-01.jpg",
      "images/portachiavicamiseta-02.jpg",
      "images/portachiavicamiseta-03.jpg",
      "images/portachiavicamiseta-04.jpg",
      "images/portachiavicamiseta-05.jpg",
      "images/portachiavicamiseta-06.jpg"],
    description: `Pack 15 Portachiavi Maglia Calcio Personalizzati – Nome, Numero e Logo Squadra

✔ Set da 15 portachiavi forma maglia
✔ Materiale: MDF sublimabile
✔ Personalizzazione completa
✔ Stampa brillante e resistente
✔ Anello portachiavi in metallo
✔ Dimensione circa 6 cm
✔ Realizzati artigianalmente su richiesta

🎯 IDEALI PER
Squadre di calcio giovanili
Scuole calcio
Tornei sportivi
Regalo di fine stagione
Ricordo per allenatori e staff

📩 COME ORDINARE
Dopo l’acquisto inviaci via messaggio eBay:
📋 Nome della squadra
📸 Logo del club (se disponibile)
🔢 Lista numeri giocatori
🧒 Lista nomi giocatori
🗓️ Anno della stagione
🎨 Riceverai bozza grafica gratuita prima della stampa.

✨ DeoStampa – Piccolo Brand, Grandi Emozioni`,
    ebayUrl: `https://www.ebay.it/itm/236575154662`,
    isCustomizable: true
  },
  {
    id: 'cuscino-personalizzato',
    name: 'Cuscino Personalizzato con Foto e Nomi',
    price: 19.90,
    category: 'Casa',
    image: 'images/cuscino-01.jpg',
    images: ["images/cuscino-01.jpg",
      "images/cuscino-02.jpg",
      "images/cuscino-03.jpg",
      "images/cuscino-04.jpg",
      "images/cuscino-05.jpg"],
    description: `🛏️ Cuscino Personalizzato 40x40 cm – Foto, Nomi e Testi su Richiesta

Rendi speciale ogni momento con un cuscino unico, creato su misura per te.
Personalizziamo il tuo cuscino con foto, nomi, frasi o dediche, per trasformarlo in un regalo emozionante e originale.

✨ Scegli il tuo modello preferito:

❤️ Tema San Valentino – perfetto per coppie innamorate
📸 Modello con 1, 2 o 3 foto – racconta i tuoi ricordi più belli

🎁 Ideale come regalo per:
San Valentino • Compleanni • Anniversari • Natale • Festa della mamma/papà

📏 Caratteristiche:
✔ Dimensione: 40 x 40 cm
✔ Tessuto morbido e piacevole al tatto
✔ Imbottitura inclusa – cuscino completo, soffice e confortevole
✔ Stampa sublimatica ad alta qualità
✔ Colori brillanti e durevoli nel tempo
✔ Federa con zip nascosta

💝 Un regalo unico, fatto con amore artigianale.

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236576621284`,
    isCustomizable: true
  },
   {
    id: 'cuscinobb-personalizzato',
    name: 'Cuscino Nascita Personalizzato con Nome e Dati ',
    price: 19.90,
    category: 'Casa',
    image: 'images/cuscinobb-01.jpg',
    images: ["images/cuscinobb-01.jpg",
      "images/cuscinobb-02.jpg",
      "images/cuscinobb-03.jpg",
      "images/cuscinobb-04.jpg"],
    description: `🛏️ Cuscino Nascita Personalizzato – Nome e Dati del Neonato

Celebra l’arrivo di una nuova vita con un regalo unico, delicato ed emozionante ✨
Un ricordo speciale da conservare per sempre.

Il nostro cuscino nascita personalizzato viene realizzato su misura con:
✔ Nome del neonato
✔ Data e ora di nascita
✔ Peso e altezza
✔ Città di nascita
✔ Nomi dei genitori

🎨 Personalizzazione completa
Il cuscino è sempre bianco, elegante e luminoso.

Puoi scegliere il colore dei testi e il colore del riquadro con i dettagli, per abbinarlo perfettamente alla cameretta.

📏 Caratteristiche:
✔ Dimensione: 40 x 40 cm
✔ Tessuto morbido e piacevole al tatto
✔ Imbottitura inclusa – cuscino completo, soffice e confortevole
✔ Stampa sublimatica ad alta qualità
✔ Colori brillanti e resistenti nel tempo

🎁 Perfetto come regalo nascita o battesimo, ideale per decorare la cameretta del bebè.
💝 Un regalo unico, fatto con amore artigianale.

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236576593922`,
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

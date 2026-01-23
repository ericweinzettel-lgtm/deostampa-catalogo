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
    id: 'agenda-personalizzata-340-pag',
    name: 'Agenda Personalizzata 340 Pag',
    price: 24.90,
    category: 'Casa',
    image: 'images/agenda340-01.jpg',
    images: ["images/agenda340-01.jpg",
      "images/agenda340-02.jpg",
      "images/agenda340-03.jpg",
      "images/agenda340-04.jpg",
      "images/agenda340-05.jpg",
      "images/agenda340-06.jpg",
      "images/agenda340-07.jpg",
      "images/agenda340-08.jpg"],
    description: `✨ Agenda Personalizzata – Con foto, frase oppure la versione in foto
Rendi unica la tua nuova agenda!
Personalizzala con una foto, un logo o una frase a tua scelta e trasforma ogni giorno in un momento di ispirazione.
Un prodotto artigianale curato nei dettagli, perfetto come regalo o compagna di lavoro e studio.

📔 Dettagli del prodotto:
📚 Contenuto: 170 fogli (340 pagine) tra planner giornaliero, note, Sudoku e mappe mentali
🖼️ Copertina rigida personalizzata con immagine, logo o testo fornito dal cliente
🔄 Rilegatura a spirale nera con elastico di chiusura
📄 Carta di alta qualità (100–120 gr)
🎁 Confezionata con cura, pronta per essere regalata

💝 Perfetta per:
Regali aziendali o di Natale
Planner personale con frase o dedica
Agenda per professionisti, studenti o creativi

💫 Ogni agenda è unica, realizzata con passione e attenzione ai dettagli.
📩 Per ordini multipli o richieste speciali, contattaci direttamente.
📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236410905598`,
    isCustomizable: true
  },
  {
    id: 'agenda-personalizzata-440-pag',
    name: 'Agenda Personalizzata 440 Pag',
    price: 32.90,
    category: 'Casa',
    image: 'images/agenda440-01.png',
    images: ["images/agenda440-01.png",
      "images/agenda440-02.jpg",
      "images/agenda440-03.jpg",
      "images/agenda440-04.jpg",
      "images/agenda440-05.jpg",
      "images/agenda440-06.jpg",
      "images/agenda440-07.jpg"],
    description: `✨ Agenda Personalizzata – Con foto, frase oppure la versione in foto
Rendi unica la tua nuova agenda!
Personalizzala con una foto, un logo o una frase a tua scelta e trasforma ogni giorno in un momento di ispirazione.
Un prodotto artigianale curato nei dettagli, perfetto come regalo o compagna di lavoro e studio.

📔 Dettagli del prodotto:
📚 Contenuto: 220 fogli (440 pagine) tra planner giornaliero, note, Sudoku e mappe mentali
🖼️ Copertina rigida personalizzata con immagine, logo o testo fornito dal cliente
🔄 Rilegatura a spirale nera con elastico di chiusura
📄 Carta di alta qualità (100–120 gr)
🎁 Confezionata con cura, pronta per essere regalata

💝 Perfetta per:
Regali aziendali o di Natale
Planner personale con frase o dedica
Agenda per professionisti, studenti o creativi

💫 Ogni agenda è unica, realizzata con passione e attenzione ai dettagli.
📩 Per ordini multipli o richieste speciali, contattaci direttamente.
📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236457203499`,
    isCustomizable: true
  },
  {
    id: 'tazza-coopia',
    name: 'Coppia Tazze San Valentino Personalizzate ',
    price: 24.90,
    category: 'Casa',
    image: 'images/tazzacoppia-01.jpg',
    images: ["images/tazzacoppia-01.jpg",
      "images/tazzacoppia-02.jpg",
      "images/tazzacoppia-03.jpg",
      "images/tazzacoppia-04.jpg"],
    description: `Sorprendi chi ami con una coppia di tazze personalizzate per San Valentino, pensate per condividere ogni giorno un momento speciale insieme.

Le tazze sono identiche (tazze copia) e vengono personalizzate secondo le tue indicazioni:
puoi scegliere una foto, una frase romantica o aggiungere nomi e una data speciale.

Un’idea regalo semplice, utile e piena di significato, perfetta per lui e lei ❤️

☕ Dettagli del prodotto
Set composto da 2 tazze uguali
Materiale: ceramica di qualità
Capacità: 330 ml
Stampa resistente e duratura
Adatte a lavastoviglie e microonde

🎁 Ideali per San Valentino - Coppie - Anniversari - Regalo romantico - personalizzato

📦 Imballaggio sicuro
🚚 Spedizione in tutta Italia

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236562923770`,
    isCustomizable: true
  },
  {
    id: 'cappellini-personalizzati',
    name: 'Cappellini con Stampa Personalizzata',
    price: 12.90,
    category: 'Casa',
    image: 'images/gorro-01.jpg',
    images: ["images/gorro-01.jpg",
      "images/gorro-02.jpg",
      "images/gorro-03.jpg",
      "images/gorro-04.jpg",
      "images/gorro-05.jpg",
      "images/gorro-06.jpg",
      "images/gorro-07.jpg",
      "images/gorro-08.jpg",
      "images/gorro-09.jpg",
      "images/gorro-10.jpg",
      "images/gorro-11.jpg",
      "images/gorro-12.jpg"],
    description: `🧢 Il tuo cappellino, la tua identità!
Distinguiti con i nostri cappellini personalizzati, perfetti per ogni occasione.
Con logo, frasi o grafiche su misura, sono ideali per:
🎁 Regali originali
🎉 Eventi e feste
🏢 Promozione aziendale o divise
🏟️ Squadre, gruppi o merchandising

✅ Stampa di alta qualità
✅ Modelli unisex, regolabili e comodi da indossare
✅ Resistenti e pensati per l’uso quotidiano
✅ Spedizione gratuita in tutta Italia

💡 Anche per un solo pezzo o grandi quantità con prezzi personalizzati!
👉 Ordina ora il tuo cappellino personalizzato e porta il tuo stile ovunque!

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236457263621`,
    isCustomizable: true
  },
  {
    id: 'palline-natale',
    name: 'Set di 3 Palline di Natale Personalizzate',
    price: 19.90,
    category: 'Casa',
    image: 'images/bolanav-01.jpg',
    images: ["images/bolanav-01.jpg",
      "images/bolanav-02.jpg",
      "images/bolanav-03.jpg",
      "images/bolanav-04.jpg",
      "images/bolanav-05.jpg",
      "images/bolanav-06.jpg",
      "images/bolanav-07.jpg",
      "images/bolanav-08.jpg"],
    description: `Set di 3 Palline di Natale Personalizzate con Foto – Decorazione Unica e Originale – Spedizione Gratis!

Rendi il tuo albero di Natale davvero speciale con questo set di 3 palline personalizzate con le tue foto preferite. Perfette come idea regalo o per decorare la tua casa con un tocco personale ed emozionante.

✅ Personalizzabili con qualsiasi immagine o design
✅ Materiale resistente e finitura lucida
✅ Ideali come regalo per famiglia, coppie o amanti degli animali
✅ Dimensione standard (circa 8 cm di diametro)
✅ Spedizione gratuita in tutta Italia!

🎁 Trasforma i tuoi ricordi in una decorazione natalizia indimenticabile!

✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236411154579`,
    isCustomizable: true
  },
  {
    id: 'magliette-personalizzate',
    name: 'Magliette personalizzate con frasi o foto',
    price: 16.90,
    category: 'Casa',
    image: 'images/maglia-01.jpg',
    images: ["images/maglia-01.jpg",
      "images/maglia-02.jpg",
      "images/maglia-03.jpg",
      "images/maglia-04.jpg",
      "images/maglia-05.jpg",
      "images/maglia-06.jpg",
      "images/maglia-07.jpg",
      "images/maglia-08.jpg",
      "images/maglia-09.jpg",
      "images/maglia-10.jpg",
      "images/maglia-11.jpg",
      "images/maglia-12.jpg",
      "images/maglia-13.jpg",
      "images/maglia-14.jpg",
      "images/maglia-15.jpg",
      "images/maglia-16.jpg",
      "images/maglia-17.jpg",
      "images/maglia-18.jpg",
      "images/maglia-19.jpg",
      "images/maglia-20.jpg",
      "images/maglia-21.jpg",
      "images/maglia-22.jpg",
      "images/maglia-23.jpg"],
    description: `📌 PUOI SCEGLIERE I MODELLI CON LE FRASI DELLE FOTO
OPPURE CREARE LA TUA MAGLIETTA PERSONALIZZATA DA ZERO!

💫 Indossa le tue parole, crea il tuo stile
Trasforma un’idea, un logo o una frase in una maglietta unica, pensata su misura per te o per il tuo business.

Le nostre magliette personalizzate sono perfette sia per uso personale che per attività commerciali, eventi, team, hotel, B&B, negozi e aziende.

🛍️ COSA INCLUDE QUESTO ANNUNCIO
✔️ Il prezzo dell’inserzione si riferisce a UNA sola stampa / UN solo logo
✔️ Se desideri aggiungere più loghi o stampe, il prezzo varia
📩 Contattaci prima o dopo l’acquisto per un preventivo personalizzato

🎨 COME FUNZIONA DOPO L’ACQUISTO
1️⃣ Dopo aver acquistato, ci contatti via messaggio
2️⃣ Scegliamo insieme colore della maglietta
3️⃣ Ci invii logo, immagine o frase da stampare
4️⃣ Ti mandiamo una ANTEPRIMA GRAFICA del risultato
5️⃣ Solo dopo la tua conferma realizziamo il prodotto finale
➡️ Così sai esattamente come verrà prima della produzione!

💼 ORDINI ALL’INGROSSO E PER AZIENDE
Hai un negozio, un’attività o devi fare molte magliette?
🔥 Super prezzi per ordini in quantità
📩 Scrivici per ricevere un preventivo su misura con sconti dedicati per rivenditori e aziende.

✨ **Esprimi il tuo brand. Racconta chi sei.

La tua maglietta parlerà per te.
💡 Ordini singoli o grandi quantità con prezzi personalizzati! 
✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236457215233`,
    isCustomizable: true
  },
  {
    id: 'magliette-polo-personalizzate',
    name: 'Magliette Polo Personalizzate con Logo o Frase',
    price: 19.90,
    category: 'Casa',
    image: 'images/polo-01.png',
    images: ["images/polo-01.png",
      "images/polo-02.png",
      "images/polo-03.jpg",
      "images/polo-04.jpg",
      "images/polo-05.jpg",
      "images/polo-06.jpg",
      "images/polo-07.jpg"],
    description: `📌 PUOI SCEGLIERE I MODELLI CON LE FRASI DELLE FOTO
OPPURE CREARE LA TUA POLO PERSONALIZZATA DA ZERO!

💫 Indossa eleganza e identità, crea il tuo stile
Trasforma un’idea, un logo o una frase in una polo unica, pensata su misura per te o per il tuo business.

Le nostre polo personalizzate con colletto sono perfette sia per uso personale che per:
attività commerciali, eventi, team, hotel, B&B, ristoranti, negozi e aziende.

🛍️ COSA INCLUDE QUESTO ANNUNCIO
✔️ Il prezzo dell’inserzione si riferisce a UNA sola stampa / UN solo logo
✔️ Se desideri aggiungere più loghi o stampe, il prezzo varia
📩 Contattaci prima o dopo l’acquisto per un preventivo personalizzato

🎨 COME FUNZIONA DOPO L’ACQUISTO
1️⃣ Dopo aver acquistato, ci contatti via messaggio
2️⃣ Scegliamo insieme colore della polo
3️⃣ Ci invii logo, immagine o frase da stampare
4️⃣ Ti mandiamo una ANTEPRIMA GRAFICA del risultato
5️⃣ Solo dopo la tua conferma realizziamo il prodotto finale
➡️ Così sai esattamente come verrà prima della produzione!

💼 ORDINI ALL’INGROSSO E PER AZIENDE
Hai un negozio, un’attività o devi fare molte polo?
🔥 Super prezzi per ordini in quantità
📩 Scrivici per ricevere un preventivo su misura con sconti dedicati per rivenditori e aziende.

✨ Esprimi il tuo brand. Racconta chi sei.

💡 Ordini singoli o grandi quantità con prezzi personalizzati!
✨ DeoStampa – una piccola azienda, grandi emozioni.`,
    ebayUrl: `https://www.ebay.it/itm/236457222959`,
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

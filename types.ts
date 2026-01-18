
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  images: string[];
  isCustomizable: boolean;
  ebayUrl: string; // Link diretto all'inserzione eBay
}

// Added CartItem interface to fix missing export error in Cart.tsx
export interface CartItem extends Product {
  quantity: number;
  customImage?: string;
  size?: string;
  selectedShape?: string;
  customText?: string;
}

// Added Order interface to fix missing export error in Cart.tsx
export interface Order {
  id: string;
  customerName: string;
  email: string;
  address: string;
  country: string;
  items: CartItem[];
  total: number;
  date: string;
  ip: string;
}

export interface VisitorInfo {
  ip: string;
  count: number;
  lastVisit: string;
}

// Added ChatMessage interface to fix missing export error in ChatBot.tsx

export enum Page {
  HOME = 'home',
  PRODUCTS = 'products',
  PRODUCT_DETAIL = 'product_detail',
  ABOUT = 'about',
  CONTACT = 'contact',
  FAQ = 'faq',
  CORPORATE = 'corporate',
  PRIVACY = 'privacy',
  TERMS = 'terms',
  REFUNDS = 'refunds',
  SHIPPING = 'shipping',
  COOKIES = 'cookies'
}

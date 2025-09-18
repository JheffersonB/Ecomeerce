import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Crema Facial Energizante",
    description: "Crema facial con extracto de café arábica que revitaliza y energiza tu piel, proporcionando hidratación profunda y un brillo natural.",
    price: 89000,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Facial",
    benefits: [
      "Hidratación profunda 24h",
      "Reduce signos de fatiga",
      "Antioxidantes naturales",
      "Mejora la elasticidad"
    ],
    ingredients: ["Extracto de café arábica", "Ácido hialurónico", "Vitamina E", "Manteca de karité"],
    inStock: true
  },
  {
    id: 2,
    name: "Exfoliante Corporal Café & Coco",
    description: "Exfoliante natural que combina granos de café molido con aceite de coco para eliminar células muertas y suavizar la piel.",
    price: 65000,
    image: "https://images.pexels.com/photos/4465421/pexels-photo-4465421.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Corporal",
    benefits: [
      "Exfoliación suave y efectiva",
      "Estimula la circulación",
      "Piel más suave y tersa",
      "Aroma relajante"
    ],
    ingredients: ["Café molido orgánico", "Aceite de coco", "Azúcar morena", "Vitamina E"],
    inStock: true
  },
  {
    id: 3,
    name: "Mascarilla Detox Café Verde",
    description: "Mascarilla purificante con café verde y arcilla bentonita que limpia profundamente los poros y controla la grasa.",
    price: 72000,
    image: "https://images.pexels.com/photos/4465430/pexels-photo-4465430.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Facial",
    benefits: [
      "Limpieza profunda de poros",
      "Control de grasa",
      "Efecto detox",
      "Piel más luminosa"
    ],
    ingredients: ["Café verde", "Arcilla bentonita", "Aloe vera", "Té verde"],
    inStock: true
  },
  {
    id: 4,
    name: "Crema Corporal Hidratante Café & Vainilla",
    description: "Crema corporal nutritiva con aroma a café y vainilla que hidrata intensamente y deja la piel sedosa al tacto.",
    price: 78000,
    image: "https://images.pexels.com/photos/4465832/pexels-photo-4465832.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Corporal",
    benefits: [
      "Hidratación intensa",
      "Aroma duradero",
      "Piel sedosa",
      "Absorción rápida"
    ],
    ingredients: ["Extracto de café", "Esencia de vainilla", "Manteca de cacao", "Aceite de jojoba"],
    inStock: true
  },
  {
    id: 5,
    name: "Serum Contorno de Ojos Cafeína",
    description: "Serum especializado para el contorno de ojos con cafeína que reduce ojeras, bolsas y líneas de expresión.",
    price: 95000,
    image: "https://images.pexels.com/photos/4465421/pexels-photo-4465421.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Facial",
    benefits: [
      "Reduce ojeras y bolsas",
      "Efecto lifting inmediato",
      "Hidratación delicada",
      "Previene arrugas"
    ],
    ingredients: ["Cafeína pura", "Péptidos", "Ácido hialurónico", "Vitamina C"],
    inStock: true
  },
  {
    id: 6,
    name: "Bálsamo Labial Café & Miel",
    description: "Bálsamo labial nutritivo con extracto de café y miel natural que protege, hidrata y repara los labios.",
    price: 35000,
    image: "https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500",
    category: "Labial",
    benefits: [
      "Hidratación profunda",
      "Protección UV natural",
      "Reparación nocturna",
      "Sabor delicioso"
    ],
    ingredients: ["Extracto de café", "Miel orgánica", "Cera de abeja", "Manteca de karité"],
    inStock: true
  }
];
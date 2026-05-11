import p1 from "@/assets/product-1.jpg";
import p2 from "@/assets/product-2.jpg";
import p3 from "@/assets/product-3.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  image: string;
  description: string;
  benefits: string[];
  ingredients: string;
  rating: number;
  reviews: number;
  category: "visage" | "corps" | "cheveux" | "cuisine";
};

export const products: Product[] = [
  {
    id: "huile-vierge",
    name: "Huile de Coco Vierge",
    tagline: "L'essentielle, pressée à froid",
    price: 24,
    image: p1,
    description:
      "Pressée à froid sous le soleil des Philippines, notre huile vierge conserve toute la douceur de la noix de coco fraîche. Une texture soyeuse, un parfum délicat.",
    benefits: ["Hydrate la peau en profondeur", "Nourrit les cheveux secs", "Idéale en cuisine"],
    ingredients: "100% huile de coco vierge biologique pressée à froid",
    rating: 4.9,
    reviews: 248,
    category: "visage",
  },
  {
    id: "baume-corps",
    name: "Baume Corps Fouetté",
    tagline: "Une caresse de coco sur la peau",
    price: 32,
    image: p2,
    description:
      "Un baume aérien fouetté à la main, qui fond délicatement au contact de la peau. Pour un rituel de soin lumineux, du matin au soir.",
    benefits: ["Texture fondante & légère", "Hydratation 24h", "Parfum doux et naturel"],
    ingredients: "Huile de coco vierge, beurre de karité, vitamine E",
    rating: 5.0,
    reviews: 187,
    category: "corps",
  },
  {
    id: "elixir-cheveux",
    name: "Élixir Cheveux & Pointes",
    tagline: "La brillance des îles, en quelques gouttes",
    price: 28,
    image: p3,
    description:
      "Un élixir précieux qui répare, nourrit et fait briller. Quelques gouttes suffisent pour des cheveux soyeux et lumineux.",
    benefits: ["Répare les pointes abîmées", "Apporte brillance naturelle", "Sans rinçage"],
    ingredients: "Huile de coco, huile d'argan, fleur de tiaré",
    rating: 4.8,
    reviews: 312,
    category: "cheveux",
  },
];

export const getProduct = (id: string) => products.find((p) => p.id === id);

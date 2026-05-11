import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { getProduct, products } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";
import { Star, Minus, Plus, Leaf, Truck, Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const reviews = [
  { name: "Élise", rating: 5, text: "Texture parfaite, parfum sublime. Je l'utilise matin et soir." },
  { name: "Manon", rating: 5, text: "Un vrai coup de cœur. La peau est nourrie sans être grasse." },
  { name: "Inès", rating: 4, text: "Très bonne huile, packaging adorable. Livraison rapide en plus !" },
];

const Produit = () => {
  const { id } = useParams();
  const product = getProduct(id || "");
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!product) return <Navigate to="/boutique" replace />;
  const others = products.filter((p) => p.id !== product.id);

  const add = () => {
    addItem(product, qty);
    toast.success(`${product.name} ajouté à votre panier 🌴`);
  };

  return (
    <Layout>
      <section className="pt-32 pb-16">
        <div className="container">
          <Link to="/boutique" className="text-sm text-muted-foreground hover:text-primary transition-breeze">← Retour à la boutique</Link>

          <div className="mt-10 grid lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="rounded-3xl overflow-hidden bg-secondary/30 aspect-[4/5] shadow-elevated">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.15 }} className="lg:pt-8">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < Math.round(product.rating) ? "fill-accent text-accent" : "text-muted"}`} />
                  ))}
                </div>
                <span>{product.rating} · {product.reviews} avis</span>
              </div>

              <h1 className="font-serif text-5xl text-cocoa leading-tight mb-3">{product.name}</h1>
              <p className="italic text-primary text-lg mb-6">{product.tagline}</p>
              <p className="text-muted-foreground leading-relaxed mb-8">{product.description}</p>

              <ul className="space-y-3 mb-10">
                {product.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-cocoa">
                    <Leaf className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-6 mb-8">
                <span className="font-serif text-4xl text-cocoa">{product.price} €</span>
                <div className="flex items-center bg-secondary/40 rounded-full p-1">
                  <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="p-2 hover:bg-background rounded-full transition-breeze" aria-label="Moins"><Minus className="w-4 h-4" /></button>
                  <span className="w-10 text-center text-sm">{qty}</span>
                  <button onClick={() => setQty((q) => q + 1)} className="p-2 hover:bg-background rounded-full transition-breeze" aria-label="Plus"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex gap-3 mb-10">
                <button onClick={add} className="flex-1 bg-primary text-primary-foreground rounded-full px-8 py-4 text-sm tracking-wide hover:bg-primary-light transition-breeze shadow-soft">
                  Ajouter au panier
                </button>
                <button className="border border-border rounded-full p-4 text-cocoa hover:bg-secondary/40 transition-breeze" aria-label="Favori"><Heart className="w-4 h-4" /></button>
              </div>

              <div className="border-t border-border/60 pt-8 space-y-4 text-sm">
                <div className="flex items-center gap-3 text-muted-foreground"><Truck className="w-4 h-4 text-primary" /> Livraison soignée en 2-4 jours</div>
                <div className="flex items-center gap-3 text-muted-foreground"><Leaf className="w-4 h-4 text-primary" /> Ingrédients : {product.ingredients}</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/20">
        <div className="container max-w-4xl">
          <h2 className="font-serif text-3xl md:text-4xl text-cocoa text-center mb-12">Ce qu'elles en disent</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.1 }} className="bg-background rounded-3xl p-6 shadow-soft">
                <div className="flex mb-3">{Array.from({ length: r.rating }).map((_, j) => <Star key={j} className="w-4 h-4 fill-accent text-accent" />)}</div>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-4">"{r.text}"</p>
                <div className="text-sm font-medium text-cocoa">{r.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container">
          <h2 className="font-serif text-3xl md:text-4xl text-cocoa text-center mb-12">Vous aimerez aussi</h2>
          <div className="grid sm:grid-cols-2 gap-10 max-w-3xl mx-auto">
            {others.map((p, i) => <ProductCard key={p.id} product={p} index={i} />)}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Produit;

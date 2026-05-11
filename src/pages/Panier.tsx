import { Layout } from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, X, ShoppingBag } from "lucide-react";

const Panier = () => {
  const { items, updateQty, removeItem, subtotal } = useCart();
  const shipping = subtotal > 50 || subtotal === 0 ? 0 : 4.9;
  const total = subtotal + shipping;

  return (
    <Layout>
      <section className="pt-36 pb-24">
        <div className="container max-w-5xl">
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3 text-center">Votre panier</p>
          <h1 className="font-serif text-5xl text-cocoa text-center mb-14">Un moment de douceur vous attend.</h1>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 rounded-full bg-secondary/40 mx-auto flex items-center justify-center mb-6">
                <ShoppingBag className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <p className="text-muted-foreground mb-8">Votre panier est encore vide. Venez explorer nos rituels.</p>
              <Link to="/boutique" className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary-light transition-breeze inline-block">
                Découvrir la boutique
              </Link>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-4">
                <AnimatePresence>
                  {items.map((it) => (
                    <motion.div
                      key={it.product.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="flex gap-5 bg-background border border-border/60 rounded-3xl p-4 shadow-soft"
                    >
                      <img src={it.product.image} alt={it.product.name} className="w-24 h-24 rounded-2xl object-cover shrink-0" />
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <h3 className="font-serif text-xl text-cocoa">{it.product.name}</h3>
                            <p className="text-xs text-muted-foreground italic mt-1">{it.product.tagline}</p>
                          </div>
                          <button onClick={() => removeItem(it.product.id)} className="text-muted-foreground hover:text-destructive transition-breeze p-1" aria-label="Retirer">
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div className="flex items-center bg-secondary/40 rounded-full p-1">
                            <button onClick={() => updateQty(it.product.id, it.quantity - 1)} className="p-1.5 hover:bg-background rounded-full" aria-label="Moins"><Minus className="w-3.5 h-3.5" /></button>
                            <span className="w-8 text-center text-sm">{it.quantity}</span>
                            <button onClick={() => updateQty(it.product.id, it.quantity + 1)} className="p-1.5 hover:bg-background rounded-full" aria-label="Plus"><Plus className="w-3.5 h-3.5" /></button>
                          </div>
                          <span className="font-serif text-lg text-cocoa">{(it.product.price * it.quantity).toFixed(2)} €</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              <div className="bg-cream-gradient rounded-3xl p-8 h-fit shadow-soft sticky top-28">
                <h2 className="font-serif text-2xl text-cocoa mb-6">Votre commande</h2>
                <div className="space-y-3 text-sm border-b border-border/60 pb-5 mb-5">
                  <div className="flex justify-between text-muted-foreground"><span>Sous-total</span><span>{subtotal.toFixed(2)} €</span></div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Livraison</span>
                    <span>{shipping === 0 ? "Offerte 🌿" : `${shipping.toFixed(2)} €`}</span>
                  </div>
                </div>
                <div className="flex justify-between font-serif text-2xl text-cocoa mb-6">
                  <span>Total</span><span>{total.toFixed(2)} €</span>
                </div>
                <Link to="/checkout" className="block text-center bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary-light transition-breeze">
                  Passer à la commande
                </Link>
                <p className="text-xs text-muted-foreground mt-4 text-center">Paiement sécurisé · Livraison soignée</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default Panier;

import { Layout } from "@/components/Layout";
import { useCart } from "@/context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Check } from "lucide-react";
import { toast } from "sonner";

const steps = ["Contact", "Livraison", "Paiement"];

const Checkout = () => {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const navigate = useNavigate();
  const shipping = subtotal > 50 ? 0 : 4.9;
  const total = subtotal + shipping;

  if (items.length === 0 && !done) return <Navigate to="/panier" replace />;

  const next = () => {
    if (step < steps.length - 1) setStep(step + 1);
    else {
      toast.success("Merci d'apporter un peu plus de naturel dans votre quotidien 🌴");
      setDone(true);
      clear();
      setTimeout(() => navigate("/"), 4000);
    }
  };

  if (done) {
    return (
      <Layout>
        <section className="pt-40 pb-32">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="container max-w-xl text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 text-primary mx-auto flex items-center justify-center mb-8">
              <Check className="w-7 h-7" strokeWidth={1.5} />
            </div>
            <h1 className="font-serif text-5xl text-cocoa mb-6">Merci infiniment.</h1>
            <p className="text-muted-foreground leading-relaxed">
              Votre commande nous parvient. Préparée à la main, avec soin, elle s'envolera bientôt vers vous.
              Votre moment de douceur arrive bientôt 🌴
            </p>
          </motion.div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-36 pb-24">
        <div className="container max-w-5xl">
          <h1 className="font-serif text-4xl md:text-5xl text-cocoa text-center mb-10">Finaliser votre commande</h1>

          {/* Progress */}
          <div className="max-w-xl mx-auto mb-14">
            <div className="flex justify-between mb-3">
              {steps.map((s, i) => (
                <div key={s} className={`text-xs tracking-wide transition-breeze ${i <= step ? "text-primary" : "text-muted-foreground"}`}>{s}</div>
              ))}
            </div>
            <div className="h-1 bg-secondary/50 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: 0 }}
                animate={{ width: `${((step + 1) / steps.length) * 100}%` }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="bg-background border border-border/60 rounded-3xl p-8 shadow-soft space-y-5"
                >
                  {step === 0 && (
                    <>
                      <h2 className="font-serif text-2xl text-cocoa mb-2">Vos coordonnées</h2>
                      <Field label="E-mail" type="email" />
                      <Field label="Téléphone" />
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <h2 className="font-serif text-2xl text-cocoa mb-2">Adresse de livraison</h2>
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Prénom" />
                        <Field label="Nom" />
                      </div>
                      <Field label="Adresse" />
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Code postal" />
                        <Field label="Ville" />
                      </div>
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h2 className="font-serif text-2xl text-cocoa mb-2">Paiement sécurisé</h2>
                      <Field label="Numéro de carte" placeholder="•••• •••• •••• ••••" />
                      <div className="grid grid-cols-2 gap-4">
                        <Field label="Expiration" placeholder="MM/AA" />
                        <Field label="CVC" />
                      </div>
                      <p className="text-xs text-muted-foreground pt-2">Paiement chiffré · Aucune donnée n'est conservée.</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-between mt-6">
                <button
                  disabled={step === 0}
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  className="text-sm text-muted-foreground hover:text-cocoa disabled:opacity-30 transition-breeze"
                >
                  ← Précédent
                </button>
                <button
                  onClick={next}
                  className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary-light transition-breeze shadow-soft"
                >
                  {step === steps.length - 1 ? `Régler ${total.toFixed(2)} €` : "Continuer"}
                </button>
              </div>
            </div>

            <div className="bg-cream-gradient rounded-3xl p-6 h-fit shadow-soft">
              <h3 className="font-serif text-xl text-cocoa mb-4">Récapitulatif</h3>
              <div className="space-y-3 mb-5">
                {items.map((it) => (
                  <div key={it.product.id} className="flex gap-3 text-sm">
                    <img src={it.product.image} alt="" className="w-12 h-12 rounded-xl object-cover" />
                    <div className="flex-1">
                      <div className="text-cocoa">{it.product.name}</div>
                      <div className="text-xs text-muted-foreground">x{it.quantity}</div>
                    </div>
                    <span className="text-cocoa">{(it.product.price * it.quantity).toFixed(2)} €</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border/60 pt-4 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>Sous-total</span><span>{subtotal.toFixed(2)} €</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Livraison</span><span>{shipping === 0 ? "Offerte" : `${shipping.toFixed(2)} €`}</span></div>
                <div className="flex justify-between font-serif text-xl text-cocoa pt-2"><span>Total</span><span>{total.toFixed(2)} €</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Field = ({ label, type = "text", placeholder = "" }: { label: string; type?: string; placeholder?: string }) => (
  <div>
    <label className="text-xs tracking-wide text-cocoa/70 mb-1.5 block">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-secondary/30 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-breeze"
    />
  </div>
);

export default Checkout;

import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { useState } from "react";

const categories = [
  { id: "all", label: "Tout" },
  { id: "visage", label: "Visage" },
  { id: "corps", label: "Corps" },
  { id: "cheveux", label: "Cheveux" },
];

const Boutique = () => {
  const [cat, setCat] = useState("all");
  const filtered = cat === "all" ? products : products.filter((p) => p.category === cat);
  return (
    <Layout>
      <section className="pt-36 pb-16 bg-cream-gradient">
        <div className="container text-center max-w-2xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-primary tracking-[0.3em] text-xs uppercase mb-4">La boutique</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="font-serif text-5xl md:text-6xl text-cocoa text-balance">
            Choisissez votre <em className="text-primary">rituel</em>.
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.2 }} className="mt-6 text-muted-foreground leading-relaxed">
            Une sélection courte, pensée pour vous accompagner du matin au soir.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="flex justify-center gap-2 mb-14 flex-wrap">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setCat(c.id)}
                className={`rounded-full px-6 py-2.5 text-sm tracking-wide transition-breeze ${
                  cat === c.id ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary/40 text-cocoa hover:bg-secondary"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Boutique;

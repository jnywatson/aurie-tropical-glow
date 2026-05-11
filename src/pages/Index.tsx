import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { ProductCard } from "@/components/ProductCard";
import { PalmDecor } from "@/components/PalmDecor";
import { products } from "@/data/products";
import { Leaf, Sparkles, ChefHat, Heart } from "lucide-react";
import hero from "@/assets/hero.jpg";
import about from "@/assets/about.jpg";

const benefits = [
  { icon: Sparkles, title: "Pour la peau", text: "Une hydratation lumineuse, comme une caresse de soleil au matin." },
  { icon: Leaf, title: "Pour les cheveux", text: "Brillance et douceur retrouvées, mèche après mèche." },
  { icon: ChefHat, title: "En cuisine", text: "Le goût subtil des îles dans vos plats les plus simples." },
  { icon: Heart, title: "Bien-être", text: "Un rituel doux à offrir à votre corps, chaque jour." },
];

const testimonials = [
  { name: "Camille L.", text: "Une texture incroyable, un parfum qui me transporte ailleurs. Mon rituel du soir préféré.", city: "Paris" },
  { name: "Sofia M.", text: "Mes cheveux n'ont jamais été aussi soyeux. Et le pot est si beau dans ma salle de bain.", city: "Lyon" },
  { name: "Léa B.", text: "On sent l'authenticité dans chaque détail. Aurie c'est devenu un vrai moment de douceur.", city: "Bordeaux" },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero} alt="Noix de coco fraîche au lever du soleil sur une plage tropicale" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-b from-cocoa/30 via-cocoa/10 to-cocoa/40" />
        </div>

        <PalmDecor className="absolute -top-10 -left-16 w-[280px] text-primary/40 hidden md:block" />
        <PalmDecor className="absolute -top-20 -right-20 w-[320px] text-primary/30 hidden md:block" flip />

        <div className="container relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="text-background/80 tracking-[0.3em] text-xs uppercase mb-6">Naturel · Artisanal · Lumineux</p>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[1.05] mb-8 text-balance">
              Le soleil <em className="text-accent not-italic">en pot</em>,<br />la pureté en rituel.
            </h1>
            <p className="text-background/85 text-lg md:text-xl max-w-lg leading-relaxed mb-10 font-light">
              Offrir du naturel à votre quotidien. Notre huile de coco vierge, pressée à froid, vous invite à un moment de douceur tropicale.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/boutique"
                className="bg-primary text-primary-foreground rounded-full px-8 py-4 text-sm tracking-wide hover:bg-primary-light transition-breeze shadow-elevated"
              >
                Découvrir la pureté Aurie
              </Link>
              <Link
                to="/a-propos"
                className="text-background border border-background/40 rounded-full px-8 py-4 text-sm tracking-wide hover:bg-background/10 transition-breeze backdrop-blur-sm"
              >
                Notre histoire
              </Link>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-background/60 text-xs tracking-[0.3em]"
        >
          <span className="animate-shimmer">DESCENDRE</span>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="py-32 bg-cream-gradient">
        <div className="container max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-primary tracking-[0.3em] text-xs uppercase mb-6"
          >
            Bienvenue chez Aurie
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl text-cocoa leading-tight text-balance"
          >
            Une huile, un rituel, <em className="text-primary">une promesse</em> de douceur.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mt-8 text-muted-foreground leading-relaxed text-lg"
          >
            Chaque pot d'Aurie raconte un matin tropical : la rosée sur les feuilles, le parfum sucré des cocotiers,
            le soin patient de mains artisanes. Une parenthèse sensorielle dans votre quotidien.
          </motion.p>
        </div>
      </section>

      {/* PRODUITS VEDETTES */}
      <section className="py-24">
        <div className="container">
          <div className="flex items-end justify-between mb-14 flex-wrap gap-4">
            <div>
              <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Nos essentiels</p>
              <h2 className="font-serif text-4xl md:text-5xl text-cocoa">Les rituels Aurie</h2>
            </div>
            <Link to="/boutique" className="text-primary text-sm hover:text-primary-light transition-breeze tracking-wide">
              Voir toute la boutique →
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* BIENFAITS */}
      <section className="py-32 bg-secondary/30 relative overflow-hidden">
        <PalmDecor className="absolute top-10 right-0 w-[200px] text-primary/20 hidden md:block" flip />
        <div className="container relative">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Bienfaits</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cocoa text-balance">
              Une nature généreuse, <em className="text-primary">mille usages</em>.
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-background/80 backdrop-blur-sm rounded-3xl p-8 shadow-soft transition-breeze"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <b.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif text-2xl text-cocoa mb-2">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HISTOIRE */}
      <section className="py-32">
        <div className="container grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-elevated"
          >
            <img src={about} alt="Récolte artisanale des noix de coco" loading="lazy" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <p className="text-primary tracking-[0.3em] text-xs uppercase mb-3">Notre histoire</p>
            <h2 className="font-serif text-4xl md:text-5xl text-cocoa mb-6 leading-tight text-balance">
              Du cocotier jusqu'à votre <em className="text-primary">salle de bain</em>.
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Aurie est née d'une rencontre : celle de familles d'artisans aux Philippines et de notre envie d'apporter
              un peu de leur savoir-faire dans vos rituels.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Chaque pot est pressé à froid, sans solvant, dans le respect du fruit et de la terre. Une huile vivante,
              comme au tout premier jour.
            </p>
            <Link
              to="/a-propos"
              className="inline-block text-primary border-b border-primary/40 pb-1 text-sm tracking-wide hover:border-primary transition-breeze"
            >
              Découvrir notre histoire
            </Link>
          </div>
        </div>
      </section>

      {/* TÉMOIGNAGES */}
      <section className="py-32 bg-cocoa text-cocoa-foreground">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-accent tracking-[0.3em] text-xs uppercase mb-3">Elles en parlent</p>
            <h2 className="font-serif text-4xl md:text-5xl text-balance">Une communauté lumineuse.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, delay: i * 0.15 }}
                className="bg-cocoa-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-cocoa-foreground/10"
              >
                <div className="text-accent text-3xl font-serif leading-none mb-4">"</div>
                <p className="text-cocoa-foreground/85 leading-relaxed font-light italic mb-6">{t.text}</p>
                <div className="text-sm">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-cocoa-foreground/50 text-xs mt-1">{t.city}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;

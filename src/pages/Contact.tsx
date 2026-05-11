import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Votre prénom, s'il vous plaît").max(80),
  email: z.string().trim().email("Une adresse e-mail valide"),
  message: z.string().trim().min(5, "Quelques mots de plus 🌿").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) return toast.error(r.error.issues[0].message);
    toast.success("Merci, nous vous répondons très vite 🌴");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <section className="pt-36 pb-12 bg-cream-gradient">
        <div className="container text-center max-w-2xl">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="text-primary tracking-[0.3em] text-xs uppercase mb-4">Contact</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="font-serif text-5xl md:text-6xl text-cocoa text-balance">Parlons douceur.</motion.h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Une question, un conseil, une envie de partager ? Nous lisons chaque message avec attention.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container grid lg:grid-cols-5 gap-12 max-w-5xl">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><Mail className="w-4 h-4" /></div>
              <div>
                <h3 className="font-serif text-xl text-cocoa">E-mail</h3>
                <p className="text-sm text-muted-foreground mt-1">bonjour@aurie.fr</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><MapPin className="w-4 h-4" /></div>
              <div>
                <h3 className="font-serif text-xl text-cocoa">Atelier</h3>
                <p className="text-sm text-muted-foreground mt-1">12 rue des Cocotiers<br />75011 Paris</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0"><MessageCircle className="w-4 h-4" /></div>
              <div>
                <h3 className="font-serif text-xl text-cocoa">Réponse</h3>
                <p className="text-sm text-muted-foreground mt-1">Sous 24h, du lundi au vendredi.</p>
              </div>
            </div>
          </div>

          <form onSubmit={submit} className="lg:col-span-3 bg-background border border-border/60 rounded-3xl p-8 md:p-10 shadow-soft space-y-5">
            <div>
              <label className="text-xs tracking-wide text-cocoa/70 mb-2 block">Prénom</label>
              <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-secondary/30 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-breeze" />
            </div>
            <div>
              <label className="text-xs tracking-wide text-cocoa/70 mb-2 block">E-mail</label>
              <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-secondary/30 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-breeze" />
            </div>
            <div>
              <label className="text-xs tracking-wide text-cocoa/70 mb-2 block">Votre message</label>
              <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-secondary/30 rounded-2xl px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-breeze resize-none" />
            </div>
            <button className="bg-primary text-primary-foreground rounded-full px-8 py-3.5 text-sm tracking-wide hover:bg-primary-light transition-breeze">
              Envoyer le message
            </button>
          </form>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;

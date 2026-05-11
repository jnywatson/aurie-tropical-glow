import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return toast.error("Une adresse e-mail valide, s'il vous plaît 🌿");
    toast.success("Votre moment de douceur arrive bientôt 🌴");
    setEmail("");
  };
  return (
    <footer className="bg-cocoa text-cocoa-foreground/90 mt-32">
      <div className="container py-20">
        <div className="grid md:grid-cols-3 gap-16 mb-16">
          <div>
            <Link to="/" className="font-serif text-3xl">
              Aurie<span className="text-accent">.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-cocoa-foreground/70 max-w-xs">
              Un rituel tropical, doux et lumineux. L'huile de coco pressée à froid, comme aux premiers matins.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-5">Explorer</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/boutique" className="hover:text-accent transition-breeze">La boutique</Link></li>
              <li><Link to="/a-propos" className="hover:text-accent transition-breeze">Notre histoire</Link></li>
              <li><Link to="/contact" className="hover:text-accent transition-breeze">Nous écrire</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl mb-5">Restez en douceur</h4>
            <p className="text-sm text-cocoa-foreground/70 mb-4">
              Recevez nos rituels et nouveautés, sans bruit.
            </p>
            <form onSubmit={submit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre e-mail"
                className="flex-1 bg-cocoa-foreground/10 border border-cocoa-foreground/20 rounded-full px-5 py-2.5 text-sm placeholder:text-cocoa-foreground/40 focus:outline-none focus:border-accent transition-breeze"
              />
              <button className="bg-accent text-cocoa rounded-full p-2.5 hover:bg-accent/90 transition-breeze" aria-label="S'inscrire">
                <Mail className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-cocoa-foreground/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-cocoa-foreground/50">
          <p>© {new Date().getFullYear()} Aurie — Fait avec douceur.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-accent transition-breeze flex items-center gap-2">
              <Instagram className="w-4 h-4" /> @aurie.naturals
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

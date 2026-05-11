import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { to: "/", label: "Accueil" },
  { to: "/boutique", label: "Boutique" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  const solid = scrolled || !isHome;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-breeze ${
        solid
          ? "bg-background/85 backdrop-blur-xl border-b border-border/40 shadow-soft"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="font-serif text-2xl tracking-wide">
          <span className={solid ? "text-cocoa" : "text-background"}>Aurie</span>
          <span className="text-accent">.</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-sm tracking-wide transition-breeze relative ${
                  solid ? "text-cocoa/80 hover:text-primary" : "text-background/90 hover:text-background"
                } ${isActive ? "after:scale-x-100" : "after:scale-x-0"}
                after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-full after:bg-current after:origin-left after:transition-transform after:duration-500`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/panier"
            aria-label="Panier"
            className={`relative p-2.5 rounded-full transition-breeze hover:bg-background/20 ${
              solid ? "text-cocoa" : "text-background"
            }`}
          >
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-accent text-cocoa text-[10px] font-medium w-5 h-5 rounded-full flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden p-2 ${solid ? "text-cocoa" : "text-background"}`}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border/40 overflow-hidden"
          >
            <nav className="container py-6 flex flex-col gap-4">
              {links.map((l) => (
                <NavLink key={l.to} to={l.to} className="text-cocoa/80 text-lg font-serif">
                  {l.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

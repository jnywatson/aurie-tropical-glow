import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";
import { Product } from "@/data/products";

export const ProductCard = ({ product, index = 0 }: { product: Product; index?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.9, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{ y: -6 }}
    className="group"
  >
    <Link to={`/produit/${product.id}`} className="block">
      <div className="relative overflow-hidden rounded-3xl bg-muted shadow-soft aspect-[4/5] mb-5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background/85 backdrop-blur-md rounded-full px-3 py-1 text-xs flex items-center gap-1 text-cocoa">
          <Star className="w-3 h-3 fill-accent text-accent" />
          {product.rating}
        </div>
      </div>
      <div className="px-1">
        <h3 className="font-serif text-2xl text-cocoa mb-1">{product.name}</h3>
        <p className="text-sm text-muted-foreground italic mb-3">{product.tagline}</p>
        <div className="flex items-center justify-between">
          <span className="text-cocoa font-medium">{product.price} €</span>
          <span className="text-xs text-primary tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-breeze">
            Découvrir →
          </span>
        </div>
      </div>
    </Link>
  </motion.div>
);

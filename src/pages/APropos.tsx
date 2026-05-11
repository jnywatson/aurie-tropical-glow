import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero.jpg";

const values = [
  { title: "Pressé à froid", text: "Pour préserver tous les nutriments et le parfum vrai de la noix de coco." },
  { title: "Sans solvant", text: "Aucun produit chimique. Juste le fruit, l'eau, le soleil et le savoir-faire." },
  { title: "Commerce juste", text: "Nos artisans partenaires sont rémunérés équitablement, avec respect et long terme." },
];

const APropos = () => (
  <Layout>
    <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
      <img src={hero} alt="Sunrise tropical" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 to-transparent" />
      <div className="container relative z-10 pb-16 text-background">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="tracking-[0.3em] text-xs uppercase mb-4">Notre histoire</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="font-serif text-5xl md:text-7xl max-w-3xl text-balance leading-[1.05]">
          Une rencontre, <em className="text-accent not-italic">un fruit</em>, un rituel.
        </motion.h1>
      </div>
    </section>

    <section className="py-24">
      <div className="container max-w-3xl">
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="text-xl font-serif italic text-cocoa leading-relaxed text-center mb-12">
          "Tout a commencé un matin de mai, sur une plage des Philippines. Le soleil se levait, et les artisans
          ouvraient leurs premières noix. Ce parfum-là, on n'a jamais voulu le quitter."
        </motion.p>
        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Aurie est née d'une intuition simple : la nature, lorsqu'on la respecte, n'a besoin d'aucun artifice. Notre huile
            de coco vierge est pressée à froid dans de petits ateliers familiaux, dans le respect du fruit, des hommes et de la terre.
          </p>
          <p>
            Nous avons longtemps cherché les meilleurs partenaires. Ceux qui prennent le temps. Qui savent que la patience
            donne au produit sa douceur. Aujourd'hui, chaque pot Aurie porte cette histoire — celle d'un savoir-faire transmis
            et d'une attention sincère.
          </p>
        </div>
      </div>
    </section>

    <section className="py-24 bg-secondary/30">
      <div className="container">
        <h2 className="font-serif text-4xl md:text-5xl text-cocoa text-center mb-16 text-balance">Nos engagements, en toute transparence.</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.1 }} className="bg-background rounded-3xl p-8 shadow-soft">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-serif mb-5">{i + 1}</div>
              <h3 className="font-serif text-2xl text-cocoa mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-primary tracking-[0.3em] text-xs uppercase mb-4">L'atelier</p>
          <h2 className="font-serif text-4xl md:text-5xl text-cocoa mb-6 text-balance">Un savoir-faire qui prend son temps.</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            La pulpe est râpée, séchée à l'ombre puis pressée à froid en petites quantités. Un geste lent, qui donne à
            l'huile sa pureté, sa fluidité et son parfum.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Rien n'est ajouté, rien n'est retiré. Ce que vous tenez entre vos mains est exactement ce qui sort de l'atelier.
          </p>
        </div>
        <motion.img initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 1.2 }} src={about} alt="Atelier artisanal" loading="lazy" className="rounded-3xl shadow-elevated aspect-[4/5] object-cover" />
      </div>
    </section>
  </Layout>
);

export default APropos;

import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Compass, MapPin, Wind, Globe, ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { translations, type Lang } from "@/i18n";

const queryClient = new QueryClient();

const LANG_LABELS: Record<Lang, string> = { en: "EN", fr: "FR", ar: "AR" };

const SECTION_IDS = ["destinations", "philosophy", "journal", "bookings"];

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const navHeight = 80;
  const top = el.getBoundingClientRect().top + window.scrollY - navHeight;
  window.scrollTo({ top, behavior: "smooth" });
}

const DEST_IMAGES = [
  `${import.meta.env.BASE_URL}images/patagonia.png`,
  `${import.meta.env.BASE_URL}images/sahara.png`,
  `${import.meta.env.BASE_URL}images/fjords.png`,
  `${import.meta.env.BASE_URL}images/kyoto.png`,
];

function Home() {
  const [lang, setLang] = useState<Lang>("en");
  const t = translations[lang];

  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const spacerY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      dir={t.dir}
      className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground overflow-x-hidden"
    >
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/50 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="font-serif font-bold text-2xl tracking-widest text-foreground">
            {t.nav.brand}
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex gap-8 items-center">
            {t.nav.items.map((item, i) => (
              <a
                key={item}
                href={`#${SECTION_IDS[i]}`}
                onClick={(e) => { e.preventDefault(); scrollToSection(SECTION_IDS[i]); }}
                className="text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}

            {/* Language switcher */}
            <div className="flex items-center gap-1 border border-border/60 rounded-none px-1 py-1">
              {(["en", "fr", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none px-6 py-6 uppercase tracking-widest text-xs transition-all">
              {t.nav.cta}
            </Button>
          </div>

          {/* Mobile: language + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <div className="flex items-center gap-1 border border-border/60 px-1 py-1">
              {(["en", "fr", "ar"] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-xs font-semibold uppercase tracking-widest transition-colors ${
                    lang === l
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-primary"
                  }`}
                >
                  {LANG_LABELS[l]}
                </button>
              ))}
            </div>
            <button
              className="text-foreground"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden bg-background/95 backdrop-blur-md border-t border-border/50"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {t.nav.items.map((item, i) => (
                  <a
                    key={item}
                    href={`#${SECTION_IDS[i]}`}
                    onClick={(e) => { e.preventDefault(); setMobileOpen(false); setTimeout(() => scrollToSection(SECTION_IDS[i]), 300); }}
                    className="text-sm font-medium tracking-wide uppercase text-foreground/80 hover:text-primary transition-colors py-2 border-b border-border/30 last:border-0"
                  >
                    {item}
                  </a>
                ))}
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-none px-6 py-5 uppercase tracking-widest text-xs mt-2">
                  {t.nav.cta}
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 1. Hero */}
      <section className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/hero.png`}
            alt="Solitary traveler on a sharp mountain ridge"
            className="w-full h-full object-cover object-center scale-105"
          />
        </motion.div>

        <div className="relative z-20 max-w-5xl mx-auto px-6 text-center mt-20">
          <motion.p
            key={lang + "-hero-eyebrow"}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm md:text-base mb-6"
          >
            {t.hero.eyebrow}
          </motion.p>
          <motion.h1
            key={lang + "-hero-title"}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl xl:text-9xl leading-[1.1] font-bold text-foreground mb-8"
          >
            {t.hero.title1} <br />
            <span className="italic font-light text-accent">{t.hero.title2}</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Button className="bg-transparent border border-foreground/30 hover:border-primary hover:bg-primary/10 text-foreground font-semibold rounded-none px-8 py-7 uppercase tracking-widest text-sm transition-all group">
              {t.hero.cta}
              <ArrowRight className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${t.dir === "rtl" ? "mr-3 rotate-180" : "ml-3"}`} />
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
        </motion.div>
      </section>

      {/* 2. Philosophy */}
      <section id="philosophy" className="py-32 md:py-48 bg-background relative z-20">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <Compass className="w-12 h-12 mx-auto text-accent mb-8 opacity-80" />
            <h2 className="font-serif text-3xl md:text-5xl leading-tight text-foreground mb-10">
              {t.philosophy.heading1} <br />
              <span className="text-foreground/50">{t.philosophy.heading2}</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-light max-w-2xl mx-auto">
              {t.philosophy.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. Destinations */}
      <section id="destinations" className="py-24 bg-background relative z-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl text-foreground">
              {t.destinations.heading}{" "}
              <span className="italic text-primary">{t.destinations.headingAccent}</span>
            </h2>
            <p className="mt-4 text-muted-foreground tracking-wide uppercase text-sm">
              {t.destinations.sub}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button
              variant="link"
              className="text-foreground hover:text-primary uppercase tracking-widest text-xs p-0 h-auto font-semibold"
            >
              {t.destinations.viewAll}{" "}
              <ArrowUpRight className={`w-4 h-4 ${t.dir === "rtl" ? "mr-2" : "ml-2"}`} />
            </Button>
          </motion.div>
        </div>

        <div className="flex overflow-x-auto pb-16 px-6 md:px-12 gap-8 snap-x snap-mandatory hide-scrollbar">
          {t.destinations.items.map((dest, i) => (
            <motion.div
              key={dest.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="min-w-[85vw] md:min-w-[400px] max-w-[450px] snap-center group relative cursor-pointer"
            >
              <div className="relative h-[600px] overflow-hidden bg-muted">
                <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 z-10" />
                <img
                  src={DEST_IMAGES[i]}
                  alt={dest.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
                  <p className="text-primary text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                    {dest.subtitle}
                  </p>
                  <h3 className="font-serif text-3xl text-foreground mb-4">{dest.title}</h3>
                  <div className="h-[1px] w-0 bg-accent group-hover:w-full transition-all duration-700 mb-4" />
                  <p className="text-muted-foreground text-sm font-light leading-relaxed transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {dest.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Parallax Banner */}
      <section className="relative h-[80vh] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: spacerY }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-background/60 z-10" />
          <img
            src={`${import.meta.env.BASE_URL}images/spacer.png`}
            alt="Atmospheric texture"
            className="w-full h-full object-cover scale-110"
          />
        </motion.div>
        <div className="relative z-20 text-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-5xl md:text-7xl text-foreground leading-tight italic font-light mb-8">
              {t.spacer.line1} <br />
              {t.spacer.line2} <br />
              {t.spacer.line3}
            </h2>
            <p className="text-foreground/80 uppercase tracking-[0.4em] text-xs font-semibold">
              {t.spacer.sub}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 5. Journal */}
      <section id="journal" className="py-24 bg-background relative z-20 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="font-serif text-4xl text-foreground">{t.journal.heading}</h2>
            <p className="mt-4 text-muted-foreground tracking-wide uppercase text-sm">{t.journal.sub}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {t.journal.articles.map((article, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="h-[300px] overflow-hidden bg-muted mb-6">
                  <img
                    src={i === 0 ? `${import.meta.env.BASE_URL}images/fjords.png` : `${import.meta.env.BASE_URL}images/sahara.png`}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <p className="text-primary text-xs uppercase tracking-widest mb-3">{article.tag}</p>
                <h3 className="font-serif text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground font-light line-clamp-2">{article.excerpt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Features */}
      <section className="py-32 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16 md:gap-8 text-center md:text-start">
            {t.features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              >
                {i === 0 && <MapPin className="w-8 h-8 text-primary mb-6 mx-auto md:mx-0" />}
                {i === 1 && <Wind className="w-8 h-8 text-accent mb-6 mx-auto md:mx-0" />}
                {i === 2 && <Globe className="w-8 h-8 text-primary mb-6 mx-auto md:mx-0" />}
                <h3 className="font-serif text-2xl text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed font-light">{feature.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Testimonial */}
      <section className="py-24 bg-background relative z-20 border-t border-border/50">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Compass className="w-8 h-8 mx-auto text-accent mb-12 opacity-50" />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-serif text-2xl md:text-4xl text-foreground leading-relaxed italic mb-8">
              "{t.testimonial.quote}"
            </p>
            <p className="text-primary text-sm uppercase tracking-widest font-semibold">
              {t.testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs uppercase tracking-widest mt-1">
              {t.testimonial.trip}
            </p>
          </motion.div>
        </div>
      </section>

      {/* 8. Footer / CTA */}
      <footer id="bookings" className="relative pt-32 pb-12 bg-background border-t border-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 mb-32">
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8">
            {t.footer.heading1} <br /> {t.footer.heading2}
          </h2>
          <p className="text-muted-foreground mb-12 text-lg">{t.footer.body}</p>
          <Button className="bg-foreground hover:bg-foreground/90 text-background font-bold rounded-none px-12 py-7 uppercase tracking-widest text-sm transition-all shadow-xl hover:shadow-primary/20">
            {t.footer.cta}
          </Button>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center relative z-10 border-t border-border/50 pt-8 gap-8">
          <div className="font-serif font-bold text-xl tracking-widest text-foreground">
            {t.nav.brand}
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground font-medium uppercase tracking-wider">
            {t.footer.links.map((link) => (
              <a key={link} href="#" className="hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
          <p className="text-muted-foreground/50 text-xs">{t.footer.copy}</p>
        </div>
      </footer>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

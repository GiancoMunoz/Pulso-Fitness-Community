import { motion, AnimatePresence } from "motion/react";
import { Instagram, MessageCircle, Check, MapPin, Clock, Star, Dumbbell, Users, Calendar, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = "526242656601";
const BASE_MESSAGE = "Hola me pasan el link de pago? quiero ser parte de pulso!";

const PlanCard = ({ title, price, subtitle, features, highlight = false, badge = "" }: any) => {
  const handleSelect = () => {
    const message = encodeURIComponent(`${BASE_MESSAGE} Me interesa el plan ${title}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-8 rounded-2xl border ${
        highlight 
          ? "border-gold-400 bg-zinc-900/50 shadow-2xl shadow-gold-500/10" 
          : "border-zinc-800 bg-zinc-900/30"
      } flex flex-col h-full transition-all hover:border-gold-500/50`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold-500 text-black text-xs font-bold uppercase tracking-widest">
          {badge}
        </div>
      )}
      <div className="mb-6">
        <h3 className={`text-2xl font-heading font-bold mb-2 ${highlight ? "gold-text" : "text-white"}`}>
          {title}
        </h3>
        <p className="text-zinc-400 text-sm mb-4">{subtitle}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-white">${price}</span>
          <span className="text-zinc-500">/mensual</span>
        </div>
      </div>

      <div className="space-y-4 mb-8 flex-grow">
        {features.map((feature: string, idx: number) => (
          <div key={idx} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
            <span className="text-zinc-300 text-sm leading-relaxed">{feature}</span>
          </div>
        ))}
      </div>

      <button 
        onClick={handleSelect}
        className={`w-full py-4 rounded-xl font-bold transition-all active:scale-95 flex items-center justify-center gap-2 ${
          highlight 
            ? "gold-gradient text-black hover:opacity-90" 
            : "bg-white text-black hover:bg-zinc-200"
        }`}
      >
        Quiero ser parte <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
};


export default function App() {
  const [showFAB, setShowFAB] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowFAB(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleGeneralContact = () => {
    const message = encodeURIComponent(BASE_MESSAGE);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const plans = [
    {
      title: "SOLO GYM",
      price: "1,800",
      subtitle: "Enfoque total en tu entrenamiento",
      features: [
        "Acceso ilimitado al área de pesas",
        "Equipamiento de última generación",
        "6 meses por $10,200 (+1 mes gratis)",
        "12 meses por $20,400 (+2 meses gratis)",
        "Inscripción sin costo en preventa"
      ]
    },
    {
      title: "PLUS",
      price: "3,450",
      subtitle: "Variedad y potencia",
      highlight: true,
      badge: "Más Popular",
      features: [
        "Todo lo de Solo Gym",
        "6 clases grupales al mes",
        "6 meses por $18,650",
        "36 clases incluidas en el paquete",
        "Acceso a vestidores premium",
        "Inscripción sin costo en preventa"
      ]
    },
    {
      title: "VIP",
      price: "4,800",
      subtitle: "La experiencia completa Pulso",
      features: [
        "Experiencia completa Pulso",
        "Gym ilimitado",
        "12 clases al mes",
        "Acceso a evento Rooftop mensual (1 acceso)",
        "6 meses por $26,750",
        "Atención personalizada prioritaria",
        "Inscripción sin costo en preventa"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black font-sans selection:bg-gold-500 selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-center relative">
          {/* Desktop Links (Absolute positioned to keep logo centered) */}
          <div className="hidden lg:flex absolute left-6 items-center gap-8 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
            <a href="#planes" className="hover:text-gold-400 transition-colors">Planes</a>
            <a href="#beneficios" className="hover:text-gold-400 transition-colors">Beneficios</a>
          </div>

          <div className="hidden lg:flex absolute right-6 items-center gap-4">
            <button 
              onClick={handleGeneralContact}
              className="px-6 py-2 bg-white text-black text-[10px] font-bold rounded-full uppercase tracking-widest hover:bg-gold-200 transition-all"
            >
              Quiero ser parte
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-56 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-gold-600 rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-gold-900 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="inline-block px-4 py-1 rounded-full border border-gold-500/30 bg-gold-500/5 text-gold-400 text-xs font-bold uppercase tracking-[0.3em] mb-8"
          >
            Preventa Fundador
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-8xl font-heading font-bold mb-8 tracking-tight leading-tight"
          >
            FORJA TU <br />
            <span className="gold-text">LEGADO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Acceso limitado • Lugares exclusivos. Únete a la comunidad fitness más exclusiva y asegura tu lugar en nuestra preventa especial.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={() => document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-4 gold-gradient text-black font-bold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2"
            >
              Quiero ser parte <ArrowRight className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-4 text-zinc-500 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-black bg-zinc-800" />
                ))}
              </div>
              <span>+50 fundadores ya inscritos</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Features */}
      <section id="beneficios" className="py-20 px-6 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: Dumbbell, label: "Equipo Pro", val: "Premium" },
            { icon: Users, label: "Comunidad", val: "Exclusiva" },
            { icon: Calendar, label: "Clases", val: "Variadas" },
            { icon: Star, label: "Experiencia", val: "VIP" }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <stat.icon className="w-8 h-8 text-gold-500 mx-auto mb-4" />
              <div className="text-2xl font-bold mb-1">{stat.val}</div>
              <div className="text-zinc-500 text-xs uppercase tracking-widest">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planes" className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">Membresías de Fundador</h2>
            <p className="text-zinc-400 max-w-xl mx-auto">
              Inscripción sin costo durante la preventa. <br />
              <span className="text-gold-400 font-bold">Ahorra $1,200 hoy mismo.</span>
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, idx) => (
              <PlanCard key={idx} {...plan} />
            ))}
          </div>

          <div className="mt-16 p-8 rounded-2xl border border-zinc-800 bg-zinc-900/20 text-center max-w-3xl mx-auto">
            <p className="text-zinc-400 text-sm mb-4 italic">
              "Lugares limitados. Se asignan por estricto orden de confirmación."
            </p>
            <div className="flex items-center justify-center gap-2 text-gold-500 font-bold">
              <Clock className="w-4 h-4" />
              <span>La preventa termina pronto</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight">
                ¿TIENES <br />
                <span className="gold-text">PREGUNTAS?</span>
              </h2>
              <p className="text-zinc-400 text-lg mb-12">
                Estamos aquí para ayudarte a dar el primer paso hacia tu mejor versión. Contáctanos directamente por WhatsApp o síguenos en Instagram.
              </p>
              
              <div className="space-y-6">
                <button 
                  onClick={handleGeneralContact}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-gold-500 transition-all group text-left"
                >
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-gold-500/10 transition-all">
                    <MessageCircle className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">WhatsApp</div>
                    <div className="text-lg">+52 624 265 6601</div>
                  </div>
                </button>

                <a 
                  href="https://instagram.com/pulsofitnesscommunity" 
                  target="_blank"
                  className="flex items-center gap-4 p-4 rounded-xl border border-zinc-800 hover:border-gold-500 transition-all group"
                >
                  <div className="w-12 h-12 rounded-lg bg-zinc-900 flex items-center justify-center group-hover:bg-gold-500/10 transition-all">
                    <Instagram className="w-6 h-6 text-gold-500" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500 uppercase tracking-widest font-bold">Instagram</div>
                    <div className="text-lg">@pulsofitnesscommunity</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-zinc-800">
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1000" 
                  alt="Fitness Gym" 
                  className="w-full h-full object-cover opacity-60"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-black/60 backdrop-blur-md rounded-2xl border border-white/10">
                  <div className="flex items-center gap-2 text-gold-400 mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-widest">Ubicación</span>
                  </div>
                  <div className="text-lg font-bold">Visítanos en nuestro nuevo centro</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-zinc-500 text-xs uppercase tracking-widest">
            © 2024 Pulso Fitness Community. Todos los derechos reservados.
          </div>

          <div className="flex items-center gap-6">
            <Instagram className="w-5 h-5 text-zinc-500 hover:text-gold-400 cursor-pointer transition-colors" />
            <MessageCircle className="w-5 h-5 text-zinc-500 hover:text-gold-400 cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <AnimatePresence>
        {showFAB && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 50 }}
            onClick={handleGeneralContact}
            className="fixed bottom-8 right-8 z-[100] gold-gradient text-black px-6 py-4 rounded-full font-bold shadow-2xl shadow-gold-500/40 flex items-center gap-3 active:scale-95 transition-transform"
          >
            <MessageCircle className="w-6 h-6" />
            <span className="hidden md:inline">Quiero ser parte</span>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

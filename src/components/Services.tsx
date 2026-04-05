import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Waves, Fish, Leaf } from "lucide-react";

const SERVICES = [
    { name: "Venta de Peces Ordamentales", icon: <Waves className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800" },
    { name: "Decoracion de Acuarios", icon: <Fish className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&q=80&w=800" },
    { name: "Asesoria personalizada", icon: <Leaf className="w-6 h-6" />, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=800" }
];

export const Services = () => (
    <section id="services" className="py-24 bg-ocean-light/30">
        <div className="container mx-auto px-6">
            <SectionHeading title="Servicios que Ofrecemos" subtitle="Nuestros Servicios" />
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                {SERVICES.map((cat, idx) => (
                    <motion.div
                        key={cat.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ y: -10 }}
                        className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg"
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                            <div className="mb-2 p-2 bg-white/20 backdrop-blur-md rounded-lg w-fit">
                                {cat.icon}
                            </div>
                            <h3 className="text-xl font-bold">{cat.name}</h3>
                            <p className="text-xs text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Más información</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
);

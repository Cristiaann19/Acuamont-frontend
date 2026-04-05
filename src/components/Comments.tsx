import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Waves } from "lucide-react";

export const Comments = () => {
    const reviews = [
        { name: "Carlos Ruiz", role: "Acuerista Hobby", text: "La calidad de las plantas es impresionante. Llegaron perfectas y han crecido muchísimo en mi acuario." },
        { name: "Elena Gómez", role: "Diseñadora", text: "Buscaba algo minimalista para mi oficina y el kit que me recomendaron es simplemente hermoso. Muy profesional." },
        { name: "Marco Polo", role: "Experto en Bettas", text: "Los mejores ejemplares de Bettas que he visto. Saludables, activos y con colores vibrantes. 100% recomendado." },
    ];

    return (
        <section id="comments" className="py-24 bg-ocean-light/10">
            <div className="container mx-auto px-6">
                <SectionHeading title="Lo que dicen nuestros clientes" subtitle="Testimonios" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((rev, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="p-8 rounded-3xl bg-white shadow-sm border border-slate-100 relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div>
                                    <h4 className="font-bold text-slate-900">{rev.name}</h4>
                                    <p className="text-xs text-ocean-deep font-medium">{rev.role}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 italic leading-relaxed">"{rev.text}"</p>
                            <div className="absolute top-8 right-8 text-ocean-soft/20">
                                <Waves className="w-12 h-12" />
                            </div>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-16 text-center">
                    <button className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-ocean-deep transition-all duration-300 shadow-lg shadow-slate-200 w-full sm:w-auto text-center cursor-pointer">
                        Dejar un comentario
                    </button>
                </div>
            </div>
        </section>
    );
};
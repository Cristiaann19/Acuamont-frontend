import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const FAQS = [
    { q: "¿Hacen envíos a todo el país?", a: "Sí, realizamos envíos seguros y garantizados a todo el territorio nacional con embalaje especial para productos frágiles." },
    { q: "¿Cómo cuido mis plantas acuáticas?", a: "Las plantas requieren iluminación adecuada, sustrato nutritivo y, en algunos casos, adición de CO2 y fertilizantes líquidos." },
    { q: "¿Ofrecen garantía en los peces?", a: "Garantizamos la llegada con vida de todos nuestros ejemplares. Si hay algún inconveniente, contáctanos en las primeras 2 horas tras la recepción." },
    { q: "¿Puedo personalizar mi acuario?", a: "¡Claro! Ofrecemos asesoría personalizada para diseñar el acuario de tus sueños según tu espacio y presupuesto." },
];

export const FAQ = () => {
    const [openIdx, setOpenIdx] = useState<number | null>(0);

    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6 max-w-3xl">
                <SectionHeading title="Preguntas Frecuentes" subtitle="Ayuda" />
                <div className="space-y-4">
                    {FAQS.map((faq, idx) => (
                        <div key={idx} className="border-b border-slate-100">
                            <button
                                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                                className="w-full py-6 flex items-center justify-between text-left group"
                            >
                                <span className={`text-lg font-medium transition-colors ${openIdx === idx ? "text-ocean-deep" : "text-slate-900"}`}>
                                    {faq.q}
                                </span>
                                <ChevronRight className={`w-5 h-5 transition-transform duration-300 ${openIdx === idx ? "rotate-90 text-ocean-deep" : "text-slate-400"}`} />
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIdx === idx ? "auto" : 0, opacity: openIdx === idx ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <p className="pb-6 text-slate-500 leading-relaxed">
                                    {faq.a}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
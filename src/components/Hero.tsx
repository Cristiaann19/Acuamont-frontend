import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.3]);
    const textY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const blurValue = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

    return (
        <section id="home" ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Animation */}
            <motion.div
                style={{ scale: bgScale, opacity: bgOpacity, filter: `blur(${blurValue}px)` }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://sxjcvvdurekubpptbsbp.supabase.co/storage/v1/object/public/FotoAcua/payasopez.webp"
                    alt="Aquarium Background"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
                {/* Overlay for aquatic feel */}
                <div className="absolute inset-0 bg-gradient-to-b from-ocean-light/20 via-transparent to-white" />
                <div className="absolute inset-0 bg-ocean-deep/5 mix-blend-overlay" />
            </motion.div>

            {/* Content */}
            <motion.div
                style={{ y: textY }}
                className="relative z-10 text-center px-6 max-w-4xl"
            >
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-7xl md:text-9xl font-display font-bold tracking-tighter text-slate-900 mb-4"
                >
                    ACUAMONT
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="text-xl md:text-2xl font-semibold text-slate-900 mb-2"
                    style={{ textShadow: "0 1px 10px rgba(255,255,255,1), 0 0 20px rgba(255,255,255,0.8)" }}
                >
                    Tu mundo acuático en casa
                </motion.p>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="text-slate-800 font-medium max-w-lg mx-auto mb-10"
                    style={{ textShadow: "0 1px 8px rgba(255,255,255,1), 0 0 16px rgba(255,255,255,0.9)" }}
                >
                    Encuentra todo para crear y mantener acuarios únicos: peces, plantas y accesorios premium.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#products"
                        className="px-8 py-4 rounded-full border-2 border-slate-900 text-slate-900 font-medium hover:bg-slate-900 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
                    >
                        Explorar productos
                    </a>
                    <a
                        href="#products"
                        className="px-8 py-4 rounded-full bg-slate-900 text-white font-medium hover:bg-ocean-deep transition-all duration-300 shadow-lg shadow-slate-200 w-full sm:w-auto text-center"
                    >
                        Ver ofertas
                    </a>
                </motion.div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400"
            >
                <ChevronDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
};

export default Hero;
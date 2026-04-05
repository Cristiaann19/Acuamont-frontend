import { motion } from "framer-motion";
import slide1 from "../assets/imagenSlide/slide1.jpg";
import { SectionHeading } from "./SectionHeading";

export const About = () => (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="lg:w-1/2 relative"
                >
                    <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                        <img
                            src={slide1}
                            alt="Aquarium Design"
                            className="w-full h-auto"
                            referrerPolicy="no-referrer"
                        />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-ocean-soft/30 rounded-full blur-3xl -z-0" />
                    <div className="absolute -top-10 -left-10 w-48 h-48 bg-aquamarine/20 rounded-full blur-2xl -z-0" />
                </motion.div>

                <div className="lg:w-1/2">
                    <SectionHeading
                        title="Nuestra Pasión por el Agua"
                        subtitle="Sobre ACUAMONT"
                        centered={false}
                    />
                    <p className="text-slate-600 text-lg leading-relaxed mb-6">
                        Descubre la mejor selección de peces, accesorios y servicios especializados
                        para crear acuarios vibrantes y saludables. En Acuamont te ofrecemos productos de calidad,
                        asesoría profesional y todo lo necesario para mantener un ecosistema acuático equilibrado.
                        Tanto si eres un aficionado como un profesional, tenemos soluciones que se adaptan a cada
                        necesidad y espacio.                    </p>

                    <div className="grid grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-3xl font-bold text-ocean-deep mb-1">10+</h4>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Años de Experiencia</p>
                        </div>
                        <div>
                            <h4 className="text-3xl font-bold text-ocean-deep mb-1">500+</h4>
                            <p className="text-sm text-slate-500 uppercase tracking-wider">Proyectos Únicos</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);
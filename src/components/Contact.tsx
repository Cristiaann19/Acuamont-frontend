import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export const Contact = () => (
    <section id="contact" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-ocean-deep rounded-full blur-[120px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aquamarine rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-5xl font-display font-bold mb-8">Hablemos de tu próximo <span className="text-ocean-deep">acuario</span></h2>
                    <p className="text-slate-400 text-lg mb-12">Estamos listos para asesorarte en cada paso. Visítanos o escríbenos para cualquier consulta.</p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-ocean-deep">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Llámanos</p>
                                <p className="text-lg font-medium">+34 900 123 456</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-ocean-deep">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Email</p>
                                <p className="text-lg font-medium">hola@acuamont.com</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-ocean-deep">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-slate-500 uppercase tracking-widest">Ubicación</p>
                                <p className="text-lg font-medium">Calle del Agua 42, Madrid</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 flex items-center gap-6">
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-deep transition-colors">
                            <FaInstagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-deep transition-colors">
                            <FaFacebook className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-ocean-deep transition-colors">
                            <FaTwitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Nombre</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ocean-deep transition-colors" placeholder="Tu nombre" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-slate-300">Email</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ocean-deep transition-colors" placeholder="tu@email.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-300">Mensaje</label>
                            <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-ocean-deep transition-colors" placeholder="¿En qué podemos ayudarte?" />
                        </div>
                        <button className="w-full py-4 rounded-xl bg-ocean-deep text-white font-bold hover:bg-aquamarine hover:text-slate-900 transition-all duration-300">
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>
);
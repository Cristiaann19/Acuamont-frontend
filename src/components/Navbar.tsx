import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ShoppingCart, Menu, X } from "lucide-react";

export const Navbar = ({ onCartOpen, cartCount }: { onCartOpen: () => void, cartCount: number }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Bloquea el scroll cuando el menú está abierto
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [isMobileMenuOpen]);

    const navItems = [
        { name: "Inicio", href: "#home" },
        { name: "Nosotros", href: "#about" },
        { name: "Servicios", href: "#services" },
        { name: "Productos", href: "#products" },
        { name: "Comentarios", href: "#comments" },
        { name: "Contacto", href: "#contact" },
    ];

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 glass shadow-sm" : "py-8 bg-transparent"}`}>
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-slate-900">
                        ACUA<span className="text-ocean-deep">MONT</span>
                    </a>

                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className={`text-sm font-semibold transition-colors hover:text-ocean-deep ${isScrolled ? "text-slate-600" : "text-slate-900"
                                    }`}
                                style={{
                                    textShadow: !isScrolled
                                        ? "0 1px 6px rgba(255,255,255,0.9), 0 0 12px rgba(255,255,255,0.7)"
                                        : "none"
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="p-2 text-slate-600 hover:text-ocean-deep transition-colors">
                            <Search className="w-5 h-5" />
                        </button>
                        <button
                            onClick={onCartOpen}
                            className="p-2 text-slate-600 hover:text-ocean-deep transition-colors relative"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute top-0 right-0 w-4 h-4 bg-ocean-deep text-white text-[10px] flex items-center justify-center rounded-full"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </button>
                        <button
                            onClick={() => setIsMobileMenuOpen(prev => !prev)}
                            className="md:hidden p-2 text-slate-600 hover:text-ocean-deep transition-colors"
                        >
                            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Menú móvil */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] md:hidden"
                        />

                        {/* Panel */}
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 h-full w-72 bg-white z-[70] shadow-2xl flex flex-col md:hidden"
                        >
                            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                                <span className="text-xl font-display font-bold tracking-tighter text-slate-900">
                                    ACUA<span className="text-ocean-deep">MONT</span>
                                </span>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                                >
                                    <X className="w-5 h-5 text-slate-600" />
                                </button>
                            </div>

                            <nav className="flex-1 p-6 flex flex-col gap-2">
                                {navItems.map((item, idx) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: idx * 0.06 }}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className="text-lg font-medium text-slate-700 hover:text-ocean-deep hover:bg-slate-50 px-4 py-3 rounded-xl transition-colors"
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="p-6 border-t border-slate-100">
                                <p className="text-xs text-slate-400 text-center">© 2025 Acuamont</p>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};
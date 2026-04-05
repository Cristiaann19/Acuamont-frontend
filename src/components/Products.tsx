import type { Product } from "../models/product";
import { SectionHeading } from "./SectionHeading";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";
import arrecife from "../assets/imagenProducts/arrecife.jpg";
import astronautas from "../assets/imagenProducts/astronautas.jpg";
import buzo from "../assets/imagenProducts/buzo.jpg";
import avionNaufrago from "../assets/imagenProducts/avionNaufrago.jpg";
import piña from "../assets/imagenProducts/piña.jpg";
import vocal from "../assets/imagenProducts/vocal.jpg";


const PRODUCTS: Product[] = [
    { id: 1, name: "Arrecife", price: 129.99, category: "Decoración", image: arrecife },
    { id: 2, name: "Astronauta", price: 15.50, category: "Decoración", image: astronautas },
    { id: 3, name: "Buzo", price: 8.90, category: "Decoración", image: buzo },
    { id: 4, name: "Avion Naufrago", price: 45.00, category: "Decoración", image: avionNaufrago },
    { id: 5, name: "Piña Bob Esponja", price: 12.00, category: "Decoración", image: piña },
    { id: 6, name: "Volcan Mediano", price: 35.99, category: "Decoración", image: vocal },
];


export const Products = ({ onAddToCart }: { onAddToCart: (p: Product) => void }) => (
    <section id="products" className="py-24 bg-white">
        <div className="container mx-auto px-6">
            <SectionHeading title="Productos Destacados" subtitle="Lo Mejor para tu Acuario" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {PRODUCTS.map((product, idx) => (
                    <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group glass rounded-3xl p-4 transition-all duration-500 hover:shadow-2xl hover:shadow-ocean-deep/10"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden mb-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute top-4 right-4">
                                <span className="bg-white/90 backdrop-blur-sm text-ocean-deep text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                    {product.category}
                                </span>
                            </div>
                        </div>
                        <div className="px-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-1">{product.name}</h3>
                            <p className="text-2xl font-display font-bold text-ocean-deep mb-6">S/. {product.price.toFixed(2)}</p>
                            <button
                                onClick={() => onAddToCart(product)}
                                className="w-full py-4 rounded-2xl bg-slate-900 text-white font-medium flex items-center justify-center gap-2 hover:bg-ocean-deep transition-colors group/btn"
                            >
                                <Plus className="w-5 h-5 group-hover/btn:rotate-90 transition-transform" />
                                Agregar al carrito
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-16 text-center">
                <button className="px-10 py-4 rounded-full border-2 border-slate-200 text-slate-500 font-medium hover:border-ocean-deep hover:text-ocean-deep transition-all">
                    Ver catálogo completo
                </button>
            </div>
        </div>
    </section>
);

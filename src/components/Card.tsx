import { AnimatePresence, motion } from "framer-motion";
import { Fish, Minus, Plus, ShoppingCart, X } from "lucide-react";
import type { CartItem } from "../models/product";

export const Cart = ({ isOpen, onClose, items, onRemove }: { isOpen: boolean, onClose: () => void, items: CartItem[], onRemove: (id: number) => void }) => (
    <AnimatePresence>
        {isOpen && (
            <>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[55]"
                />
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", damping: 30, stiffness: 300 }}
                    className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-[60] shadow-2xl flex flex-col"
                >
                    <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                            <ShoppingCart className="w-6 h-6 text-ocean-deep" />
                            Tu Carrito
                        </h2>
                        <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-6">
                        {items.length === 0 ? (
                            <div className="h-full flex flex-col items-center justify-center text-slate-400">
                                <Fish className="w-16 h-16 mb-4 opacity-20" />
                                <p>Tu carrito está vacío</p>
                            </div>
                        ) : (
                            items.map(item => (
                                <div key={item.id} className="flex gap-4">
                                    <img src={item.image} alt={item.name} className="w-20 h-20 rounded-xl object-cover" referrerPolicy="no-referrer" />
                                    <div className="flex-1">
                                        <h4 className="font-bold text-slate-900">{item.name}</h4>
                                        <p className="text-ocean-deep font-bold">${item.price.toFixed(2)}</p>
                                        <div className="flex items-center justify-between mt-2">
                                            <div className="flex items-center gap-3 bg-slate-100 rounded-lg px-2 py-1">
                                                <button className="text-slate-500 hover:text-slate-900"><Minus className="w-4 h-4" /></button>
                                                <span className="text-sm font-bold">{item.quantity}</span>
                                                <button className="text-slate-500 hover:text-slate-900"><Plus className="w-4 h-4" /></button>
                                            </div>
                                            <button onClick={() => onRemove(item.id)} className="text-xs text-red-400 hover:text-red-600 font-medium">Eliminar</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-6 border-t border-slate-100 space-y-4">
                        <div className="flex items-center justify-between text-lg">
                            <span className="text-slate-500">Total</span>
                            <span className="font-bold text-slate-900">${items.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</span>
                        </div>
                        <button className="w-full py-4 rounded-2xl bg-slate-900 text-white font-bold hover:bg-ocean-deep transition-colors">
                            Finalizar compra
                        </button>
                    </div>
                </motion.div>
            </>
        )}
    </AnimatePresence>
);
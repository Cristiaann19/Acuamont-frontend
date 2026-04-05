import './App.css'
import { Loader } from './components/Loader'
import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { Contact } from './components/Contact'
import { About } from './components/About'
import { FAQ } from './components/FAQ'
import { Products } from './components/Products'
import { Services } from './components/Services'
import { Comments } from './components/Comments'
import { Cart } from './components/Card'
import { AnimatePresence } from 'framer-motion'


import { useState } from 'react'
import type { CartItem, Product } from './models/product'

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        // Si ya existe, aumenta la cantidad
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // Si no existe, lo agrega con quantity: 1
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true); // Abre el carrito al agregar
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (

    <div className='relative'>
      <AnimatePresence>
        {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>


      <Navbar onCartOpen={() => setIsCartOpen(true)} cartCount={cartCount} />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onRemove={handleRemoveFromCart}
      />

      <main>
        <Hero />
        <About />
        <Services />
        <Products onAddToCart={handleAddToCart} />
        <Comments />
        <FAQ />
        <Contact />
      </main>

      <footer className="py-12 bg-slate-950 text-slate-500 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-xl font-display font-bold tracking-tighter text-white">
            ACUA<span className="text-ocean-deep">MONT</span>
          </div>
          <p className="text-sm">© 2026 ACUAMONT. Todos los derechos reservados.</p>
          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </footer>
    </div>


  )
}

export default App;
import React, { useState } from 'react';
import { products, storeConfig } from './config';
import ProductCard from './components/ProductCard';
import CartSummary from './components/CartSummary';
import CategoryTabs from './components/CategoryTabs';
import CustomerExperiences from './components/CustomerExperiences';
import Hero from './components/Hero';

function App() {
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === productId);
      if (existingItem.quantity === 1) {
        return currentCart.filter((item) => item.id !== productId);
      } else {
        return currentCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  const getProductQuantity = (productId) => {
    const item = cart.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-32 font-sans text-brand-dark overflow-hidden">
       {/* Background Decoration */}
       <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-lavender opacity-30 blur-3xl rounded-full"></div>
          <div className="absolute top-[40%] right-[-10%] w-[30%] h-[30%] bg-purple-100 opacity-40 blur-3xl rounded-full"></div>
       </div>

      {/* Header */}
      <div className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-brand-purple/10">
        <div className="max-w-md mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
             <div className="bg-brand-lavender p-2 rounded-xl shadow-sm text-brand-purple">
                <span className="text-xl" role="img" aria-label="beauty">🌸</span>
             </div>
             <div>
               <h1 className="text-lg font-bold text-brand-dark leading-none">{storeConfig.storeName}</h1>
               <span className="text-[10px] font-medium text-brand-purple">Beauty Store</span>
             </div>
          </div>
          {/* Cart Counter Mini */}
          <div className="bg-brand-lavender/50 px-3 py-1 rounded-full text-brand-purple text-xs font-bold">
            {cart.reduce((a, b) => a + b.quantity, 0)} items
          </div>
        </div>
        
        {/* Categories */}
        <div className="max-w-md mx-auto pb-2">
          <CategoryTabs 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>
      </div>

      {/* Main Content */}
      <main className="relative z-10 max-w-md mx-auto">
        
        <Hero />
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="h-full">
              <ProductCard
                product={product}
                quantity={getProductQuantity(product.id)}
                onAdd={addToCart}
                onRemove={removeFromCart}
              />
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            لا توجد منتجات في هذا القسم حالياً.
          </div>
        )}

        {/* Customer Experiences Section */}
        <CustomerExperiences />
        
        {/* Footer / Copyright */}
        <div className="mt-12 text-center pb-8 border-t border-gray-200 pt-6">
            <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} {storeConfig.storeName}
            </p>
            <p className="text-xs text-brand-purple mt-1 font-medium">
                Powered by <a href="https://my-porto-eosin.vercel.app/" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-dark">NEXA DIGITAL</a>
            </p>
        </div>

      </main>

      {/* Floating Cart Button */}
      <CartSummary cartItems={cart} />
    </div>
  );
}

export default App;

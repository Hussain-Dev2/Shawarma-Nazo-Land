import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden mb-6 rounded-3xl mx-4 mt-4 shadow-xl">
      {/* Background with Gradient and Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-purple to-brand-lavender opacity-90 z-0"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596462502278-27bfdd403348?w=800&auto=format&fit=crop&q=60')] bg-cover bg-center mix-blend-overlay opacity-40 z-0"
      ></div>

      {/* Content */}
      <div className="relative z-10 px-6 py-12 text-center text-white">
        <span className="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium mb-4 border border-white/30">
          ✨ تألقي بجمال طبيعي
        </span>
        <h2 className="text-3xl font-black mb-3 text-white drop-shadow-sm leading-relaxed">
          اكتشفي سر إشراقتك <br/> مع Touch Beaut
        </h2>
        <p className="text-white/90 text-sm font-medium leading-relaxed max-w-xs mx-auto mb-6">
          مجموعتنا المختارة من أفضل منتجات العناية بالبشرة والجسم، صنعت خصيصاً لتدليلك.
        </p>
        <button className="bg-white text-brand-dark px-8 py-3 rounded-full font-bold text-sm shadow-lg shadow-purple-900/20 active:scale-95 transition-transform hover:bg-gray-50">
          تصفحي المنتجات 👇
        </button>
      </div>

      {/* Decorative Circles */}
      <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-brand-dark/10 rounded-full blur-xl"></div>
    </div>
  );
}

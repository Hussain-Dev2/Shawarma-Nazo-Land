import React from 'react';

// Sample Before/After placeholders
const experiences = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1594824476960-e783614abaf5?w=300&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=300&fit=crop&q=60",
    comment: "نتيجة رائعة بعد شهر من الاستخدام!"
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1554196346-b985817a26f0?w=300&fit=crop&q=60",
    after: "https://images.unsplash.com/photo-1509967419530-da842fe01d8e?w=300&fit=crop&q=60",
    comment: "الفرق واضح في النعومة والتفتيح."
  }
];

export default function CustomerExperiences() {
  return (
    <section className="py-8 bg-white my-6 rounded-3xl shadow-sm mx-4">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-brand-dark mb-2">تجارب الزبائن</h2>
        <p className="text-gray-500 text-sm">صور حقيقية لنتائج منتجاتنا</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 relative">
                <span className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">قبل</span>
                <img src={exp.before} alt="Before" className="w-full h-40 object-cover rounded-lg" />
              </div>
              <div className="text-brand-purple font-bold text-xl">
                 ➜
              </div>
              <div className="flex-1 relative">
                <span className="absolute top-2 right-2 bg-brand-purple text-white text-xs px-2 py-1 rounded">بعد</span>
                <img src={exp.after} alt="After" className="w-full h-40 object-cover rounded-lg" />
              </div>
            </div>
            <p className="text-center text-brand-dark font-medium text-sm">"{exp.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-lavender': '#E6E6FA', // Light Lavender
        'brand-purple': '#9370DB',   // Medium Purple for accents
        'brand-dark': '#4B0082',     // Indigo/Dark Purple for text
      },
      fontFamily: {
        'sans': ['Cairo', 'Inter', 'sans-serif'], // Added Cairo for Arabic support
      }
    },
  },
  plugins: [],
}


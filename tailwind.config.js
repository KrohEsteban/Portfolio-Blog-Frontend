/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     // Or if using `src` directory:
     "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gris-claro': '#d4d3d3',
        'gris-oscuro': '#272b30',
        'gris-intermedio': '#3A3F44',
        'naranja': '#df5e3a',
      },
      fontFamily: {
        dancingscript: ['var(--font-DancingScript)'],
        opensans: ['var(--font-OpenSans)'],
        kaushanscript: ['var(--font-KaushanScript)'],
      },
    },
    keyframes: {
      'open-menu': {
        '0%': { transform: 'scaleY(0)' },
        '80%': { transform: 'scaleY(1.1)' },
        '100%': { transform: 'scaleY(1)' },
      },
      'close-menu': {
        '0%': { transform: 'scaleY(1)' },
        '100%': { transform: 'scaleY(0)' },
      },
    },
    animation: {
      'open-menu': 'open-menu 0.5s ease-in-out forwards',
      'close-menu': 'close-menu 0.5s ease-in-out forwards',
    }
  
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        'verde-oscuro': '#1F3D2A',
        'verde-bosque': '#2A4A34',
        'verde-oliva': '#77803C',
        'verde-oliva-claro': '#98A15C',
        crema: '#F6F0DC',
        'crema-2': '#EFE6C9',
        beige: '#E7DAB4',
        dorado: '#E3A63C',
        'dorado-2': '#C98726',
        terracota: '#B23A2E',
        rosado: '#D97D6E',
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'serif'],
        body: ['"Work Sans"', 'ui-sans-serif', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      borderRadius: {
        organic: '30px 10px 30px 10px',
        'organic-2': '10px 30px 10px 30px',
      },
      boxShadow: {
        card: '0 10px 30px -12px rgba(31, 61, 42, 0.35)',
        soft: '0 4px 16px -4px rgba(31, 61, 42, 0.25)',
      },
      backgroundImage: {
        paper:
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0) 45%), radial-gradient(circle at 80% 60%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 40%)",
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        float: 'float 6s ease-in-out infinite',
        sway: 'sway 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' },
        },
      },
    },
  },
  plugins: [],
}

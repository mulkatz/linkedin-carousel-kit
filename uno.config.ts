import { defineConfig } from 'unocss'

export default defineConfig({
  shortcuts: {
    'bg-main': 'bg-sand-50 text-sand-800',
    'card': 'rounded-xl p-6 bg-sand-100 border border-sand-200',
    'accent': 'text-copper',
    'muted': 'text-sand-600',
    'slide-pad': 'px-16 py-12',
  },
  theme: {
    colors: {
      sand: {
        50:  '#FAF8F5',
        100: '#F0EBE3',
        200: '#D4C5B0',
        300: '#B8A48E',
        400: '#9C836C',
        500: '#8B6F47',
        600: '#6B5436',
        700: '#4A3A26',
        800: '#2C2416',
        900: '#1A1714',
      },
      copper: '#C68B59',
    },
    fontFamily: {
      sans: 'DM Sans, system-ui, sans-serif',
      mono: 'JetBrains Mono, monospace',
      serif: 'Playfair Display, serif',
    },
  },
})

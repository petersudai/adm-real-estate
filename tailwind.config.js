/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Deep warm near-black, the brand's primary dark ground — never navy
        noir: {
          DEFAULT: '#181310',
          soft: '#241D18',
          raised: '#312822',
        },
        // Antique metallic gold, used as a considered accent, not a fill colour
        gold: {
          DEFAULT: '#B8934A',
          bright: '#DDBB7C',
          deep: '#8C6B32',
        },
        // Warm taupe/clay, ADM's signature mid-tone from their current brand
        clay: {
          DEFAULT: '#8E7A61',
          soft: '#AC987D',
          deep: '#6B5A45',
        },
        // Warm cream canvas, the primary light ground
        canvas: {
          DEFAULT: '#F8F3EA',
          deep: '#EFE6D3',
          dim: '#E3D6BC',
        },
        // Warm stone greys for body copy on light grounds
        stone: {
          700: '#4C4436',
          600: '#635948',
          500: '#7C7059',
          400: '#9C8F76',
          300: '#C6BA9F',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(3.2rem, 8vw, 7.5rem)', { lineHeight: '0.96', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.6rem, 5.5vw, 5rem)', { lineHeight: '1.0', letterSpacing: '-0.015em' }],
        'display-md': ['clamp(2rem, 4vw, 3.25rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'display-sm': ['clamp(1.6rem, 2.6vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.005em' }],
      },
      letterSpacing: {
        eyebrow: '0.22em',
      },
      maxWidth: {
        shell: '88rem',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'rise-in': 'rise-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 3.5s linear infinite',
      },
      backgroundImage: {
        'gold-foil': 'linear-gradient(110deg, #8C6B32 20%, #DDBB7C 45%, #B8934A 55%, #8C6B32 80%)',
      },
    },
  },
  plugins: [],
}

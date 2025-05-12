/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        xs: '0.75rem', // 12px
        sm: '0.875rem', // 14px
        base: '1rem', // 16px
        lg: '1.125rem', // 18px
        xl: '1.25rem', // 20px
        '2xl': '1.5rem', // 24px
        'title-sm': '2.5rem', // 40px
        '5xl': '3rem', // 48px
        '6xl': '3.75rem', // 64px
        'title-lg': '5.375rem', // 86px
			},
			lineHeight: {
				base: '1.4',
			},
      fontFamily: {
        'e-Ukraine': ['e-Ukraine', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        'custom-orange': {
          DEFAULT: '#e1780e',
          hover: '#C1680EFF',
        },
        'custom-tiffany': '#a0d8e1',
        'custom-blue': '#15a6e5',
        'custom-lilac': '#dfc6ff',
        'custom-cofe': '#e2d7cf',
        'custom-peach': '#ffc9b1',
        'custom-yellow': '#ffe55a',
        'custom-light': '#f9efe6',
        'custom-gray': {
          DEFAULT: '#E5DED9',
          hover: '#C9C3BFFF',
        },
        dark: '#331207',
      },
      screens: {
        'xs-custom': '360px',
        'xl-custom': '1440px',
      },
    },
  },
  plugins: [],
};

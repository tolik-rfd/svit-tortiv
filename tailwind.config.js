/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "custom-18": "1.125rem",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "0.875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "title-sm": "2.5rem",
        "5xl": "3rem",
        "6xl": "3.75rem",
        "title-lg": "5.375rem",
      },
      lineHeight: {
        base: "1.4",
        "custom-16": "1rem",
      },
      fontFamily: {
        "e-Ukraine": ["e-Ukraine", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "custom-orange": {
          DEFAULT: "#e1780e",
          hover: "#C1680EFF",
        },
        "custom-tiffany": "#a0d8e1",
        "custom-blue": "#15a6e5",
        "custom-lilac": "#dfc6ff",
        "custom-cofe": "#e2d7cf",
        "custom-peach": "#ffc9b1",
        "custom-yellow": "#ffe55a",
        "custom-light": "#f9efe6",
        "custom-light-gray": "#d9d9d9",
        "custom-gray": {
          DEFAULT: "#E5DED9",
          hover: "#C9C3BFFF",
        },
        dark: "#331207",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
      },
      screens: {
        "xs-custom": "360px",
        "xl-custom": "1440px",
      },
      borderRadius: {
        "custom-50": "3.125rem",
        "custom-80": "5rem",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

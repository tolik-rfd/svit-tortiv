/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      padding: {
        "custom-10": "var(--space-custom-10)",
        "custom-18": "var(--space-custom-18)",
      },
      margin: {
        "custom-10": "var(--space-custom-10)",
        "custom-18": "var(--space-custom-18)",
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "title-sm": "var(--font-size-title-sm)",
        "5xl": "var(--font-size-5xl)",
        "6xl": "var(--font-size-6xl)",
        "title-lg": "var(--font-size-title-lg)",
      },
      lineHeight: {
        base: "var(--line-height-base)",
        "custom-16": "var(--line-height-custom-16)",
      },
      fontFamily: {
        "e-Ukraine": ["var(--font-e-ukraine)"],
        manrope: ["var(--font-manrope)"],
      },
      colors: {
        "custom-orange": "var(--color-custom-orange)",
        "custom-tiffany": "var(--color-custom-tiffany)",
        "custom-blue": "var(--color-custom-blue)",
        "custom-lilac": "var(--color-custom-lilac)",
        "custom-cofe": "var(--color-custom-cofe)",
        "custom-peach": "var(--color-custom-peach)",
        "custom-yellow": "var(--color-custom-yellow)",
        "custom-light": "var(--color-custom-light)",
        "custom-light-gray": "var(--color-custom-light-gray)",
        "custom-gray": "var(--color-custom-gray)",
        "custom-dark": "var(--color-custom-dark)",
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
    },
    screens: {
      "xs-custom": "var(--screen-xs-custom)",
      "xl-custom": "var(--screen-xl-custom)",
    },
    borderRadius: {
      "custom-24": "var(--border-radius-custom-24)",
      "custom-32": "var(--border-radius-custom-32)",
      "custom-50": "var(--border-radius-custom-50)",
      "custom-80": "var(--border-radius-custom-80)",
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
  },
  plugins: [require("tailwindcss-animate")],
};

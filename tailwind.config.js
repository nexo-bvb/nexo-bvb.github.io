/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "on-secondary-fixed-variant": "#3a3c3c",
        "on-background": "#e5e2e1",
        "on-secondary-container": "#e3e2e2",
        "on-error-container": "#ffdad6",
        "primary": "#ffffff",
        "on-primary-container": "#000000",
        "surface-container-high": "#2a2a2a",
        "surface-bright": "#3a3939",
        "secondary": "#c7c6c6",
        "tertiary-fixed-dim": "#464747",
        "on-error": "#690005",
        "secondary-fixed-dim": "#ababab",
        "on-secondary": "#1a1c1c",
        "secondary-fixed": "#c7c6c6",
        "on-secondary-fixed": "#1a1c1c",
        "background": "#131313",
        "tertiary-fixed": "#5d5e5f",
        "primary-fixed": "#5d5f5f",
        "inverse-on-surface": "#313030",
        "tertiary-container": "#909191",
        "surface-container": "#201f1f",
        "on-tertiary": "#1a1c1c",
        "inverse-primary": "#5d5f5f",
        "on-surface": "#e5e2e1",
        "surface": "#131313",
        "outline-variant": "#474747",
        "outline": "#919191",
        "on-primary-fixed-variant": "#e2e2e2",
        "error-container": "#93000a",
        "primary-fixed-dim": "#454747",
        "on-tertiary-container": "#000000",
        "surface-container-lowest": "#0e0e0e",
        "error": "#ffb4ab",
        "on-surface-variant": "#c6c6c6",
        "on-primary": "#1a1c1c",
        "on-primary-fixed": "#ffffff",
        "inverse-surface": "#e5e2e1",
        "tertiary": "#e3e2e2",
        "surface-tint": "#c6c6c7",
        "surface-container-highest": "#353534",
        "surface-variant": "#353534",
        "on-tertiary-fixed-variant": "#e3e2e2",
        "on-tertiary-fixed": "#ffffff",
        "primary-container": "#d4d4d4",
        "surface-container-low": "#1c1b1b",
        "surface-dim": "#131313",
        "secondary-container": "#464747"
      },
      borderRadius: {
        "DEFAULT": "0px",
        "sm": "0px",
        "md": "0px",
        "lg": "0px",
        "xl": "0px",
        "2xl": "0px",
        "3xl": "0px",
        "full": "0px"
      },
      fontFamily: {
        "headline": ["Orbitron", "sans-serif"],
        "body": ["Exo 2", "sans-serif"],
        "label": ["Exo 2", "sans-serif"],
        "display": ["Orbitron", "sans-serif"],
        "orbitron": ["Orbitron", "sans-serif"],
        "exo-2": ["Exo 2", "sans-serif"]
      },
      backgroundImage: {
        'hud-grid': 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        'metallic-gradient': 'linear-gradient(180deg, var(--tw-colors-primary) 0%, var(--tw-colors-secondary-fixed-dim) 100%)',
      },
      backgroundSize: {
        'hud': '40px 40px',
        'hud-grid-size': '40px 40px'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
      }
    }
  },
  plugins: [],
}

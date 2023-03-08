/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#FFFFFF",
          "secondary": "#F29CA3",
          "accent": "#0ea5e9",
          "neutral": "#FFFFFF",
          "base-100": "#000000",
          "info": "#BD5561",
          "success": "#318C75",
          "warning": "#7c2d12",
          "error": "#880D1E",
        },
      },
    ],
  },
  plugins: [require("daisyui")]
}

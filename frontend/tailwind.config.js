/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)'],
        body: ['var(--font-body)'],
      },
      colors: {
        primary: "#14532d",
        accent: "#22c55e",
        soft: "#f0fdf4"
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)",
        hover: "0 20px 60px rgba(0,0,0,0.15)"
      },
      borderRadius: {
        xl2: "1.5rem"
      }
    },
  },
  plugins: [],
}

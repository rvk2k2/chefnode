/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
       colors: {
        primary: "#1D4ED8", 
        secondary: "#9333EA", 
        accent: "#F59E0B",   
        muted: "#6B7280",   
      },
    },
  },
  plugins: [],
};

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#00ff41',
        },
        cyan: {
          400: '#00d9ff',
        },
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        jetbrains: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}

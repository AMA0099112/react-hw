module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    textColor: ["hover", "focus"], // 確保 hover 可以改變顏色
    opacity: ["hover", "focus"],
  },
  plugins: [],
};
module.exports = {
  content: ["./index.html", "./dist/*.js"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};

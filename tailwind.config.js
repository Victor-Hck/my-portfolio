// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            textShadow: {
                DEFAULT: "2px 2px 4px rgba(0, 0, 0, 0.5)", // sombra normal
            },
        },
    },
    plugins: [
        function({ addUtilities, theme }) {
            const shadows = theme("textShadow");
            const utilities = Object.keys(shadows).map(key => ({
                [`.text-shadow${key === "DEFAULT" ? "" : `-${key}`}`]: {
                    textShadow: shadows[key],
                }
            }));
            addUtilities(utilities, ["responsive", "hover"]);
        }
    ],
};

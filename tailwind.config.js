/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                neonPink: "#ff00e6",
                electricBlue: "#00eaff",
                vividPurple: "#a300ff",
                laserCyan: "#2bfffd",
                cyberYellow: "#f5e736",
                darkVoid: "#05010a",
                deepSpace: "#0a0f24",
            },
        },
    },
};

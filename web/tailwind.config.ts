import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                navy: {
                    100: "#d3d5dc",
                    200: "#a7abba",
                    300: "#7b8297",
                    400: "#4f5875",
                    500: "#232e52",
                    600: "#1c2542",
                    700: "#151c31",
                    800: "#0e1221",
                    900: "#070910",
                },
            },
        },
    },
    plugins: [],
};
export default config;

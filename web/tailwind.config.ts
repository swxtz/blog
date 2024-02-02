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

                gray: {
                    100: "#fbfcff",
                    200: "#f7faff",
                    300: "#f3f7fe",
                    400: "#eff5fe",
                    500: "#ebf2fe",
                    600: "#bcc2cb",
                    700: "#8d9198",
                    800: "#5e6166",
                    900: "#2f3033",
                },
            },
            screens: {
                "sm-1/2": "850px",
            },
        },
    },
    plugins: [],
};
export default config;

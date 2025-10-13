import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "background": "var(--background)",
                "primary": "var(--primary)",
                "secondary": "var(--secondary)",
                "tertiary": "var(--tertiary)",
                "text": "var(--text)",
                "neutral": "var(--neutral)",
                "success": "var(--success)",
                "warning": "var(--warning)",
                "warning-1": "var(--warning-1)",
            },
            animation: {
                shimmer: "shimmer 1.5s infinite",
            },
            keyframes: {
                shimmer: {
                    "0%": { backgroundPositionX: "-200%" },
                    "100%": { backgroundPositionX: "200%" },
                }
            }
        },
    },
    plugins: [],
} satisfies Config;

/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/*.{ts,tsx}",
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            keyframes: {
                gradient: {
                    '0%': {
                        filter: "hue-rotate(360deg)"
                    },
                    '100%': {
                        filter: "hue-rotate(0deg)"
                    }
                },
                putAway: {
                    "0%": {
                        paddingBottom: "0.5rem",
                        paddingTop: "0.5rem"
                    },
                    "40%": {
                        paddingBottom: "1.5rem",
                        paddingTop: "0.5rem"
                    },
                    "80%": {
                        paddingTop: "0.5rem",
                    },
                    "100%": {
                        paddingBottom: 0,
                        paddingTop: 0,
                    }
                },
                expand: {
                    "0%": {

                    }
                }
            },
            animation: {
                gradient: "gradient 3s infinite linear",
                putAway: "putAway ease-in-out .6s forwards"
            }
        },
        fontFamily: {
            honk: ["Honk", "system-ui"],
            sourceCode: ["Source Code Pro", "Noto Sans SC"],
        },
    },
    plugins: [],
}


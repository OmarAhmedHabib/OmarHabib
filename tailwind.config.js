    /** @type {import('tailwindcss').Config} */
    module.exports = {
    darkMode: 'class',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
        backgroundImage: {
            'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            'gradient-conic':
            'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        colors: {
            // Dark theme colors
            'dark-bg': '#0f172a',
            'dark-card': '#1e293b',
            'dark-text': '#f1f5f9',
            'dark-accent': '#06b6d4',
            'dark-secondary': '#a855f7',
            // Light theme colors
            'light-bg': '#f8fafc',
            'light-card': '#ffffff',
            'light-text': '#1e293b',
            'light-accent': '#0891b2',
            'light-secondary': '#7e22ce',
        },
        fontFamily: {
            'inter': ['Inter', 'sans-serif'],
            'cairo': ['Cairo', 'sans-serif'],
        },
        },
    },
    plugins: [],
    }

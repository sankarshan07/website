/** @type {import('tailwindcss').Config} */
module.exports = {
 
    darkMode: 'class',
    content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './container/**/*.{js,ts,jsx,tsx,mdx}', './motion/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}',],
    theme: {
        extend: {
            animation: {
                text: 'text 5s ease infinite',
                blob: 'blob 10s infinite',
                blobglow: 'blobglow 10s infinite',
                'ping-slow': `ping 3s cubic-bezier(0, 0, 0.2, 1) infinite`,
                'ping-slow2': `ping 4s cubic-bezier(0, 0, 0.2, 1) infinite`,
                'ping-slow3': `ping 5s cubic-bezier(0, 0, 0.2, 1) infinite`,
                'ping-slow4': `ping 6s cubic-bezier(0, 0, 0.2, 1) infinite`,
                'ping-slow5': `ping 7s cubic-bezier(0, 0, 0.2, 1) infinite`,
            },
            keyframes: {
                text: {
                    '0%, 100%': {
                        'background-size': '200% 200%',
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': '200% 200%',
                        'background-position': 'right center',
                    },
                },
                blob: {
                    '0%': {
                        transform: 'translate(0px,0px) scale(1)',
                    }, '33%': {
                        transform: 'translate(30px,-50px) scale(1.1)',
                    }, '66%': {
                        transform: 'translate(-20px,20px) scale(0.9)',
                    }, '100%': {
                        transform: 'translate(0px,0px) scale(1)',
                    },
                },
                blobglow: {
                    '0%': {
                        transform: 'scale(.8)',
                    }, '33%': {
                        transform: 'scale(.85)',
                    }, '66%': {
                        transform: 'scale(.85)',
                    }, '100%': {
                        transform: 'scale(.8)',
                    },
                }
            }, maxWidth: {
                container: '1340px', contentContainer: '1140px', containerSmall: '1024px', containerXs: '768px',
            }, screens: {
                xs: '280px',
                sm: '375px',
                sml: '500px',
                md: '667px',
                mdl: '768px',
                lg: '960px',
                lgl: '1024px',
                xl: `1280px`,
                xxl: `1440px`,
            }, backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            }, colors: {
                primary: 'var(--primary-color)',
                secondary: 'var(--secondary-color)',
                black: 'var(--black-color)',
                lightGray: 'var(--lightGray-color)',
                gray: 'var(--gray-color)',
                brown: 'var(--brown-color)',
                'gray-700': '#777777',
                'gray-900': '#333333',
            }, fontFamily: {
                sans: ['var(--font-base)', 'sans-serif'],
                Montserrat: ['Montserrat', 'sans-serif'],
                Inter: ['Inter', 'sans-serif'],
                SourceSansPro: ['Source Sans Pro', 'sans-serif'],
                BebasNeue: ['Bebas Neue', 'sans-serif'],
            }, boxShadow: {
                navbarShadow: `0 10px 30px -10px rgba(2,12,27,0.7)`,
            },

        },
    },
    plugins: [],
}

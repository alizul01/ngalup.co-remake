module.exports = {
    darkmode: 'class',
    content: ["./index.html", "./src/**/*.html", "./node_modules/flowbite/dist/flowbite.js"],
    theme: {
        colors: {
            primary: "#092647",
            'primary-90': "#0b305b",
            'primary-80': "#0e3c71",
            'primary-70': "#114988",
            'primary-60': "#14559f",
            'primary-50': "#1661b6",
            'primary-40': "#196dcc",
            'primary-30': "#1c79e3",
            'primary-20': "#3386e6",
            'primary-10': "#4994e9",
            'primary-5': "#60a1eb",
            'primary-light': "#8ebcf1",
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        container: {
            center: true,
            padd: "0.5rem",
        },
        extend: {
            fontfamily: {
                'inter': ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [
        require("flowbite/plugin")
    ],
}
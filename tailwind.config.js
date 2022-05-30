module.exports = {
    content: ["./index.html", "./src/**/*.html", "./node_modules/flowbite/dist/flowbite.js"],
    theme: {
        colors: {
            primary: "#092647",
            secondary: "#EFA721",
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
                'poppins': ['Poppins', 'sans-serif'],
            }
        },
    },
    plugins: [
        require("flowbite/plugin")
    ],
}
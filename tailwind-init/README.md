

## Init nuxt3 project

    npx nuxi init nuxt3-app
    cd nuxt3-app
    npm install

## Install tailwind

    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest

## Create tailwind.config.js

    npx tailwindcss init

    module.exports = {
        mode: "jit",
        content: [
            "./components/**/*.{vue,js}",
            "./layouts/**/*.vue",
            "./pages/**/*.vue",
            "./plugins/**/*.{js,ts}",
            "./nuxt.config.{js,ts}",
            "./app.vue",
        ],
        theme: {
            extend: {},
        },
        variants: {
            extend: {},
        },
        plugins: [],
    };


## Create assets/css/tailwind.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;


## Add postcss to nuxt.config.ts 

    export default defineNuxtConfig({
        build: {
            postcss: {
                postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
                },
            },
        },
    });


## Include tailwind.css in root App.vue


    <script lang="ts" setup>
        import './assets/css/tailwind.css'
    </script>



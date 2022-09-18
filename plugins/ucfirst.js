// Makes the first letter in a string uppercase, simple enough, but used throughout the app

const ucfirst = (str) => str[0].toUpperCase() + str.slice(1);

export default defineNuxtPlugin(() => {
    return {
        provide: {
            ucfirst,
        },
    };
});

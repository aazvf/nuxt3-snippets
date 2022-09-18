// Simple plugin to return an 's' character if the integer is more than 1
// Used in text where it might say "30 articles" or "1 article"

export default defineNuxtPlugin(() => {
    return {
        provide: {
            s: (integer) => {
                return integer === 1 ? "" : "s";
            },
        },
    };
});

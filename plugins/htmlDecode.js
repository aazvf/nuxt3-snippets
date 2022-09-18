// converts encoded chars in a string to their proper char.
// eg  &gt; becomes >

export const htmlDecode = (value) => {
    var doc = new DOMParser().parseFromString(value, "text/html");
    return doc.documentElement.textContent;
};

export default defineNuxtPlugin(() => {
    return {
        provide: {
            htmlDecode,
        },
    };
});

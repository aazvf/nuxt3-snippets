// Taken from https://stackoverflow.com/questions/10599933/
// Call this.$abbreviateNumber(number) from any vue component
// eg 1257499 -> 1.2m

export default defineNuxtPlugin(() => {
    return {
        provide: {
            abbreviateNumber: (value) => {
                var newValue = value;
                if (value >= 1000) {
                    var suffixes = ["", "k", "m", "b", "t"];
                    var suffixNum = Math.floor(("" + value).length / 3);
                    var shortValue = "";
                    for (var precision = 2; precision >= 1; precision--) {
                        shortValue = parseFloat(
                            (suffixNum != 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(precision)
                        );
                        var dotLessShortValue = (shortValue + "").replace(/[^a-zA-Z 0-9]+/g, "");
                        if (dotLessShortValue.length <= 2) {
                            break;
                        }
                    }
                    if (shortValue % 1 != 0) shortValue = shortValue.toFixed(1);
                    newValue = shortValue + suffixes[suffixNum];
                }
                return newValue;
            },
        },
    };
});

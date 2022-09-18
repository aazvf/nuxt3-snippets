// Get the extension of a url file
export default (url) => url.split(/[#?]/)[0].split(".").pop().trim();

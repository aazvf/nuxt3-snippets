// Get the base filename of a url.
export default (url) => url.split(/[#?]/)[0].split("/").pop().trim();

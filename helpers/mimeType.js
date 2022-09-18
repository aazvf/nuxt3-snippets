// Get the extension of a url file

import urlExtension from "./urlExtension";

const mimes = {
    jpg: "image/jpg",
    png: "image/png",
    gif: "image/gif",
    jpeg: "image/jpg",
    mp4: "video/mp4",
    webp: "image/webp",
    webm: "video/webm",
};

const mimeType = (url) => {
    const ext = urlExtension(url);
    return mimes[ext] || "image/jpg";
};

export default mimeType;

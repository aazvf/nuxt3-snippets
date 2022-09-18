export default (str) => {
    return Buffer.from(str, "base64").toString("ascii");
};

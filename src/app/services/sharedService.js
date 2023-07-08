
const getUrl = (isWookiee, url) => {
    const wookieeFormat = isWookiee ? '/?format=wookiee': '';
    return `${url}${wookieeFormat}`;
}

const getIdFromUrl = (url) => {
    if (url == undefined) return "";
    if (url.length == 0) return "";
    const substringId = url.substring(0, url.lastIndexOf('/'));
    return substringId.substring(substringId.lastIndexOf('/') + 1);
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * max) + min;
}

module.exports = {
    getUrl,
    getIdFromUrl,
    getRandomInt,
};


const checkLocalstorage = () => {
    return typeof window.localStorage !== 'undefined';
}

const encodeV2 = str => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const byteHex = n => ("0" + Number(n).toString(16)).substr(-2);
    const applySaltToChar = code => textToChars(str).reduce((a,b) => a ^ b, code);

    return text => text.split('')
        .map(textToChars)
        .map(applySaltToChar)
        .map(byteHex)
        .join('');
}

const decodeV2 = str => {
    const textToChars = text => text.split('').map(c => c.charCodeAt(0));
    const applySaltToChar = code => textToChars(str).reduce((a,b) => a ^ b, code);
    return encoded => encoded.match(/.{1,2}/g)
        .map(hex => parseInt(hex, 16))
        .map(applySaltToChar)
        .map(charCode => String.fromCharCode(charCode))
        .join('');
}

const encodeV1 = str => {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g,
        function toSolidBytes(match, p1) {
            return String.fromCharCode('0x' + p1);
        }));
}

const decodeV1 = str => {
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}

const storageGet = key => {
    if (
        checkLocalstorage()
        && window.localStorage.getItem(key) !== null
    ) {
        return  JSON.parse( decodeV1(localStorage.getItem(key)));
    }
    return false;
}

const storageSet = (key, value) => {
    if (checkLocalstorage()) {
        window.localStorage.setItem(key, encodeV1(JSON.stringify(value)));
        return true
    }
    return false;
}

const storageRemove = key => {
    if (checkLocalstorage()) {
        window.localStorage.removeItem(key);
        return true
    }
    return false;
}

export {
    storageGet,
    storageSet,
    storageRemove,
    encodeV1,
    encodeV2,
    decodeV1,
    decodeV2
}
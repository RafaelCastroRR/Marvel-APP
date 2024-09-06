import CryptoJS from "crypto-js";

const timeStamp = new Date().getTime();
const private_api_key = '18d0ff96ca67a3609d24d3dedf04663524a5fdd5';
const public_api_key = '788be567d2909f641bf01734d857b637';
const hash = CryptoJS.MD5(timeStamp + private_api_key + public_api_key).toString();

export const reqCharacters = async (pagina, searchCharacter = '') => {
    const offset = (pagina - 1) * 20;
    const url = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${public_api_key}&hash=${hash}&offset=${offset}&nameStartsWith=${encodeURIComponent(searchCharacter)}`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    return data;
};

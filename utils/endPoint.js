const BASE_URL = `https://pokeapi.co/api/v2`;
const SPECIES = `/pokemon-species`;
const POKEMON = `/pokemon`
const IMG_BASE_URL =`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other`
const IMG_OFFICIAL =`/official-artwork`;
const IMG_DREAMWORLD = `/dream-world`


export default {
    GET_ALL_SPICIES : `${BASE_URL}${SPECIES}`,
    GET_ALL_POKEMON :`${BASE_URL}${POKEMON}`,
    IMG_OFFICIAL : `${IMG_BASE_URL}${IMG_OFFICIAL}`,
    IMG_DREAMWORLD:`${IMG_BASE_URL}${IMG_DREAMWORLD}`
};
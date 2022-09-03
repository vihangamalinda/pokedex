import endPoint from "../../utils/endPoint.js";
import {pokemonInfo} from "../poke-api/structure/structure.js";
import card from "../card/card.js";

const getListOfPokemons = async () => {
  // console.log(endPoints.GET_ALL_SPICIES);
  const response = await fetch(`${endPoint.GET_ALL_SPICIES}?limit=40`);
  const result = await response.json();
  //  console.log(result.results);
  result.results.forEach((pokemon) => {
    getPokemonInfo(pokemon.name);
    // console.log(pokemon)
  });
};

const getPokemonInfo = async (name) => {
  const response = await fetch(`${endPoint.GET_ALL_POKEMON}/${name}`);
  const resultInfo = await response.json();
//   console.log(`${name} : `);
//   console.log(result);
 const obj =  pokemonInfo(resultInfo);
//  console.log(obj);
 card(obj);  
 pokemonArray.push(obj);

//  console.log(obj);
};


const pokemonArray = []




getListOfPokemons();
// .then((data)=> card());

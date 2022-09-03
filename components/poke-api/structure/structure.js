import endPoint from "../../../utils/endPoint.js";

export const pokemonSpecicesInfo = (info) => {
    console.log(info);
    // debugger;

    const obj = {
      id: info.id,
      name: info.name,
      base_happiness: info.base_happiness,
      type: info.color.name,
      egg_groups: info.egg_groups,
      evolution_chain: info.evolution_chain,
      evolves_from_species:
        info.evolves_from_species != null ? info.evolves_from_species : null,
      flavor_text_entries: info.flavor_text_entries[0],
      forms_switchable: info.forms_switchable,
      habitat: info.habitat.name,
      has_gender_differences: info.has_gender_differences,
      is_baby: info.is_baby,
      is_legendary: info.is_legendary,
      is_mythical: info.is_mythical,
      shape: info.shape.name,
      img_url: `${endPoint.IMG_OFFICIAL}/${info.id}.png`,
    };
    return obj;
  };

export  const pokemonInfo =(info)=>{
   const  obj ={
        id: info.id,
        name: info.name,
        offical_img: `${endPoint.IMG_OFFICIAL}/${info.id}.png`,
        dreamWorld_img : `${endPoint.IMG_DREAMWORLD}/${info.id}.svg`,
        types:info.types,
    }

    return obj;

}
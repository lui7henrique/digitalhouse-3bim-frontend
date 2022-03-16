import React from "react";
import { pokeContainer, pokeList, pokeOption } from "../styles/styles";

export const Pokedex = (props) => {
  const { updateParent, pokemons } = props;

  return (
    <div style={pokeContainer}>
      <h3>POKEDEX</h3>

      <div style={pokeList}>
        {pokemons.map((pokemon) => (
          <p onClick={() => updateParent(pokemon)} style={pokeOption}>
            {pokemon.name}
          </p>
        ))}
      </div>
    </div>
  );
};

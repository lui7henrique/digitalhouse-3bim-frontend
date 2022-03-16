import React, { Component, useState } from "react";
import "../styles/App.css";
import { Pokedex } from "./Pokedex";
import data from "../pokedex.json";

export const App = () => {
  const [pokemon, setPokemon] = useState(data[0]);
  const [pokedex, setPokedex] = useState(data);

  const update = (pokemon) => {
    setPokemon(pokemon);
  };

  const getPokemonId = () => {
    return String(pokemon.id).padStart("3", "0");
  };

  return (
    <div style={{ display: "flex" }}>
      <div className="container">
        <img
          id="pokemonImg"
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${getPokemonId()}.png`}
          alt={pokemon[0]}
        />
        <p id="name">{`${pokemon.name} is a pokemon type ${pokemon.type[0]}`}</p>
      </div>

      <Pokedex updateParent={update} pokemons={pokedex} />
    </div>
  );
};

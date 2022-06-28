import "./Main.css";
import React, { useState } from "react";
import pokeball from "../../iconos/Pokeball.png";
import Pokemones from "../Pokemones/Pokemones";
import CardPokemon from "../CardPokemon/CardPokemon";

export default function Main() {
  const [listaDePokemones, setListaDePokemones] = useState(Pokemones);
  const ordenarPorNumero = (ordenar) => {
    let listaActualizadaPorNumero = [...listaDePokemones].sort(
      (a, b) => a.numero - b.numero
    );
    setListaDePokemones(listaActualizadaPorNumero);
  };
  const ordenarPorNombre = (ordenar) => {
    let listaActualizadaPorNombre = [...listaDePokemones].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    setListaDePokemones(listaActualizadaPorNombre);
  };

  const buscarNombre = (nommbre) => {
    const buscarPorLetras = [...listaDePokemones].filter((pokemones) =>
      pokemones.nombre.match(/´${buscarNombre}´/gi)
    );
    console.log(buscarPorLetras);
    return buscarPorLetras.match;
  };

  return (
    <div className="padre-div">
      <div className="headerCard">
        <img className="pokeball" src={pokeball} alt="logo_pokemon" />
        <h1 className="titulo-pokedex">Pokédex</h1>
        <button
          onClick={
            listaDePokemones[0].numero !== 1
              ? ordenarPorNumero
              : ordenarPorNombre
          }
          className="button-ordenar"
        >
          {listaDePokemones[0].numero === 1 ? "⬇🔢" : "⬇🔠"}
        </button>
      </div>
      <div className="input">
        <input
          onChange={buscarNombre}
          className="input-buscador"
          type="text"
          placeholder=" 🔎  Buscar"
        />
      </div>
      <div className="lista-pokemones">
        {listaDePokemones.map((pokemon) => {
          return <CardPokemon pokemon={pokemon} key={pokemon.nombre} />;
        })}
      </div>
    </div>
  );
}

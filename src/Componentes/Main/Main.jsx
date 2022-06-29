import "./Main.css";
import React, { useState } from "react";
import pokeball from "../../iconos/Pokeball.png";
import Pokemones from "../Pokemones/Pokemones";
import CardPokemon from "../CardPokemon/CardPokemon";

export default function Main() {
  const [listaDePokemones, setListaDePokemones] = useState(Pokemones);
  const ordenarPorNumero = () => {
    let listaActualizadaPorNumero = [...listaDePokemones].sort(
      (a, b) => a.numero - b.numero
    );
    setListaDePokemones(listaActualizadaPorNumero);
  };
  const ordenarPorNombre = () => {
    let listaActualizadaPorNombre = [...listaDePokemones].sort((a, b) =>
      a.nombre.localeCompare(b.nombre)
    );
    setListaDePokemones(listaActualizadaPorNombre);
  };

  const buscarNombre = (ev) => {
    if (ev.target.value === "") {
      setListaDePokemones(Pokemones);
    } else {
      const listaFiltrada = [...listaDePokemones].filter((pokemon) => {
        const buscar = new RegExp(`.*${ev.target.value}.*`, "gi");
        return pokemon.nombre.match(buscar);
      });
      setListaDePokemones(listaFiltrada);
    }
  };
  return (
    <div className="padre-div">
      <div className="headerCard">
        <img className="pokeball" src={pokeball} alt="logo_pokemon" />
        <h1 className="titulo-pokedex">Pokédex</h1>
        <div className="colaboradores">
          <h4> By: Pablito and Nico</h4>
        </div>
        <button
          onClick={
            listaDePokemones[0].numero !== "001"
              ? ordenarPorNumero
              : ordenarPorNombre
          }
          className="button-ordenar"
        >
          {listaDePokemones[0].numero === "001" ? "⬇🔢" : "⬇🔠"}
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

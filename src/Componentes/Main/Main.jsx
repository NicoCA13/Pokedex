import "./Main.css";
import React from "react";
import pokeball from "../../iconos/Pokeball.png";
// import Pokemones from "../Pokemones/Pokemones";
import ListaDeDatos from "../ListaDeDatos/ListaDeDatos";

export default function Main() {
  return (
    <div className="padre-div">
      <div className="headerCard">
        <img className="pokeball" src={pokeball} alt="logo_pokemon" />
        <h1 className="titulo-pokedex">Pokédex</h1>
        <button className="button-ordenar"># ↓</button>
      </div>
      <div className="input">
        <input
          className="input-buscador"
          type="text"
          placeholder=" 🔎  Buscar"
        />
      </div>
      <div className="lista-pokemones"></div>
      <ListaDeDatos />
    </div>
  );
}

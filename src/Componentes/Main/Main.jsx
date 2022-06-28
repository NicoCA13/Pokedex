import "./Main.css";
import React from "react";
import pokeball from "../../iconos/Pokeball.png";
import Pokemones from "../Pokemones/Pokemones";
import CardPokemon from "../CardPokemon/CardPokemon";

export default function Main() {
  // const Pokemones = [
  //   {
  //     nombre: "Bulbasaur",
  //     numero: 1,
  //     elemento: "Gras",
  //     elementoSecundario: "Poison",
  //     peso: 6.9,
  //     altura: 0.7,
  //     movimiento: "Chlorophyll",
  //     movimientoSecundario: "OverGrow",
  //     stats: { hp: 45, atk: 49, def: 49, satk: 65, sdef: 65, spd: 45 },
  //   },
  //   {
  //     nombre: "Charmander",
  //     numero: 4,
  //     elemento: "Fire",
  //     elementoSecundario: "",
  //     peso: 8.5,
  //     altura: 0.6,
  //     movimiento: "Mega-Punch",
  //     movimientoSecundario: "Fire-Punch",
  //     stats: { hp: 39, atk: 52, def: 43, satk: 60, sdef: 50, spd: 65 },
  //   },
  //   {
  //     nombre: "Squirtle",
  //     numero: 7,
  //     elemento: "Watter",
  //     elementoSecundario: "",
  //     peso: 9.0,
  //     altura: 0.5,
  //     movimiento: "Torrent",
  //     movimientoSecundario: "Rain-Dish",
  //     stats: { hp: 44, atk: 48, def: 65, satk: 50, sdef: 64, spd: 43 },
  //   },
  //   {
  //     nombre: "Butterfree",
  //     numero: 12,
  //     elemento: "Bug",
  //     elementoSecundario: "Flying",
  //     peso: 32.0,
  //     altura: 1.1,
  //     movimiento: "Compound-Eyes",
  //     movimientoSecundario: "Tinted-Lens",
  //     stats: { hp: 60, atk: 45, def: 50, satk: 90, sdef: 80, spd: 70 },
  //   },
  //   {
  //     nombre: "Pikachu",
  //     numero: 25,
  //     elemento: "Electric",
  //     elementoSecundario: "",
  //     peso: 6.0,
  //     altura: 0.4,
  //     movimiento: "Pay-Day",
  //     movimientoSecundario: "",
  //     stats: { hp: 35, atk: 55, def: 40, satk: 50, sdef: 50, spd: 90 },
  //   },
  //   {
  //     nombre: "Gastly",
  //     numero: 92,
  //     elemento: "Ghost",
  //     elementoSecundario: "Type",
  //     peso: 0.1,
  //     altura: 1.3,
  //     movimiento: "Levitate",
  //     movimientoSecundario: "",
  //     stats: { hp: 30, atk: 35, def: 30, satk: 100, sdef: 35, spd: 80 },
  //   },
  //   {
  //     nombre: "Ditto",
  //     numero: 132,
  //     elemento: "Normal",
  //     elementoSecundario: "",
  //     peso: 4.0,
  //     altura: 0.3,
  //     movimiento: "Limber",
  //     movimientoSecundario: "Imposter",
  //     stats: { hp: 48, atk: 48, def: 48, satk: 48, sdef: 48, spd: 48 },
  //   },
  //   {
  //     nombre: "Mew",
  //     numero: 152,
  //     elemento: "Psychic",
  //     elementoSecundario: "",
  //     peso: 4.0,
  //     altura: 0.4,
  //     movimiento: "Synchronize",
  //     movimientoSecundario: "",
  //     stats: { hp: 100, atk: 100, def: 100, satk: 100, sdef: 100, spd: 100 },
  //   },
  //   {
  //     nombre: "Aron",
  //     numero: 304,
  //     elemento: "Steel",
  //     elementoSecundario: "Rock",
  //     peso: 60,
  //     altura: 0.4,
  //     movimiento: "sturdy",
  //     movimientoSecundario: "Rock-Head",
  //     stats: { hp: 50, atk: 70, def: 100, satk: 40, sdef: 40, spd: 30 },
  //   },
  // ];
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
      {Pokemones.map((pokemon) => {
        <CardPokemon pokemon={pokemon} />;
      })}
    </div>
  );
}

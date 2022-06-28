import "./Main.css";
import React from "react";
import pokeball from "../../iconos/Pokeball.png";
// import bulbasaur from "../../iconos/bulbasaur.png";
// import charmander from "../../iconos/charmander.png";
// import squirtle from "../../iconos/squirtle.png";
// import butterfree from "../../iconos/butterfree.png";
// import pikachu from "../../iconos/pikachu.png";
// import gastly from "../../iconos/gastly.png";
// import ditto from "../../iconos/ditto.png";
// import mew from "../../iconos/mew.png";
// import aron from "../../iconos/aron.png";
import Pokemons from "../Pokemons/Pokemons";

export default function Main() {
  const ListaDeDatos = [
    {
      nombre: "Bulbasaur",
      numero: 1,
      elemento: "Gras",
      elementoSecundario: "Poison",
      peso: 6.9,
      altura: 0.7,
      movimiento: "Chlorophyll",
      movimientoSecundario: "OverGrow",
      stats: { hp: 45, atk: 49, def: 49, satk: 65, sdef: 65, spd: 45 },
    },
    {
      nombre: "Charmander",
      numero: 4,
      elemento: "Fire",
      elementoSecundario: "",
      peso: 8.5,
      altura: 0.6,
      movimiento: "Mega-Punch",
      movimientoSecundario: "Fire-Punch",
      stats: { hp: 39, atk: 52, def: 43, satk: 60, sdef: 50, spd: 65 },
    },
    {
      nombre: "Squirtle",
      numero: 7,
      elemento: "Watter",
      elementoSecundario: "",
      peso: 9.0,
      altura: 0.5,
      movimiento: "Torrent",
      movimientoSecundario: "Rain-Dish",
      stats: { hp: 44, atk: 48, def: 65, satk: 50, sdef: 64, spd: 43 },
    },
    {
      nombre: "Butterfree",
      numero: 12,
      elemento: "Bug",
      elementoSecundario: "Flying",
      peso: 32.0,
      altura: 1.1,
      movimiento: "Compound-Eyes",
      movimientoSecundario: "Tinted-Lens",
      stats: { hp: 60, atk: 45, def: 50, satk: 90, sdef: 80, spd: 70 },
    },
    {
      nombre: "Pikachu",
      numero: 25,
      elemento: "Electric",
      elementoSecundario: "",
      peso: 6.0,
      altura: 0.4,
      movimiento: "Pay-Day",
      movimientoSecundario: "",
      stats: { hp: 35, atk: 55, def: 40, satk: 50, sdef: 50, spd: 90 },
    },
    {
      nombre: "Gastly",
      numero: 92,
      elemento: "Ghost",
      elementoSecundario: "Type",
      peso: 0.1,
      altura: 1.3,
      movimiento: "Levitate",
      movimientoSecundario: "",
      stats: { hp: 30, atk: 35, def: 30, satk: 100, sdef: 35, spd: 80 },
    },
    {
      nombre: "Ditto",
      numero: 132,
      elemento: "Normal",
      elementoSecundario: "",
      peso: 4.0,
      altura: 0.3,
      movimiento: "Limber",
      movimientoSecundario: "Imposter",
      stats: { hp: 48, atk: 48, def: 48, satk: 48, sdef: 48, spd: 48 },
    },
    {
      nombre: "Mew",
      numero: 152,
      elemento: "Psychic",
      elementoSecundario: "",
      peso: 4.0,
      altura: 0.4,
      movimiento: "Synchronize",
      movimientoSecundario: "",
      stats: { hp: 100, atk: 100, def: 100, satk: 100, sdef: 100, spd: 100 },
    },
    {
      nombre: "Aron",
      numero: 304,
      elemento: "Steel",
      elementoSecundario: "Rock",
      peso: 60,
      altura: 0.4,
      movimiento: "sturdy",
      movimientoSecundario: "Rock-Head",
      stats: { hp: 50, atk: 70, def: 100, satk: 40, sdef: 40, spd: 30 },
    },
  ];
  // const CardPokemon = ListaDeDatos.map(Pokemons.nombre);

  return (
    <div>
      {/* {ListaDeDatos.map((pokemon) => {
        CardPokemon.pokemon = { pokemon };
        return CardPokemon;
      })} */}
      ;
      <div className="headerCard">
        <img className="pokeball" src={pokeball} alt="logo_pokemon" />

        <h1>Pokédex</h1>
        <button># ↓</button>
      </div>
      <div className="input">
        <input
          className="input-buscador"
          type="text"
          placeholder=" 🔎  Buscar"
        />
      </div>
      <div className="lista-pokemones">
        {/* <div className="bulbasaur">
          {" "}
          <span>#001</span>{" "}
          <img className="img-pokemones" src={bulbasaur} alt="img_bulbasaur" />
          <div className="bulbasaur-name">
            <h3>Bulbasaur</h3>
          </div>
        </div>
        <div className="charmander">
          {" "}
          <span>#004</span>{" "}
          <img
            className="img-pokemones"
            src={charmander}
            alt="img_charmander"
          />
          <div className="charmander-name">
            <h3>Charmander</h3>
          </div>
        </div>
        <div className="squirtle">
          {" "}
          <span>#007</span>{" "}
          <img className="img-pokemones" src={squirtle} alt="img_squirtle" />
          <div className="squirtle-name">
            <h3>Squirtle</h3>
          </div>
        </div>
        <div className="butterfree">
          {" "}
          <span>#012</span>{" "}
          <img
            className="img-pokemones"
            src={butterfree}
            alt="img_butterfree"
          />
          <div className="butterfree-name">
            <h3>Butterfree</h3>
          </div>
        </div>
        <div className="pikachu">
          {" "}
          <span>#025</span>{" "}
          <img className="img-pokemones" src={pikachu} alt="img_pikachu" />
          <div className="pikachu-name">
            <h3>Pikachu</h3>
          </div>
        </div>
        <div className="gastly">
          {" "}
          <span>#082</span>{" "}
          <img className="img-pokemones" src={gastly} alt="img_gastly" />
          <div className="gastly-name">
            <h3>Gastly</h3>
          </div>
        </div>
        <div className="ditto">
          {" "}
          <span>#132</span>{" "}
          <img className="img-pokemones" src={ditto} alt="img_ditto" />
          <div className="ditto-name">
            <h3>Ditto</h3>
          </div>
        </div>
        <div className="mew">
          {" "}
          <span>#162</span>{" "}
          <img className="img-pokemones" src={mew} alt="img_Mew" />
          <div className="mew-name">
            <h3>Mew</h3>
          </div>
        </div>
        <div className="aron">
          {" "}
          <span>#304</span>{" "}
          <img className="img-pokemones" src={aron} alt="img_aron" />
          <div className="aron-name">
            <h3>Aron</h3>
          </div>
        </div> */}
      </div>
      {/* <Pokemons />{" "} */}
    </div>
  );
}

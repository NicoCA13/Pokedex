import "./Main.css";
import React from "react";
import pokeball from "../../iconos/Pokeball.png";
import bulbasaur from "../../iconos/bulbasaur.png";
import charmander from "../../iconos/charmander.png";
import squirtle from "../../iconos/squirtle.png";
import butterfree from "../../iconos/butterfree.png";
import pikachu from "../../iconos/pikachu.png";
import gastly from "../../iconos/gastly.png";
import ditto from "../../iconos/ditto.png";
import mew from "../../iconos/mew.png";
import aron from "../../iconos/aron.png";

export default function Main() {
  return (
    <div>
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
    </div>
  );
}

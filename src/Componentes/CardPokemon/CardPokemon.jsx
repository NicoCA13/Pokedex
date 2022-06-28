import React from "react";

export default function CardPokemon(props) {
  return (
    <div className="cardPokemon">
      {" "}
      <span>{props.pokemon.id}</span>{" "}
      {/* <img className="img-pokemones" src={bulbasaur} alt="img_bulbasaur" /> */}
      <div> {props.pokemon.color}</div>
      <h3>{props.pokemon.nombre}</h3>
    </div>
  );
}

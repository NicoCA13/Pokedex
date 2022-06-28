import React from "react";

export default function CardPokemon({ pokemon, stats }) {
  // const pokemonesFiltrado = Pokemones.map((pokemones) => {
  //   pokemones.props.name;
  // });
  // {

  // }
  const imgPokemon = require(`../../iconos/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <div key={pokemon.numero.toString()} className="bodyCard">
      <span>{pokemon.numero}</span> <img src={imgPokemon} alt="" />
      <div className="colorPokemon">{pokemon.color}</div>
      <div className="pep">{pokemon.nombre}</div>
    </div>
  );
}

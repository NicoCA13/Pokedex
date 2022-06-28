import React from "react";

export default function CardPokemon({ pokemon }) {
  /*const pokemonesFiltrado = Pokemones.map((pokemones) => {
    pokemones.props.name;
  });*/
  return (
    <>
      <div className="algo">
        <span>{pokemon.numero}</span>
        <div className="colorPokemon">{pokemon.color}</div>
        <div className="pep">{pokemon.nombre}</div>
      </div>
    </>
  );
}

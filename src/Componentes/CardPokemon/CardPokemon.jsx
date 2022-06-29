import React from "react";
import "./CardPokemon.css";

export default function CardPokemon({ pokemon }) {
  const imgPokemon = require(`../../iconos/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <div
      className="padrePokemones"
      style={{
        fontWeight: "900",
        width: "300px",
        border: "solid 4px",
        borderColor: pokemon.color,
        borderRadius: "25px",
      }}
      key={pokemon.numero.toString()}
    >
      <span style={{ color: pokemon.color }}>#{pokemon.numero}</span>{" "}
      <img src={imgPokemon} alt={imgPokemon} />
      <div
        className="cardBorder"
        style={{
          backgroundColor: pokemon.color,
          borderRadius: " 0 0 15px 15px",
          color: "white",
          fontSize: "25px",
        }}
      >
        {pokemon.nombre}
      </div>
    </div>
  );
}

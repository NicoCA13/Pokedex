import React from "react";
import "./Tarjeta.css";
import { Link } from "react-router-dom";
import imgPeso from "../../iconos/Weight.svg";
import imgTamaño from "../../iconos/Height.svg";
import { useParams } from "react-router-dom";
import pokeball from "../../iconos/Pokeball.png";
import Pokemones from "../Pokemones/Pokemones";
export default function Tarjeta({}) {
  const { nombre } = useParams();
  const indicePokemon = Pokemones.findIndex(
    (pokemon) => pokemon.nombre.toLowerCase() === nombre.toLowerCase()
  );
  const pokemon = Pokemones[indicePokemon];

  const imgPokemon = require(`../../iconos/${pokemon.nombre.toLowerCase()}.png`);
  return (
    <div className="body">
      <div className="contenedorTarjeta">
        <div className="tarjeta" style={{ backgroundColor: pokemon.color }}>
          <div className="superior">
            <Link style={{ textDecoration: "none" }} to={"/"}>
              <div className="arrow"> ← </div>
            </Link>
            <h1 className="pokemonYSuNombre"> {pokemon.nombre}</h1>
            <span className="pokemonYSuNumero">#{pokemon.numero}</span>
          </div>
          <div>
            <img
              className="pokeballFondo"
              src={pokeball}
              alt={pokeball}
              style={{ opacity: "10%" }}
            />
          </div>
          <div>
            {indicePokemon !== 0 && (
              <Link
                style={{ textDecoration: "none" }}
                to={`/tarjeta/${Pokemones[indicePokemon - 1].nombre}`}
              >
                <button className="botonesDeMover">←</button>
              </Link>
            )}

            <img className="pokemonImagen" src={imgPokemon} alt={imgPokemon} />
            {indicePokemon !== Pokemones.length - 1 && (
              <Link
                style={{ textDecoration: "none" }}
                to={`/tarjeta/${Pokemones[indicePokemon + 1].nombre}`}
              >
                <button className="botonesDeMover">→</button>
              </Link>
            )}
          </div>

          <div className="contenedorDatos">
            <div className="contenedorElementos">
              {pokemon.elemento.map((el) => (
                <div className={`elemento1 ${el.toLowerCase()}`}>
                  <h4>{el}</h4>
                </div>
              ))}
            </div>
            <h4 className="about" style={{ color: pokemon.color }}>
              About
            </h4>

            <div className="contendorDatosPokemon">
              <div className="p">
                <div className="c">
                  <img className="imgPeso" src={imgPeso} alt={imgPeso} />
                  <h5 className="peso">{pokemon.peso} Kg</h5>
                </div>
                <h6 className="h6Stats">Weight</h6>
              </div>
              <div className="p">
                <div className="c">
                  <img className="imgTamaño" src={imgTamaño} alt="" />
                  <h5 className="tamaño">{pokemon.altura} m</h5>
                </div>
                <h6 className="h6Stats">Height</h6>
              </div>
              <div className="movimientos">
                <h5>{pokemon.movimiento}</h5>
                <h5>{pokemon.movimientoSecundario}</h5>

                <h6>Moves</h6>
              </div>
            </div>
            <div className="descripcionPokemon">
              <p>{pokemon.descripcion}</p>
            </div>
            <div className="baseStats">
              <h3 style={{ color: pokemon.color }}>Base Stats</h3>
              <div className="datosDePokemon" style={{ color: pokemon.color }}>
                <ul className="listaLetras">
                  <li>HP</li>
                  <li>ATK</li>
                  <li>DEF</li>
                  <li>SATK</li>
                  <li>SDEF</li>
                  <li>SPD</li>
                </ul>
                <ul className="listaNumeros" style={{ color: "black" }}>
                  <li>{pokemon.stats.hp}</li>
                  <li>{pokemon.stats.atk}</li>
                  <li>{pokemon.stats.def}</li>
                  <li>{pokemon.stats.satk}</li>
                  <li>{pokemon.stats.sdef}</li>
                  <li>{pokemon.stats.spd}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import PokeAPI, { IPokemon } from "pokeapi-typescript";
import { PropsColor } from "../types/pokeType";

function InfosPokemon() {
  const params = useParams();
  const [pokemon, setPokemon] = useState<IPokemon | null>(null);

  const ValueParams = (): number => {
    if (params.id !== undefined) return parseInt(params.id);
    else return 0;
  };

  useEffect(() => {
    PokeAPI.Pokemon.resolve(ValueParams())
      .then((res) => setPokemon(res))
      .catch((err) => console.log(err));
    console.log(pokemon);
  }, []);

  return (
    <InfosPokemonContainer>
      {pokemon !== null && pokemon ? (
        <VignettePokemon color={`--color-type-${pokemon.types[0].type.name}`}>
          <img src={pokemon.sprites.front_default} alt="" />
          <div>
            <PokemonName color={`--color-type-${pokemon.types[0].type.name}`}>{pokemon.name}</PokemonName>
          </div>
        </VignettePokemon>
      ) : (
        <NoPokemon>no pokemon</NoPokemon>
      )}
    </InfosPokemonContainer>
  );
}

export default InfosPokemon;
const PokemonName = styled.h1<PropsColor>`
  margin: 1em;
  color: var(${(p) => p.color});
  font-size: 3em;
`;
const NoPokemon = styled.h1`
  width: 100%;
  font-size: 8rem;
`;
const VignettePokemon = styled.div<PropsColor>`
  font-size: 0.7rem;
  display: flex;
  flex-direction: column;
  margin: 1.5em;
  background-color: var(${(p) => p.color});
  width: 30%;
  min-height: 72vh;
  border-radius: 0.75rem;
  overflow: hidden;

  img {
    width: 35em;
    align-self: center;
  }

  div {
    background-color: hsl(255 99% 98%);
    min-height: 36vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const InfosPokemonContainer = styled.div`
  font-size: 0.75rem;
  margin: 8rem 2em 2em 2em;
  padding: 0;
  min-height: 75vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: var(--argent);
  border-radius: 1.25em;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

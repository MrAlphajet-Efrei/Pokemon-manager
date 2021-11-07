import PokeAPI, { IPokemon } from "pokeapi-typescript";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PokemonCards from "../components/PokemonCards";
import { MdCatchingPokemon } from "react-icons/md";

function Pokedex() {
  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [upperIndex, setUpperIndex] = useState(0);
  const [lowerIndex, setLowerIndex] = useState(0);

  useEffect(() => {
    fetchPokemon();
  }, []);

  const fetchPokemon = async () => {
    let pokeArray: IPokemon[] = [];

    const resourceList = await PokeAPI.Pokemon.listAll();
    resourceList.results.map(async (result) => {
      const pokemon: IPokemon = await PokeAPI.Pokemon.fetch(result.name);
      pokeArray.push(pokemon);
    });
    setPokemons(pokeArray);
  };

  const GetNextPage = (): void => {
    if (lowerIndex < 858 && upperIndex !== 0) {
      setUpperIndex(upperIndex + 40);
      setLowerIndex(lowerIndex + 40);
    } else if (upperIndex === 0) {
      setUpperIndex(upperIndex + 40);
    } else if (lowerIndex === 858) {
      alert("You've reached the last page");
    }
  };

  const GetPrevioustPage = (): void => {
    if (lowerIndex === 0) {
      alert("You are in the first page, can't go back any further");
    } else {
      setUpperIndex(upperIndex - 40);
      setLowerIndex(lowerIndex - 40);
    }
  };

  return (
    <PokeDexContainer>
      {pokemons.length === 0 ? (
        <ButtonDex onClick={GetNextPage}>Ouvrir le Pokedex</ButtonDex>
      ) : (
        <DivButtonNavDex>
          <ButtonDex onClick={GetPrevioustPage}>Go to previous page</ButtonDex>
          <ButtonDex onClick={GetNextPage}>Go to next page</ButtonDex>
        </DivButtonNavDex>
      )}

      {pokemons.length === 0 ? (
        <PokeBallLogo />
      ) : (
        <DexList>
          {pokemons
            .filter(
              (pokemon) => pokemon.id < upperIndex && pokemon.id >= lowerIndex
            )
            .sort(pokemon => pokemon.id)
            .map((pokemon) => {
              return (
                <PokemonCards
                  key={pokemon.id}
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.types[0].type.name}
                  stats={pokemon.stats}
                  image={pokemon.sprites.front_default}
                />
              );
            })}
        </DexList>
      )}
    </PokeDexContainer>
  );
}

export default Pokedex;
/**absolute for the button and relative for the parent */
const PokeDexContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-full
        h-full
        bg-gray-200
        items-center
        relative
    `}
`;
const DexList = styled.div`
  ${tw`
        grid
        grid-cols-5
        bg-gradient-to-r from-blanc2 to-color-type-water
        rounded-xl
        items-center
        space-x-3
        space-y-3
        p-5
        mt-40
    `}
`;
const DivButtonNavDex = styled.div`
  ${tw`
        w-auto
        h-auto
        items-center
        bg-ultra-lune
        rounded-full
        m-5
        fixed
    `}
`;
const ButtonDex = styled.button`
  ${tw`
        bg-or 
        rounded-xl 
        h-auto 
        w-auto 
        m-5
        p-5 
        text-center 
        font-bold
    `}
`;
const PokeBallLogo = styled(MdCatchingPokemon)`
  ${tw`
        h-60
        w-60
        bg-blanc2
        rounded-3xl
        border-2
        border-or
    `}
`;

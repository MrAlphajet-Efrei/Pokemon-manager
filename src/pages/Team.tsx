import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PokemonCardsTeam from "../components/PokemonCardTeam";

import { TeamContext } from "../hooks/TeamContext";

function Team() {
  const teamContext = useContext(TeamContext);
  return (
    <TeamMainContainer>
      {teamContext.team.length === 0 ? (
        <TeamContainer>
          <h1>Team Empty</h1>
        </TeamContainer>
      ) : (
        <TeamContainer>
          {teamContext.team.map((pokemon) => {
            return (
              <PokemonCardsTeam
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                stats={pokemon.stats}
                image={pokemon.sprites.front_default}
              />
            );
          })}
        </TeamContainer>
      )}
    </TeamMainContainer>
  );
}

export default Team;

const TeamMainContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-auto
        h-auto
        bg-gray-200
        items-center
        place-self-center
        m-32
        p-24
    `}
`;
const TeamContainer = styled.div`
  ${tw`
        grid
        grid-cols-6
        bg-gradient-to-r from-blanc2 to-color-type-water
        rounded-2xl
        place-self-center
        place-content-center
        w-auto
        h-auto
        min-h-[64px]
        min-w-[256px]
        p-10
        space-x-4
    `}

  > h1 {
    ${tw`
            font-bold
            text-xl
            p-12
        `}
  }
`;

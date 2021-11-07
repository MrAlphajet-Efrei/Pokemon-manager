import React, { useContext } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PokemonCardsTeam from "../components/PokemonCardTeam";
import { TeamContext } from "../hooks/TeamContext";
import { MdOutlineCatchingPokemon } from "react-icons/md";
import { addDoc, collection } from "@firebase/firestore";
import { db } from "../firebase";
import { FireBasePokemon, FirebaseTeamFormat } from "../types/pokeType";

function NewTeam() {
  const teamContext = useContext(TeamContext);

  const SaveTeam = async () => {
    let team: FirebaseTeamFormat = [];
    teamContext.team.forEach((pokemon) => {
      team.push({ id: pokemon.id, name: pokemon.name });
    });
    const collectionRef = collection(db, "FightTeams");
    const payload = { team: team };
    const docRef = await addDoc(collectionRef, payload);
    console.log(docRef); 
  };
  return (
    <TeamMainContainer>
      <Pokeball />
      {teamContext.team.length === 0 ? (
        <TeamContainer>
          <h1>Team Empty</h1>
        </TeamContainer>
      ) : (
        <React.Fragment>
          <TeamContainer>
            <CardTeamContainer>
              {teamContext.team.map((pokemon, i) => {
                return (
                  <PokemonCardsTeam
                    key={i}
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    stats={pokemon.stats}
                    image={pokemon.sprites.front_default}
                  />
                );
              })}
            </CardTeamContainer>
            <button onClick={SaveTeam}>Save Team set</button>
          </TeamContainer>
        </React.Fragment>
      )}
    </TeamMainContainer>
  );
}

export default NewTeam;

const TeamMainContainer = styled.div`
  ${tw`
        flex
        flex-col
        w-auto
        h-auto
        bg-gray-200
        items-center
        place-self-center
        mr-32
        ml-32
        mb-32
        mt-0
        p-24
    `}
`;
const TeamContainer = styled.div`
  ${tw`
        flex 
        flex-col
        bg-gradient-to-r from-blanc2 to-color-type-water
        rounded-2xl
        place-self-center
        place-content-center
        w-auto
        h-auto
        min-h-[64px]
        min-w-[256px]
        p-10
        space-y-2
    `}

  > h1 {
    ${tw`
            font-bold
            text-xl
            p-12
            text-or
        `}
  }

  > button {
    ${tw`
      w-auto
    h-auto
    p-5
    text-ultra-lune
    bg-gradient-to-r from-or to-yellow-200
    cursor-pointer
    font-semibold
    text-center
    rounded-full
    text-3xl
    `}
  }
`;
const CardTeamContainer = styled.div`
  ${tw`
    grid
    grid-cols-6
    w-auto
    h-auto 
    p-4
    space-x-4
    rounded-3xl
    place-self-center
    place-content-center
    border-2
    border-black
  `}
`;
const Pokeball = styled(MdOutlineCatchingPokemon)`
  ${tw`
    bg-gradient-to-r from-or to-yellow-200
    bg-opacity-75
    rounded-3xl
    w-32
    h-32
    mt-3
    mb-10
  `}
  color: #E9383F;
`;

import React, { useContext } from "react";
import styled from "styled-components";
import CardTeam from "../components/CardTeam";
import { TeamContext } from "../hooks/TeamContext";

function NewTeam() {
  const team = useContext(TeamContext);
  return (
    <TeamContainer>
      <Team>
        {team.team.length === 0 ? (
          <h1>Your team is empty</h1>
        ) : (
          <>
            {team.team.map((pokemon, i) => {
              return (
                <React.Fragment key={i}>
                  <CardTeam
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    stats={pokemon.stats}
                    image={pokemon.sprites.front_default}
                  />
                </React.Fragment>
              );
            })}
          </>
        )}
      </Team>
    </TeamContainer>
  );
}

export default NewTeam;

const Team = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  width: 90%;
  min-height: 45vh;
  font-size: 1.25em;
  background-color: transparent;
  justify-content: center;
`;
const TeamContainer = styled.div`
  font-size: 0.5rem;
  margin: 8rem 2em 2em 2em;
  padding: 0;
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--argent);
  border-radius: 1.25em;
  position: relative;
  overflow: hidden;
  z-index: 2;
`;

import PokeAPI, { IPokemon } from "pokeapi-typescript";
import React, { useContext } from "react";
import styled from "styled-components";
import { TeamContext } from "../hooks/TeamContext";
import { card, PropsColor } from "../types/pokeType";

function Card({ id, name, type, stats, image }: card) {
  const team = useContext(TeamContext)

  const AddPokemonToTeams = () => {
    let pokeArray:IPokemon[] = [...team.team]
    if(team.team.length <= 5){
      const resPoke = GetPokemonByName();
      resPoke.then(res => pokeArray.push(res)).catch(err => console.log(err))
      team.setTeam(pokeArray)
    }
    else{
      console.log("Your team is full")
    }
  }

  const GetPokemonByName = async () => {
    return await PokeAPI.Pokemon.fetch(name);
  };

  return (
    <CardContainer color={`--color-type-${type}`}>
      <img src={image} alt="" />
      <div>
        <h1>{name}</h1>
        <p>Pokemon de type {type} sah il est style</p>
        <ButtonSection>
          <button>More Infos</button>
          <button onClick={AddPokemonToTeams}>Add to team</button>
        </ButtonSection>
      </div>
    </CardContainer>
  );
}

export default Card;
const ButtonSection = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  justify-content: center;
  align-items: center;
`;
const CardContainer = styled.div<PropsColor>`
  background-size: cover;
  background-color: var(${(p) => p.color});
  padding: 2rem 0 0;
  margin-top: 2em;
  margin-bottom: 1em;
  max-width: 35ch;
  border-radius: 0.5em;
  font-size: 1.5em;
  overflow: hidden;
  transition: transform 500ms ease;
  text-align: center;

  :hover {
    transform: scale(1.05);
  }

  img {
    width: 13em;
    height: auto;
    padding: 0.1em 0.1em;
    display: inline-block;
  }

  // container of the card infos
  div {
    place-items: center;
    padding: 1.5em;
    background: linear-gradient(
      hsl(0 0% 100% / 0),
      hsl(20 0% 0% / 0.3) 20%,
      hsl(0 0% 0% / 0.75)
    );
    transform: translateY(50%);
    transition: transform 500ms ease;

    p {
      color: white;
      font-size: 0.75em;
    }

    h1 {
      position: relative;
      color: white;
      font-size: 1.75em;
    }

    h1::after {
      content: "";
      position: absolute;
      height: 3px;
      width: calc(100% + 1.5em);
      background: var(${(p) => p.color});
      left: calc(1.5em * -1);
      bottom: 0;
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 600ms ease;
    }

    button {
      border-radius: 0.25em;
      background-color: var(${(p) => p.color});
      border: none;
      padding: 0.5rem 1rem;
      margin: 0.75em;
      cursor: pointer;
      color: white;
      display: inline-block;
      font-size: 0.75em;
    }

    button:hover {
      background-color: #4169e1ce;
    }

    button:focus {
      background-color: #4169e1ce;
    }
  }

  //effect when hover the entier card

  :hover {
    h1::after {
      transform: scaleX(1);
    }

    div {
      transform: translateY(5%);
    }
  }
`;

import PokeAPI, { IPokemon } from "pokeapi-typescript";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "../components/Card";
import { MdCatchingPokemon } from "react-icons/md";
/* setPokedex((prev) => prev.map(el => el=res)) */
function CardList() {
  const [pokedex, setPokedex] = useState<IPokemon[]>([]);
  const [rangeUpper, setRangeUpper] = useState(20);
  const [rangeLower, setRangeLower] = useState(1);
  const [isClosed, setIsClosed] = useState<boolean>(false);

  const FetchPokemon = () => {
    let arr: IPokemon[] = [];
    for (let i = 1; i <= 859; i++) {
      PokeAPI.Pokemon.resolve(i).then((res) => arr.push(res));
    }
    setPokedex(arr);
    console.log(pokedex);
  };

  useEffect(() => {
    FetchPokemon();
  }, []);

  const GoNextPage = ():void => {
    if(rangeUpper >= 858){
      alert("You've reached the last page");
    }
    else {
      setRangeLower(rangeLower + 20)
      setRangeUpper(rangeUpper + 20)
    }
  }

  const GoPreviousPage = ():void => {
    if (rangeLower === 1){
      alert("You've reached the last page");
    }
    else {
      setRangeLower(rangeLower - 20)
      setRangeUpper(rangeUpper - 20)
    }
  }
  return (
    <DexContainer>
      <input
        type="checkbox"
        onClick={() => {
          setIsClosed(!isClosed);
        }}
      />
      <DexUpperSide></DexUpperSide>
      <DexIcon />
      {isClosed === true ? (
        <>
          <NavDexDiv>
            <button onClick={GoPreviousPage}>Go to previous page</button>
            <button onClick={GoNextPage}>Go to next page</button>
          </NavDexDiv>
          <ListCardContainer>
            {pokedex.filter(pokemon => pokemon.id > rangeLower && pokemon.id < rangeUpper).map((pokemon) => { 
              return (
                <React.Fragment key={pokemon.id}>
                  <Card
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.types[0].type.name}
                    stats={pokemon.stats}
                    image={pokemon.sprites.front_default}
                  />
                </React.Fragment>
              );
            })}
          </ListCardContainer>
        </>
      ) : (
        <></>
      )}
      <DexLowerSide></DexLowerSide>
    </DexContainer>
  );
}

export default CardList;

const DexIcon = styled(MdCatchingPokemon)`
  width: 18em;
  height: auto;
  cursor: pointer;
  transition: transform 500ms ease;
  position: absolute;

  :hover {
    color: var(--or);
    transform: scale(1.05) rotate(360deg);
  }
`;

const DexUpperSide = styled.div`
  background-color: var(--blanc-2);
  width: 100%;
  height: 55em;
  margin: 0;
  padding: 0;
  border: var(--argent-v2);
  border-radius: 0.5em 0.5em 0 0;
  transition: transform 600ms ease;
`;
const DexLowerSide = styled.div`
  background-color: var(--argent-v2);
  width: 100%;
  height: 55em;
  margin: 0;
  padding: 0;
  border-radius: 0 0 0.5em 0.5em;
  transition: transform 600ms ease;
`;
const ListCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  background: transparent;
  width: 100%;
  height: 80%;
  font-size: 1.15em;
  place-items: center;
  padding: 1em;
`;
const NavDexDiv = styled.div`
  font-size: 1.15em;
  width: 50em;
  height: auto;
  background: var(--or-v2);
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  place-items: center;
  padding: 0.25em;
  border-radius: 25% 10%;

  button {
    background: none;
    border: none;
    background: transparent;
    width: 12em;
    padding: 1.5em;
    margin: 1.1em;
    border-radius: 1em;
  }

  button:hover {
    background-color: var(--blanc-2);
  }
`
const DexContainer = styled.label`
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

  input {
    visibility: none;
    -webkit-appearance: hidden;
    display: none;
  }
  input:checked ~ ${DexIcon} {
    transform: translateY(calc(136.5em * -1));
  }

  input:checked ~ ${DexUpperSide} {
    transform: translateY(calc(80% * -1));
  }

  input:checked ~ ${DexLowerSide} {
    transform: translateY(80%);
  }
`;

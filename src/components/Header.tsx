import React from "react";
import { SiPokemon } from "react-icons/si";
import { GiPokecog } from "react-icons/gi";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">
        <PokemonTitle />
      </Link>
      <Link to="/Team">
        <TeamIcon />
      </Link>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.div`
  ${tw`
        top-0
        h-24
        w-full
        bg-gradient-to-r from-blanc2 to-color-type-water
        items-center
        flex
        place-content-center
    `}
`;
const PokemonTitle = styled(SiPokemon)`
  ${tw`
        w-64
        h-20
        bg-gradient-to-r from-or to-yellow-200
        mt-2
        rounded-full
        place-self-center
        mb-2
        ml-32
    `}
`;
const TeamIcon = styled(GiPokecog)`
  ${tw`
        place-self-end
        w-32
        h-12
        my-5
        right-0
    `}
    color: #FFD700;
`;

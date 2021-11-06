import React from 'react'
import { SiPokemon } from "react-icons/si";
import styled from 'styled-components';
import tw from 'twin.macro';

function Header() {
    return (
        <HeaderContainer>
            <PokemonTitle />
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    ${tw`
        top-0
        h-24
        w-full
        bg-gradient-to-r from-blanc2 to-color-type-fire
        items-center
        flex
        flex-col
    `}
`
const PokemonTitle = styled(SiPokemon)`
    ${tw`
        w-64
        h-20
        bg-gradient-to-r from-or to-yellow-200
        mt-2
        rounded-full
    `}
`
import React from 'react'
import styled from 'styled-components'
import { SiPokemon } from "react-icons/si";
import { GiPokecog } from "react-icons/gi";
import { Link } from 'react-router-dom';

function Header() {
    return (
        <HeaderMainContainer>
            <Link to="/NewTeam">
                <TeamIcon />
            </Link>
            <Link to="/">
                <PokemonLogo />
            </Link>
        </HeaderMainContainer>
    )
}

export default Header

const PokemonLogo = styled(SiPokemon)`
    width: 2em;
    height: auto;
    color: var(--or);
    transition: transform 500ms ease;
    margin-left: 1em;
    margin-right: 1em;

    :hover {
        transform: scale(1.15);
    }
`
const TeamIcon = styled(GiPokecog)`
    width: 0.75em;
    height: auto;
    color: var(--or);
    transition: transform 500ms ease;
    margin-left: 1em;

    :hover {
        transform: scale(1.25);
    }
`
const HeaderMainContainer = styled.header`
    width: 100%;
    min-height: 8vh;
    font-size: 1.25em;
    background: linear-gradient(var(--ultra-lune), var(--ultra-lune-v2));
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-items: center;
    margin: 0;
    top: 0;
    position: fixed;
    z-index: 4;
`
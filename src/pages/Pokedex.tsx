import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import PokeAPI, {IPokemon, IPokemonType} from "pokeapi-typescript";
import PokemonCards from '../components/PokemonCards';
import { card } from '../types/pokeType';


function Pokedex() {
    const [page, setPage] = useState(0)
    let pokeArray : Array<IPokemon> = []
    const [pokemons, setPokemons] = useState(pokeArray)

    useEffect(() => {
        fetchListPokemon()
        console.log(pokemons)
    },[])

    const fetchListPokemon = async () => {
        const completeResourceList = await PokeAPI.Pokemon.list(9, (page*9))
        completeResourceList.results.forEach(async (pokemon) => {
            const result: IPokemon = await PokeAPI.Pokemon.fetch(pokemon.name)
            pokeArray.push(result)
        })
        setPokemons(pokeArray)
    }
    return (
        <PokedexContainer>
            {pokemons.map(pokemon => {
                return <PokemonCards 
                        key={pokemon.id}
                        name={pokemon.name}
                        types={pokemon.types}
                        stats={pokemon.stats}
                />
            })}
        </PokedexContainer>
    )
}

export default Pokedex

const PokedexContainer = styled.div`
    ${tw`
        bg-white
        w-[80%]
        h-[80%]
        items-center
        mt-[20%]
        grid
        grid-cols-3
        gap-2
    `}
`
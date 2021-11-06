import PokeAPI, { IPokemon } from 'pokeapi-typescript'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import PokemonCards from '../components/PokemonCards'
import { MdCatchingPokemon } from "react-icons/md";
import pokeball from '../pokeball.png'



function Pokedex() {
    const [pokemons, setPokemons] = useState<IPokemon[]>([])
    const [page, setPage] = useState(0)                                         // servira prochainement à changer de page
    
    useEffect(() => {
        fetchPokemon()
    }, [])

    const fetchPokemon = async () => {
        let pokeArray: IPokemon[] = []
        
        const resourceList = await PokeAPI.Pokemon.listAll()
        resourceList.results.map(async (result) => {
            const pokemon: IPokemon = await PokeAPI.Pokemon.fetch(result.name)
            pokeArray.push(pokemon)

        })
        setPokemons(pokeArray)
    }
    
    /**
     * Fonction qui permet de passer outre le problème du rendu du composant à changer à l'avenir
     */
    const GetNextPage = (): void => {  
        setPage(page+40)
        console.log(page)
    }
    return (
        <PokeDexContainer>
            
            {pokemons.length === 0
                ? <ButtonDex onClick={GetNextPage}>Ouvrir le Pokedex</ButtonDex>
                : <ButtonDex style={{backgroundImage: pokeball}} onClick={GetNextPage}>Afficher plus de Pokemon</ButtonDex>
            }

            {pokemons.length === 0
                ? <PokeBallLogo />
                : <DexList>
                    {pokemons.filter(pokemon => pokemon.id < page).map(pokemon => {
                        return <PokemonCards
                            key={pokemon.id}
                            id={pokemon.id}
                            name={pokemon.name}
                            type={pokemon.types[0].type.name}
                            stats={pokemon.stats}
                            image={pokemon.sprites.front_default}
                        />
                    })}
                </DexList>
            }


        </PokeDexContainer>
    )
}

export default Pokedex

const PokeDexContainer = styled.div`
    ${tw`
        flex
        flex-col
        w-full
        h-full
        bg-gray-200
        items-center
    `}
`
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
    `}
`
const ButtonDex = styled.button`
    ${tw`
        bg-or 
        rounded-md 
        h-auto 
        w-auto 
        m-16 
        p-5 
        text-center 
        font-bold
    `}
`
const PokeBallLogo = styled(MdCatchingPokemon)`
    ${tw`
        h-60
        w-60
        bg-blanc2
        rounded-3xl
        border-2
        border-or
    `}
`
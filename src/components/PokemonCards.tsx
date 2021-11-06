import { IPokemon } from 'pokeapi-typescript'
import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import { card } from '../types/pokeType'

function PokemonCards({ id, name, type, stats, image}:card) {
    const style = `bg-color-type-${type} w-auto h-auto item-center rounded-xl flex flex-col`
    const styleType = `bg-color-type-${type} h-auto w-auto font-bold text-base ml-5 mb-2 opacity-50`

    return (
        <div className={style}>
            <h1 className="text-center font-bold">{name} #{id}</h1> 
            <img src={image} width={200} height={200} alt=""/>
            <h2 className={styleType}>{type}</h2>
            <ButtonAddTeam>ADD</ButtonAddTeam>      
        </div>
    )
}

export default PokemonCards

const ButtonAddTeam = styled.button`
    ${tw`
        text-center
        text-sm
        font-mono
        text-white
        rounded-md
        bg-blue-900
        hover:bg-blue-600
        ring-2
        ring-yellow-300
        cursor-pointer
        w-32
        h-auto
        ml-9
        mb-2
    `}
`
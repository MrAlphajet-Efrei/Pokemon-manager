import { IPokemonStat, IPokemonType } from "pokeapi-typescript"

export type team = Array<any>[6] 

export type card = {
    name:string
    types:IPokemonType[]
    stats:IPokemonStat[]
}



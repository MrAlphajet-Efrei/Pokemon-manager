import { IPokemonStat, IPokemonType } from "pokeapi-typescript"

export type team = Array<any>[6] 

export type card = {
    id:number
    name:string
    type:string
    stats:IPokemonStat[]
    image:string
}



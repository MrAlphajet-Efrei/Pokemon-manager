import { IPokemon, IPokemonStat } from "pokeapi-typescript";

export type card = {
  id: number;
  name: string;
  type: string;
  stats: IPokemonStat[];
  image: string;
};

export type team = {
  team: IPokemon[];
  setTeam: React.Dispatch<React.SetStateAction<IPokemon[]>>;
};

export type teamContextProviderProps = {
  children: React.ReactNode;
};

export type FirebaseTeamFormat = FireBasePokemon[];

export type FireBasePokemon = {
  id: number;
  name: string;
};

export interface PropsColor {
  color: string;
}


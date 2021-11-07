import { IPokemon } from "pokeapi-typescript";
import React, { createContext, useState } from "react";
import { team, teamContextProviderProps } from "../types/pokeType";

export const TeamContext = createContext({} as team);

export const TeamContextProvider = ({ children }: teamContextProviderProps) => {
  const [team, setTeam] = useState<IPokemon[]>([]);

  return (
    <TeamContext.Provider value={{ team, setTeam }}>
      {children}
    </TeamContext.Provider>
  );
};

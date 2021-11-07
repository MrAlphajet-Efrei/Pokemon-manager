import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Header from './components/Header';
import { TeamContextProvider } from './hooks/TeamContext';
import Pokedex from './pages/Pokedex';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewTeam from './pages/NewTeam';


/**
 * une page avec une liste de pokemon
 * une page d'infos pour chaque pokemon
 * une page team 
 * on doit juste gérer la team a travers toutes les pages
 */
function App() {

  return (
    <Router>
      <AppContainer>
        <Header />
        <TeamContextProvider>
          <Routes>
            <Route path="/" element={<Pokedex />} />
            <Route path="/Team" element={<NewTeam />} />
          </Routes>
        </TeamContextProvider>
      </AppContainer>
    </Router>
  );
}

export default App;

const AppContainer = styled.div`
  ${tw`
    h-full
    w-full
    flex
    flex-col
    items-center
    bg-gray-200
  `}
`
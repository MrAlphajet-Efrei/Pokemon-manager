import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Pokedex from './pages/Pokedex';

/**
 * une page avec une liste de pokemon
 * une page d'infos pour chaque pokemon
 * une page team 
 * on doit juste gérer la team a travers toutes les pages
 */
function App() {

  return (
    <AppContainer>
      <Pokedex />
    </AppContainer>
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
  `}
`
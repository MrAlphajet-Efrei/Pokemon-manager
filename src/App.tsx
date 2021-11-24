import React from "react";
import styled from "styled-components";
import Header from "./components/Header";
import CardList from "./pages/CardList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TeamContextProvider } from "./hooks/TeamContext";
import NewTeam from "./pages/NewTeam";

function App() {
  return (
    <Router>
      <MainContainer>
        <Header />
        <TeamContextProvider>
          <Routes>
            <Route path="/" element={<CardList />} />
            <Route path="/NewTeam" element={<NewTeam />} />
          </Routes>
        </TeamContextProvider>
      </MainContainer>
    </Router>
  );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  font-size: 2rem;
`;

import React from "react";

import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

import GlobalStyle from "./styles/global";

//COMPONENTS
import Header from "./components/Header";
import Board from "./components/Board";

function App() {
  return (
    //USADO PARA ENGLOBAR ELEMENTOS SEM PERDER STYLES
    <DndProvider backend={HTML5Backend}>
      <Header />
      <Board />

      <GlobalStyle />
    </DndProvider>
  );
}

export default App;

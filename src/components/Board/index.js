import React, { useState } from "react";
import produce from "immer";

import { loadLists } from "../../services/api";

import BoardContext from "./context";

import List from "../List";

import { Container } from "./styles.js";

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, (copyOfList) => {
        const dragged = copyOfList[fromList].cards[from];

        copyOfList[fromList].cards.splice(from, 1);
        copyOfList[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} index={index} data={list} />
        ))}
      </Container>
    </BoardContext.Provider>
  );
}

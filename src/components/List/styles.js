import styled from "styled-components";

export const Container = styled.div`
  padding: 0 15px;
  height: 100%;
  opacity: ${(props) => (props.done ? 0.6 : 1)};

  width: 100%;
  max-width: 300px;

  /* DETERMINA A HABILIDADE DE UM COMPONENTE ESTICAR MAIS QUE NECESSARIO
  flex-grow: 0;

  POSSIBILIDE DO ELEMENTO DE ENCOLHER, REDUZIR*/
  /* flex-shrink: 0; */
  /*LARGURA BASE DO ELEMENTO: POIS O FLEX DIRECTION= ROW*/
  /* flex-basis: 320px; */ /*APLICAR ESTILO DO SEGUNDO ITEM ADIANTE*/
  /*TODA DIV QUE TEM ANTES DELA UMA DIV*/

  & + div {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 42px;
  }

  header h2 {
    font-weight: 700;
    font-size: 21px;
    padding: 0 10px;
  }

  header button {
    height: 42px;
    width: 42px;
    border-radius: 18px;
    background: #e43f5a;
    border: 0;
    cursor: pointer;
  }

  ul {
    margin-top: 30px;
  }
`;

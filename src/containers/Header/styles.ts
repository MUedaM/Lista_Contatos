import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Titulo = styled.header`
  background-color: ${cores.corPrincipal};
  margin: 40px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 6px;
  align-items: center;

  h1 {
    font-size: 18px;
    flex: 1;
    font-style: italic;
    color: ${cores.corFundo};
  }

  div {
    display: flex;
    align-items: center;

    img {
      width: 18px;
      margin-right: 8px;
      margin-left: 16px;
    }

    span {
      color: ${cores.corFundo};
    }
  }
`

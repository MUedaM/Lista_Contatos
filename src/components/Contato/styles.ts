import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Contato = styled.div`
  padding: 16px;
  background-color: ${cores.corSecundaria};
  border-radius: 16px;
  display: flex;
  font-size: 16px;
`

export const Foto = styled.img`
  width: auto;
  height: 25vh;
  margin: 16px;
  border-radius: 8px;
`

export const Conjunto = styled.div`
  margin: 8px 0;
`
export const Info = styled.p`
  margin: 16px 8px;

  b {
    color: ${cores.corPrincipal};
    margin-right: 8px;
    vertical-align: top;
  }
`

export const Dados = styled.textarea`
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  resize: none;
  border: 1px solid transparent;
  background-color: transparent;
  height: 26px;
  overflow: hidden;
  vertical-align: middle;
  padding: 3px 0 3px 3px;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const ActionBar = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  font-weight: bold;
  color: ${cores.corSecundaria};
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: ${cores.corFundo};
  margin-top: 16px;
  margin-right: 8px;
  justify-content: end;
  border-radius: 8px;
`

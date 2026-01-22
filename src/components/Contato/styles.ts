import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Contato = styled.div`
  padding: 16px;
  background-color: ${cores.corSecundaria};
  border-radius: 8px;
  display: flex;
  font-size: 16px;
`

export const Foto = styled.img`
  width: 25vh;
  margin: 16px;
  border-radius: 8px;
`

export const Conjunto = styled.div`
  margin: 8px auto;
  display: block;
`
export const Info = styled.p`
  margin: 16px 0;

  b {
    margin-right: 8px;
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
  color: #000;
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: ${cores.corFundo};
  margin-top: 16px;
  margin-right: 8px;
  justify-content: end;
  border-radius: 8px;
`

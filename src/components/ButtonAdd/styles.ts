import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { cores } from '../../styles/global'

export const Button = styled(Link)`
  display: block;
  height: 64px;
  width: 64px;
  background-color: ${cores.corSalvar};
  color: ${cores.corFundo};
  border-radius: 50%;
  position: fixed;
  bottom: 40px;
  right: 40px;
  text-decoration: none;
  font-size: 40px;
  line-height: 64px;
  text-align: center;

  &:hover {
    background-color: ${cores.corPrincipal};
    color: ${cores.corFundo};
  }
`

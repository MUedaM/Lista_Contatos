import styled from 'styled-components'
import { Button, Container, cores, Dado, Info } from '../../styles/global'

export const FormContainer = styled(Container)`
  background-color: ${cores.corSecundaria};
  padding: 32px;
  border-radius: 16px;
`

export const Form = styled.form`
  max-width: 547px;
  width: 100%;
  margin: 0 auto;
`
export const Infos = styled(Info)`
  display: flex;
  width: 100%;

  label {
    color: white;
    font-size: 16px;
    width: 150px;
    line-height: 30px;
    text-align: right;
    margin-right: 16px;
  }
`

export const Dados = styled(Dado)`
  border-bottom: 2px solid white;

  &:focus {
    outline: none;
    border-bottom: 2px solid white;
  }
`
export const ButtonCadastrar = styled(Button)`
  background-color: ${cores.corSalvar};
  padding: 8px 16px 8px 4px;

  p {
    color: ${cores.corFundo};
  }

  &:hover {
    background-color: ${cores.corFundo};

    p {
      color: ${cores.corPrincipal};
    }
  }
`
export const ButtonVoltar = styled(Button)`
  background-color: ${cores.corPrincipal};
  padding: 8px 16px;

  p {
    color: ${cores.corFundo};
  }

  &:hover {
    background-color: ${cores.corFundo};

    p {
      color: ${cores.corPrincipal};
    }
  }
`

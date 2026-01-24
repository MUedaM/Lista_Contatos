import styled from 'styled-components'
import { Button, cores } from '../../styles/global'

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

export const ButtonRemover = styled(Button)`
  background-color: ${cores.corPrincipal};
  padding: 8px 16px 8px 8px;

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

export const ButtonSalvar = styled(Button)`
  background-color: ${cores.corSalvar};

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

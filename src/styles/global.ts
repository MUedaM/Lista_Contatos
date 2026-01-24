import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#F6CE71',
  corPrincipal: '#C40C0C',
  corSecundaria: '#FF6500',
  corSalvar: '#59a87d',
  corEditar: '#fead26'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corFundo}
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }
`

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`

export const Titulo = styled.header`
  background-color: ${cores.corPrincipal};
  margin: 40px 0;
  padding: 16px 24px;
  display: flex;
  border-radius: 16px;
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

export const Info = styled.p`
  margin: 16px 8px;

  b {
    color: ${cores.corPrincipal};
    margin-right: 8px;
    padding-top: 8px;
  }
`

export const Dado = styled.input`
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  resize: none;
  border: 1px solid transparent;
  background-color: transparent;
  height: 30px;
  overflow: hidden;
  padding: 3px 0 3px 3px;

  &:focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`

export const ActionBar = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: flex-end;
`

export const Button = styled.button`
  font-size: 14px;
  width: 100px;
  border: none;
  cursor: pointer;
  background-color: ${cores.corEditar};
  margin-top: 16px;
  margin-right: 8px;
  border-radius: 8px;
  display: flex;
  vertical-align: middle;
  padding: 8px 16px;

  img {
    width: 16px;
    margin-right: 4px;
    margin-left: 4px;
  }

  p {
    color: ${cores.corPrincipal};
  }

  &:hover {
    background-color: ${cores.corFundo};

    p {
      color: ${cores.corPrincipal};
    }
  }
`

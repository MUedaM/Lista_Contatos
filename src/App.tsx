import { Container, GlobalStyle } from './styles/global'
import Header from './containers/Header'
import ListaContatos from './containers/ListaContatos'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
        <ListaContatos />
      </Container>
    </>
  )
}

export default App

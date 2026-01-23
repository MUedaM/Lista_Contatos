import { Provider } from 'react-redux'
import { Container, GlobalStyle } from './styles/global'
import Header from './containers/Header'
import ListaContatos from './containers/ListaContatos'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Container>
        <Header />
        <ListaContatos />
      </Container>
    </Provider>
  )
}

export default App

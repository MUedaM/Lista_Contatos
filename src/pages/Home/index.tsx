import Header from '../../containers/Header'
import ListaContatos from '../../containers/ListaContatos'
import ButtonAdd from '../../components/ButtonAdd'
import { Container } from '../../styles/global'

const Home = () => (
  <>
    <Container>
      <Header tipoHeader={true} />
      <ListaContatos />
    </Container>
    <ButtonAdd />
  </>
)

export default Home

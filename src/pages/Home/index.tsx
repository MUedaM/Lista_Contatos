import Header from '../../containers/Header'
import ListaContatos from '../../containers/ListaContatos'
import ButtonAdd from '../../components/ButtonAdd'

const Home = () => (
  <>
    <Header tipoHeader={true} />
    <ListaContatos />
    <ButtonAdd />
  </>
)

export default Home

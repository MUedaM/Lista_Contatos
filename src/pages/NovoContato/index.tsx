import Header from '../../containers/Header'
import Formulario from '../../containers/Formulario'
import { Container } from '../../styles/global'

const NovoContato = () => (
  <>
    <Container>
      <Header tipoHeader={false} />
      <Formulario />
    </Container>
  </>
)

export default NovoContato

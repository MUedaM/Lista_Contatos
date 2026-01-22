import * as S from './styles'
import ContatoComponent from '../../components/Contato'

const ListaContatos = () => (
  <S.Lista>
    <S.MainContainer>
      <ContatoComponent />
      <ContatoComponent />
      <ContatoComponent />
      <ContatoComponent />
    </S.MainContainer>
  </S.Lista>
)

export default ListaContatos

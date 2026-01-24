import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Titulo } from '../../styles/global'
import { TituloNovo } from './styles'

type Props = {
  tipoHeader: boolean
}

const Header = ({ tipoHeader }: Props) => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return tipoHeader ? (
    <Titulo>
      <h1>LISTA DE CONTATOS</h1>
      <div>
        <span>{itens.length} contatos adicionados</span>
      </div>
    </Titulo>
  ) : (
    <TituloNovo>ADICIONAR NOVO CONTATO</TituloNovo>
  )
}

export default Header

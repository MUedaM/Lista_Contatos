import { useSelector } from 'react-redux'
import * as S from './styles'
import ContatoComponent from '../../components/Contato'

import { RootReducer } from '../../store'

const ListaContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  return (
    <S.Lista>
      <S.MainContainer>
        {itens.map((t) => (
          <div key={t.nome}>
            <ContatoComponent
              id={t.id}
              nome={t.nome}
              email={t.email}
              numero={t.numero}
            />
          </div>
        ))}
      </S.MainContainer>
    </S.Lista>
  )
}

export default ListaContatos

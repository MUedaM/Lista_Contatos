import { useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import user from '../../imagens/user-icon.png'
import { remover } from '../../store/reducer/contatos'
import ContatoClass from '../../models/Contato'

type Props = ContatoClass

const ContatoComponent = ({ id, nome, email, numero }: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  return (
    <S.Contato>
      <S.Foto src={user} />
      <S.Conjunto>
        <S.Info>
          <b>Nome:</b>
          <S.Dados disabled={!editing} value={nome} />
        </S.Info>
        <S.Info>
          <b>E-mail:</b>
          <S.Dados disabled={!editing} value={email} />
        </S.Info>
        <S.Info>
          <b>Numero Cel.:</b>
          <S.Dados disabled={!editing} value={numero} />
        </S.Info>
        <S.ActionBar>
          {editing ? (
            <>
              <S.ButtonSalvar>Salvar</S.ButtonSalvar>
              <S.ButtonRemover onClick={() => setEditing(false)}>
                Cancelar
              </S.ButtonRemover>
            </>
          ) : (
            <>
              <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
              <S.ButtonRemover onClick={() => dispatch(remover(id))}>
                Remover
              </S.ButtonRemover>
            </>
          )}
        </S.ActionBar>
      </S.Conjunto>
    </S.Contato>
  )
}

export default ContatoComponent

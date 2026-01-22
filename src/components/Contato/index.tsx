import * as S from './styles'
import user from '../../imagens/user-icon.png'
import { useState } from 'react'

// Dados type adicionados primeiro
type Props = {
  nome: string
  email: string
  numero: number
}

const ContatoComponent = ({ nome, email, numero }: Props) => {
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
          <b>Numero:</b>
          <S.Dados disabled={!editing} value={numero} />
        </S.Info>
        <S.ActionBar>
          {editing ? (
            <>
              <S.Button>Salvar</S.Button>
              <S.Button onClick={() => setEditing(false)}>Cancelar</S.Button>
            </>
          ) : (
            <>
              <S.Button onClick={() => setEditing(true)}>Editar</S.Button>
              <S.Button>Remover</S.Button>
            </>
          )}
        </S.ActionBar>
      </S.Conjunto>
    </S.Contato>
  )
}

export default ContatoComponent

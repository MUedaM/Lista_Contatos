import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import * as S from './styles'
import user from '../../imagens/user-icon.png'
import { editar, remover } from '../../store/reducer/contatos'
import ContatoClass from '../../models/Contato'
import lixeira from '../../imagens/lixeira.png'
import cancelar from '../../imagens/botao-cancelar.png'
import edit from '../../imagens/escrever.png'
import salvar from '../../imagens/salvar.png'
import { ActionBar, Button, Dado, Info } from '../../styles/global'

type Props = ContatoClass

const ContatoComponent = ({
  id,
  nome: nomeOriginal,
  email: emailOriginal,
  numero: numeroOriginal
}: Props) => {
  const dispatch = useDispatch()
  const [editing, setEditing] = useState(false)

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  useEffect(() => {
    if (nomeOriginal.length > 0) {
      setNome(nomeOriginal)
    }
    if (emailOriginal.length > 0) {
      setEmail(emailOriginal)
    }
    if (numeroOriginal.length >= 10) {
      setNumero(numeroOriginal)
    }
  }, [nomeOriginal, emailOriginal, numeroOriginal])

  function cancelEditing() {
    setEditing(false)
    setNome(nomeOriginal)
    setEmail(emailOriginal)
    setNumero(numeroOriginal)
  }

  return (
    <S.Contato>
      <S.Foto src={user} />
      <S.Conjunto>
        <Info>
          <b>Nome:</b>
          <Dado
            type="text"
            disabled={!editing}
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </Info>
        <Info>
          <b>E-mail:</b>
          <Dado
            type="email"
            disabled={!editing}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Info>
        <Info>
          <b>Numero Cel:</b>
          <Dado
            type="number"
            disabled={!editing}
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
          />
        </Info>
        <ActionBar>
          {editing ? (
            <>
              <S.ButtonSalvar
                onClick={() => {
                  dispatch(editar({ id, nome, email, numero }))
                  setEditing(false)
                }}
              >
                <img src={salvar} />
                <p>Salvar</p>
              </S.ButtonSalvar>
              <S.ButtonRemover onClick={cancelEditing}>
                <img src={cancelar} />
                <p>Cancelar</p>
              </S.ButtonRemover>
            </>
          ) : (
            <>
              <Button onClick={() => setEditing(true)}>
                <img src={edit} />
                <p>Editar</p>
              </Button>
              <S.ButtonRemover onClick={() => dispatch(remover(id))}>
                <img src={lixeira} />
                <p>Remover</p>
              </S.ButtonRemover>
            </>
          )}
        </ActionBar>
      </S.Conjunto>
    </S.Contato>
  )
}

export default ContatoComponent

import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ActionBar } from '../../styles/global'
import * as S from './styles'
import cadastro from '../../imagens/cadastro.png'
import voltar from '../../imagens/volta.png'
import { cadastrar } from '../../store/reducer/contatos'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    dispatch(cadastrar({ nome, email, numero }))
    navigate('/')
  }

  return (
    <S.FormContainer>
      <S.Form onSubmit={cadastrarContato}>
        <S.Infos>
          <label htmlFor="nome">Nome:</label>
          <S.Dados
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </S.Infos>
        <S.Infos>
          <label htmlFor="email">E-mail:</label>
          <S.Dados
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </S.Infos>
        <S.Infos>
          <label htmlFor="numero">Numero Cel:</label>
          <S.Dados
            type="number"
            id="numero"
            value={numero}
            onChange={(e) => setNumero(e.target.value)}
            required
          />
        </S.Infos>
        <ActionBar>
          <S.ButtonCadastrar type="submit">
            <img src={cadastro} />
            <p>Cadastrar</p>
          </S.ButtonCadastrar>
          <S.ButtonVoltar as="a" onClick={() => navigate('/')}>
            <img src={voltar} />
            <p>Voltar</p>
          </S.ButtonVoltar>
        </ActionBar>
      </S.Form>
    </S.FormContainer>
  )
}

export default Formulario

import * as S from './styles'
import user from '../../imagens/user-icon.png'

const ContatoComponent = () => (
  <S.Contato>
    <S.Foto src={user} />
    <S.Conjunto>
      <S.Info>
        <b>Nome:</b>Michael Ueda Matias
      </S.Info>
      <S.Info>
        <b>E-mail:</b>mi-ueda@outlook.com
      </S.Info>
      <S.Info>
        <b>Numero:</b>(41) 9 9900-8890
      </S.Info>
      <S.ActionBar>
        <S.Button>Editar</S.Button>
        <S.Button>Remover</S.Button>
      </S.ActionBar>
    </S.Conjunto>
  </S.Contato>
)

export default ContatoComponent

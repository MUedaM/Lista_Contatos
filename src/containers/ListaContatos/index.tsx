import * as S from './styles'
import ContatoComponent from '../../components/Contato'

// Dados de contatos adicionados por segundo
const Contatos = [
  {
    nome: 'Michael Ueda Matias',
    email: 'mi-ueda@outlook.com',
    numero: 41999008890
  },
  {
    nome: 'Neusa Yoko Ueda',
    email: 'ny-ueda@outlook.com',
    numero: 41999149209
  }
]

const ListaContatos = () => (
  <S.Lista>
    <S.MainContainer>
      {Contatos.map((t) => (
        <div key={t.nome}>
          <ContatoComponent nome={t.nome} email={t.email} numero={t.numero} />
        </div>
      ))}
    </S.MainContainer>
  </S.Lista>
)

export default ListaContatos

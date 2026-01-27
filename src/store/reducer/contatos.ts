import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nome: 'Michael Ueda Matias',
      email: 'mi-ueda@outlook.com',
      numero: '41999008890'
    },
    {
      id: 2,
      nome: 'Neusa Yoko Ueda',
      email: 'ny-ueda@outlook.com',
      numero: '41999149209'
    },
    {
      id: 3,
      nome: 'Antonio Matias',
      email: 'matias.toni@outlook.com',
      numero: '41996072411'
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const ContatoExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase() &&
          contato.email.toLowerCase() === action.payload.email.toLowerCase() &&
          contato.numero === action.payload.numero
      )

      if (ContatoExiste) {
        alert('Contato já cadastrado!')
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const ContatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }

        state.itens.push(ContatoNovo)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions
export default contatosSlice.reducer

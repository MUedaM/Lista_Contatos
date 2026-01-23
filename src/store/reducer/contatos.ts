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
      numero: 41999008890
    },
    {
      id: 2,
      nome: 'Neusa Yoko Ueda',
      email: 'ny-ueda@outlook.com',
      numero: 41999149209
    },
    {
      id: 3,
      nome: 'Antonio Matias',
      email: 'matias.toni@outlook.com',
      numero: 41996072411
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
    }
  }
})

export const { remover } = contatosSlice.actions
export default contatosSlice.reducer

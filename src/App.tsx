import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { GlobalStyle } from './styles/global'
import store from './store'
import Home from './pages/Home'
import NovoContato from './pages/NovoContato'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/novocontato',
    element: <NovoContato />
  }
])

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <RouterProvider router={rotas} />
    </Provider>
  )
}

export default App

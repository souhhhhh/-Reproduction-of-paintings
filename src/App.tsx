import { MainPage } from './pages/MainPage'
import './app/styles/index.scss'
import { CartPage } from './pages/CartPage'
import { Route, Routes } from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}/>
        <Route path='cart' element={<CartPage />}/>
      </Routes>
    </>
  )
}

export default App

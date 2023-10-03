import React from 'react'
import { Films } from './pages/Films';
import { Film } from './pages/Film';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Layout  from './components/layout/Layout';
 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Films/>} />
        <Route path="film/:id" element={<Film/>} />
        <Route path="about" element={<h1>1</h1>} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}
export default App;
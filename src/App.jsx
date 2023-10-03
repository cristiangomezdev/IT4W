import React from 'react'
import { Films } from './pages/Films';
import { Film } from './pages/Film';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  Layout  from './components/layout/Layout';
import { Character } from './pages/Character';
import NotFound from './pages/NotFound';
 const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Films/>} />
        <Route path="film/:id" element={<Film/>} />
        <Route path="character/:id" element={<Character/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/404" element={<NotFound/>} />
      </Route>
    </Routes>
  </BrowserRouter>

  )
}
export default App;
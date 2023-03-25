import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import {Phone} from './pages/Phone'
import {Chars} from './pages/Chars'
import Mail from './pages/Mail'
import CharInfo from './pages/Chars/CharInfo'
import Navbar from './components/Navbar'
import './App.css';

function App() {

  return (
    <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Navigate to='/home'/>} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/chars' element={<Chars />} />
          <Route path='/charinfo/:id' element={<CharInfo />} />
          <Route path='/contact' element={<Contact />} >
            <Route path='phone' element={<Phone/>}/>
            <Route path='mail' element={<Mail/>}/>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
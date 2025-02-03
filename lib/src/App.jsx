
import './App.css'
import Dashboard from './components/Dashboard'
import Login from "@/components/Login"
import 'bootstrap/dist/css/bootstrap.min.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {
 

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/adminlogin' element = {<Login/>}></Route>
    <Route path='/dashboard' element = {<Dashboard/>}></Route>
  
  </Routes>
  </BrowserRouter>

  )
}

export default App

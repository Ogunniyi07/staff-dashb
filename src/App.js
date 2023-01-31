import './App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import UserDetails from './pages/UserDetails'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={(<Login />)} />
          <Route path="/Dashboard" element={(<Dashboard />)} />
          <Route path="/UserDetails" element={(<UserDetails />)} />
          <Route path='/UserDetails/:pid' element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App
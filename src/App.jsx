import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Indent from './UserIndents/Indent';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Indent />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Me from './components/Me.jsx'
import Hero from './components/Hero.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/me" element={<Me />} />
      </Routes>
    </Router>
  );
}

export default App;

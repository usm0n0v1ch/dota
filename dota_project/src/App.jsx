import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Game from './pages/Game';
import Heroes from './pages/Heroes';
import News from './pages/News';
import Cybersport from './pages/Cybersport';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/heroes" element={<Heroes />} />
        <Route path="/news" element={<News />} />
        <Route path="/cybersport" element={<Cybersport />} />
        <Route path="/" element={<Game />} /> 
      </Routes>
    </Router>
  );
}

export default App;

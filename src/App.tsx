import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { CardDetail } from './pages/CardDetail/CardDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/item/:itemId' element={<CardDetail/>} />
    </Routes>
  );
}

export default App;

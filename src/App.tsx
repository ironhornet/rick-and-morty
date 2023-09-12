import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ItemDetail } from './pages/ItemDetail/ItemDetail';
import { RootLayout } from './layouts/RootLayout';

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/item/:itemId' element={<ItemDetail />} />
      </Route>
    </Routes>
  );
}

export default App;

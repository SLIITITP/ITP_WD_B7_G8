import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';

// pages & components
import Home3 from './pages/Home3';
import ItemList from './pages/ItemList';
import Sidebar3 from './components/Sidebar3';
import ItemAdd from './pages/ItemAdd';
import LedgerAdd from './pages/LedgerAdd';
import PledAdd from './pages/PledAdd';
import PriceAdd from './pages/PriceAdd';
import LedgerList from './pages/LedgerList';
import UpdateComponent from './components/UpdateComponent';
import InventoryLogin from './pages/InventoryLogin';
import InventorySignup from './pages/InventorySignup';


function App() {
  const{ iusers } = useAuthContext()
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar3 />
        <div className="pages">
          <Routes>
            <Route
              path="/login"
              element={<InventoryLogin />}
            />

            <Route
              path="/signup"
              element={<InventorySignup /> }
            />

            <Route
              path="/Home3"
              element={<Home3 />}
            />

            <Route
              path="/ItemList"
              element={<ItemList />}
            />

            <Route
              path="/ItemAdd"
              element={<ItemAdd />}
            />

            <Route
              path="/LedgerAdd"
              element={<LedgerAdd />}
            />

            <Route
              path="/PledAdd"
              element={<PledAdd />}
            />

            <Route
              path="/PriceAdd"
              element={<PriceAdd />}
            />

            <Route
              path="/LedgerList"
              element={<LedgerList />}
            />

            <Route
              path="/update/:id"
              element={<UpdateComponent />}
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

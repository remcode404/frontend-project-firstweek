import "./App.scss";
import AppMain from "./MainMenu/AppMain";
import Window from "./Authorization/AuthorizationWindow/Window";
import Entry from "./Authorization/EntryWindow/Entry";
import { Routes, Route } from 'react-router-dom';
import ProductPage from './pages/ProductPage';
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<AppMain />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/window" element={<Entry/>} />
      </Routes>
    </div>
  );
}

export default App;

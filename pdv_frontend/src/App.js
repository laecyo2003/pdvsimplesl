import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import PaginaInicial from './paginas/PaginaInicial';
import PaginaPDV from './paginas/PaginaPDV';
import CadastrarProdutos from './paginas/CadastrarProdutos'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicial/>} />
        <Route path="/pdv" element={<PaginaPDV/>} />
        <Route path="/cadprod" element={<CadastrarProdutos/>} />
      </Routes>
    </Router>
  );
}

export default App;

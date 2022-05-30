import './App.css';
import Product from './components/Product';
import Products from './components/Products';
import Users from './components/Users';
import User from './components/User';
import LastProductInDb from './components/LastProductInDb';
import ContentCard from './components/contentCard';


function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <p>DASHBOARD META-SHOP / PRODUCTOS / USUARIOS</p>
      <Product />
      <Users />
      
      <p>DASHBOARD@META-SHOP2022</p>

      </header>
    </div>
  );
}

export default App;

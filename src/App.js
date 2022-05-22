import logo from './logo.svg';
import './App.css';
import Product from './components/Product';
import Products from './components/Products';
import Users from './components/Users';
import User from './components/User';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <Product />
      <Products />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

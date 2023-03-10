import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import Match from './Match';
import Api from './Api';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <Counter/>
       <Match/>
       <Api/>
      </header>
    </div>
  );
}

export default App;

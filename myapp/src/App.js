// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Addnote from './components/Addnote';
import Notelist from './components/Notelist';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <Header />
       <Addnote/>
      {/* <Notelist/> */}
     
    </div>
  );
}

export default App;

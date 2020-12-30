import { useState } from 'react';
import './App.scss';
import Hero from './components/Hero/Hero';
import logo from './logo.svg';
import HomeRedux from './pages/HomePage/HomeRedux';



function App() {


  const [count, setCount] = useState(0)
  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HomeRedux/>
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
 
          {/* <p>{count}</p>
          <button onClick={() => setCount( count + 1)}> Add</button>
          <Hero  name="Kai"/> */}
      
      </header>
    </div>
  );
}

export default App;

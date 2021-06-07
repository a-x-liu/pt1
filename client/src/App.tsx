import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [state, setState] = React.useState('');

  React.useEffect(() => {
    const getData = async () => {
      const data = await fetch('/api/passwords');
      const resData = await data.json()
      console.log(resData);
      setState(resData.passwords);
    }
    getData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {state}
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

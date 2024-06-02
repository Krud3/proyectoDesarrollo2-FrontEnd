import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(''); // Add a new state variable for the input value

  // A function to handle the input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
        <div>
            <Header/>
            <Home/>
            <About/>
        </div>
    </>
  );
}

export default App;

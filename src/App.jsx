import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';

function App() {
 

  return (
  
        <div>
            <Header/>
            <Home/>
            <About/>
            <Footer />

        </div>
    
  );
}

export default App;

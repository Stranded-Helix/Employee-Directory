import './App.css';
import NavBar from '../src/components/NavBar'
import Container from '../src/components/Container'
import SearchBar from './components/SearchBar';


function App() {
  

  return (
    <div>
      <NavBar />
      <div className="container">
        
        <Container/>
      </div>
        
      
    </div>
  );
}

export default App;

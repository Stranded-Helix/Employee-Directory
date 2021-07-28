import logo from './logo.svg';
import './App.css';
import NavBar from '../src/components/NavBar'
import Container from '../src/components/Container'
import EmployeeCard from './components/EmployeeCard';
import { DirectoryProvider } from './components/EmployeeContext';

function App() {
  return (
    <div>
      <NavBar />
      <DirectoryProvider>
        <Container>
          <EmployeeCard />
        </Container>
      </DirectoryProvider>
    </div>
  );
}

export default App;

import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer"
import PersonInfo from "./components/PersonInfo/PersonInfo"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <PersonInfo/>
      <Footer/>
    </div>
  );
}

export default App;

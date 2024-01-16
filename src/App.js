import './App.css';
import Navbar from './Components/Navbar';
import Homescreen from './Screens/Homescreen';
import Cartscreen from './Screens/Cartscreen';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Homescreen />
      <Cartscreen />
    </div>
  );
}

export default App;

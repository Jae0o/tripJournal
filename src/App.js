import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">

      <div className='App_navbar'>
        <Navbar />
      </div>

      <div className='App_outlet'>
        <Outlet />
      </div>

    </div>
  );
}

export default App;

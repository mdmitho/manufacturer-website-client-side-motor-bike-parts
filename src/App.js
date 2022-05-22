
import { Toaster } from 'react-hot-toast';
import './App.css';
import Home from './components/Pages/Home/Home';
import Navbar from './components/Pages/Nabvar/Navbar';


function App() {
  return (
    <div className="  ">
        <Navbar></Navbar>
        <Home></Home>


     
      <Toaster />
    </div>
  );
}

export default App;

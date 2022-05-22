
import { Toaster } from 'react-hot-toast';
import './App.css';
import Navbar from './components/Pages/Nabvar/Navbar';


function App() {
  return (
    <div className=" max-w-7xl mx-auto ">
        <Navbar></Navbar>
        


     
      <Toaster />
    </div>
  );
}

export default App;

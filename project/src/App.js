import { BrowserRouter, Route, Routes , useLocation} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Landing from './components/Landing';
import WorkerReg from './components/WorkerReg';
import Workerdetails from './components/Workerdetails';
import Navbar from './backend/navbar/Navbar';

function App() {

  return (
    <div>
     <BrowserRouter>
  
     <Routes>
      
      <Route path='/' element={<Home method='post' />}></Route>
      <Route path='/login' element={<Login method='post' />}></Route>
      <Route path='/signup' element={<Signup method='post' />}></Route>
      <Route path='/land' element={<Landing method='post' />}></Route>
      <Route path='/WorkerReg' element={<WorkerReg method='post' />}></Route>
      <Route path='/Workerdetails' element={<Workerdetails method='get' />}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Home';
import Signup from './Signup';
import Login from './Login';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;

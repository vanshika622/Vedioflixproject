
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'



// component imports
import Register from './Components/LoginandRegister/Register';
import Login from './Components/LoginandRegister/Login';
import HomePage from './Components/Homepage/Homepage';
import Protect from './Components/Protect';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register />}/>
         
          <Route path='/homepage' element={
          //  {/* not allowed to go homepage directly withour login */}
          <Protect>
            <HomePage />
          </Protect>
        } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

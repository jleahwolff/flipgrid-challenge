import React, {useState} from 'react';
import './App.css';
import Login from './components/Login';
import Success from './components/Success';
import { Route } from 'react-router-dom';



function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    email: '',
    password: '',
})

  return (
    <div className='app'>
      <div className='box'>
      <Route exact path='/'><Login userInfo={userInfo} setUserInfo={setUserInfo}/></Route>
      <Route path='/success'><Success userInfo={userInfo}/></Route>
      </div>
    </div>
  );
}

export default App;

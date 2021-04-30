import React, {useState} from 'react';
import './App.css';
import Login from './components/NewLogin';
import Success from './components/Success';
import { NavLink, Route } from 'react-router-dom';



function App() {

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    email: '',
    password: '',
})

  return (
    <div className='app'>
      <div className='box'>
      <Route exact path='/'><Login userInfo={userInfo} setUserInfo={serUserInfo}/></Route>
      <Route path='/success'><Success/></Route>
      </div>
    </div>
  );
}

export default App;

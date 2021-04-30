import logo from './logo.svg';
import './App.css';
import FormikLoginForm from './components/Login';
import Success from './components/Success';
import Fail from './components/Fail';
import { NavLink, Route } from 'react-router-dom';



function App() {
  return (
    <div className='app'>
      <div className="box">
      <Route exact path='/'><FormikLoginForm/></Route>
      <Route path='/success'><Success/></Route>
      </div>
    </div>
  );
}

export default App;

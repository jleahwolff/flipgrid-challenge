import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Success from './components/Success';
import Fail from './components/Fail';

function App() {
  return (
    <div className='app'>
      <div className="box">
        <Login/>
      </div>
    </div>
  );
}

export default App;

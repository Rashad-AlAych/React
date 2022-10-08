import logo from './logo.svg';
import './App.css';
import Webrouter from "./router";
import LoginForm from './views/login/loginForm';

function App() {
  return (
    <div className="App">
    {<Webrouter /> }
    {/* <LoginForm /> */}
    </div>
  );
}

export default App;

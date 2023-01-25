import logo from './logo.svg';
import './App.css';
import SignIn from './Registration/SignIn';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login/Login';
import { Dashboard } from './Account/Dashboard';

function App() {
  return (
    <>
      <ToastContainer/>
      <SignIn/>
      <Login/>
      <Dashboard/>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import SignIn from './Registration/SignIn';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <SignIn/>
    </>
  );
}

export default App;

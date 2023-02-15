import logo from './logo.svg';
import './App.css';
import SignIn from './Registration/SignIn';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Login/Login';
import { Dashboard } from './Account/Dashboard';
import { Provider } from 'react-redux';
import store from './ReduxStore/store/store';
function App() {
  return (
    <>
      <Provider store={store}>
        <ToastContainer />
        <SignIn />
        <Login /> 
        <Dashboard />
      </Provider>
    </>
  );
}

export default App;

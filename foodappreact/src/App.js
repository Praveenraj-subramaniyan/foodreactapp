import logo from './logo.svg';
import './App.css';
import './style.css';
import './LoginStyle.css';
import Header from './Header';
import Card from './Card';
import HomePage from './HomePage';
import DetailPage from './DetailPage';
import { BrowserRouter, Route, Router, Routes ,Navigate} from 'react-router-dom';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import ForgetPassword from './ForgetPassword';


function App() {
  return (
    <BrowserRouter>
     <Routes>
     <Route path="/" element={<Navigate to="/login" />} />
     <Route path="/login" element={<LoginPage/>}/>
     <Route path="/register" element={<RegisterPage/>}/>
     <Route path="/forgetpassword" element={<ForgetPassword/>}/>
      <Route path="/home" element={<HomePage/>}/>
      <Route path="/details/:id" element={<DetailPage/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;

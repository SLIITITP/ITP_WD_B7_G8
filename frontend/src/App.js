import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import Register from './pages/Register';
import Home from './pages/Home';
import Feedback from './pages/Feedback';
import Payment from './pages/Payment';
import About from './pages/About';
import Login from './pages/Login';
import PasswordSuccess from './pages/PasswordSuccess';
import Account from './pages/Account';
import Changepassword from './pages/Changepassword';
import Review from './pages/Review';
import EditAccount from './pages/EditAccount';
import CustomerAccount from './pages/CustomerAccount';
import Report from './pages/Report';
import Adminhome from './pages/Adminhome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path="/register" element={<Register/>} />
     <Route path="/home" element={<Home/>} />
     <Route path="/feedback" element={<Feedback/>}/>
     <Route path="/payment" element={<Payment/>}/>
     <Route path="/about" element={<About/>}/>
     <Route path="/login" element={<Login/>}/>
     <Route path="/success" element={<PasswordSuccess/>}/>
     <Route path="/account" element={<Account/>}/>
     <Route path="/password" element={<Changepassword/>}/>
     <Route path="/review" element={<Review/>}/>
     <Route path="/edit/:id" element={<EditAccount/>}/>
     <Route path="/customeraccount" element={<CustomerAccount/>}/>
     <Route path="/report" element={<Report/>}/>
     <Route path="/home2" element={<Adminhome/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

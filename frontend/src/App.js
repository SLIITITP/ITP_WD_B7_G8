import {BrowserRouter as Router,Route}from "react-router-dom";
import Payment from "./pages/Payment";
import Success from "./pages/Success";
import Unsuccess from "./pages/Unsuccess";
import Paydetails from "./pages/Paydetails";
import EditPay from "./pages/EditPay";





function App() {
  return (
    
    <div classname="App">
      <Router>
        <Route path="/pay" component ={Payment}/>
       <Route path="/success" component={Success}/>
       <Route path="/unsuccess" component={Unsuccess}/>
       <Route path="/Paydetails" component={Paydetails}/>
       <Route path="/edit/:id"component={EditPay}/>
   
       
      </Router>
      
    </div>
  );
}

export default App;

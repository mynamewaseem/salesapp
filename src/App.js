import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Common} from "./Components/Common.css"
import {Home} from "./Components/Home";
import{Support} from "./Components/Support"
import{Nav} from "./Components/Nav"
import{CustomerList} from "./Components/CustomerList"
function App() {
  return (
    <div className="App">
      
<BrowserRouter>
<Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/home" element={<Home/>}/>
  <Route path="/support" element={<Support/>}/>
  <Route path="/help" element={<Support/>}/>
  <Route path="/customer" element={<CustomerList/>}/>

</Routes>
</BrowserRouter>

     
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar/Navbar";
import LoginSignup from "./Pages/LoginSignup"
import { Routes, Route } from "react-router-dom";
function App(){
    return (
        <div>
             
      <Navbar/>
      <Routes>
        
        <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      
      

        </div>
    )
}
 export default App;
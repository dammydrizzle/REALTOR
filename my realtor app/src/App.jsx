import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import ForgotPassword from "./Pages/ForgotPassword"
import Offers from "./Pages/Offers"
import Header from "./components/Header"
function App() {

  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Sign-in" element={<SignIn/>} />
        <Route path="/Sign-up" element={<SignUp/>} />
        <Route path="/Forgot-password" element={<ForgotPassword/>} />
        <Route path="/Offers" element={<Offers/>} />
      </Routes>
    </Router>
    </>
  )
  
  
}

export default App

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Profile from "./Pages/Profile"
import SignIn from "./Pages/SignIn"
import SignUp from "./Pages/SignUp"
import PrivateRoute from "./components/PrivateRoute"
import ForgotPassword from "./Pages/ForgotPassword"
import Offers from "./Pages/Offers"
import Header from "./components/Header"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return(
    <>
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element= {<PrivateRoute />}>
        <Route path="/Profile" element={<Profile/>} />
        </Route>
        <Route path="/Sign-in" element={<SignIn/>} />
        <Route path="/Sign-up" element={<SignUp/>} />
        <Route path="/Forgot-password" element={<ForgotPassword/>} />
        <Route path="/Offers" element={<Offers/>} />
      </Routes>
    </Router>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
    </>
  )
  
  
}

export default App

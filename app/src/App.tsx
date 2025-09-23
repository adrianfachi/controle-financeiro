import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/login.tsx";
import Home from "./pages/home/home.tsx";
import Register from "./pages/login/register.tsx";
import ForgotPassoword from "./pages/login/forgotPassword.tsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/esqueciMinhaSenha" element={<ForgotPassoword/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

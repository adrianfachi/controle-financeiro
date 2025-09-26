import { BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./pages/login/login.tsx";
import Home from "./pages/home/home.tsx";
import Register from "./pages/login/register.tsx";
import ForgotPassoword from "./pages/login/forgotPassword.tsx"
import Analysis from "./pages/analysis/analysis.tsx";
import Transaction from "./pages/transcation/transcation.tsx";
import Category from "./pages/category/category.tsx";
import Profile from "./pages/profile/profile.tsx";
import TermsAndConditions from "./pages/termsAndConditions/termsAndConditions.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/cadastro" element={<Register/>}/>
        <Route path="/esqueciMinhaSenha" element={<ForgotPassoword/>}/>
        <Route path="/analises" element={<Analysis/>}/>
        <Route path="/transacoes" element={<Transaction/>}/>
        <Route path="/categorias" element={<Category/>}/>
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/termos" element={<TermsAndConditions/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App

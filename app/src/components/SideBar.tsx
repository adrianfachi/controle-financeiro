import Analysis from "../assets/images/Analysis.svg"
import Home from "../assets/images/Home.svg"
import Category from "../assets/images/Category.svg"
import Profile from "../assets/images/Profile.svg"
import Transaction from "../assets/images/Transaction.svg"
import { useNavigate } from "react-router-dom"
import css from "../styles/sideBar.module.css"

function SideBar ({active}:{active: string}) {
    const navigate = useNavigate()

    const navigates = {
        homeNavigate: () => {navigate('/')},
        analysisNavigate: () => {navigate('/analises')},
        categoryNavigate: () => {navigate('/categorias')},
        transactionNavigate: () => {navigate('/transacoes')},
        profileNavigate: () => {navigate('/perfil')},
    }

    return (
        <div className={css.sidebar}>
            <img src={Home} alt="home" onClick={navigates.homeNavigate} className={active == "home" ? css.active: ""}/>
            <img src={Analysis} alt="Analíses" onClick={navigates.analysisNavigate} className={active == "analysis" ? css.active: ""}/>
            <img src={Transaction} alt="transferir" onClick={navigates.transactionNavigate} className={active == "transaction" ? css.active: ""}/>
            <img src={Category} alt="categorias" onClick={navigates.categoryNavigate} className={active == "category" ? css.active: ""}/>
            <img src={Profile} alt="perfil" onClick={navigates.profileNavigate} className={active == "profile" ? css.active: ""}/>
        </div>
    )
}

export default SideBar
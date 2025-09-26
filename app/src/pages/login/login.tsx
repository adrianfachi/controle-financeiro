import css from "./style.module.css"
import InputText from "./components/InputText.tsx"
import InputPassword from "./components/InputPassword.tsx"
import { useRef } from "react";
import { Link } from "react-router-dom";

function login() {
    const inputUser = useRef<HTMLInputElement>(null);
    const inputSenha = useRef<HTMLInputElement>(null);

    return (
        <div id={css.main}>
            <h1 className={css.titleMainLogin}>Bem-vindo</h1>
            <section id={css.informations}>
                <div id={css.informationsInputs}>
                    <InputText ref={inputUser} labelValue="Username ou email" placeholderValue="exemplo@exemplo.com" type={"text"} id="userNameLogin"/>
                    <InputPassword ref={inputSenha} labelValue="Senha" id="passLogin"/>
                </div>
                <div id={css.inputsToContinue}>
                    <input type="button" value="Entrar" className={css.loginRegistrationButton}/>
                    <Link to={"/esqueciMinhaSenha"} id={css.forgotPass}>Esqueceu a senha?</Link>
                    <p className={css.pLogin}>Não tem uma conta? <Link to={"/cadastro"} id={css.loginRegistration}>Cadastre-se</Link></p>
                </div>
            </section>
        </div>
    )
}

export default login;


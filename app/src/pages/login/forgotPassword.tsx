import css from "./style.module.css"
import InputUser from "./components/InputText.tsx"
import InputPassword from "./components/InputPassword.tsx"
import InputPin from "./components/InputPin.tsx";
import SuccessOperation from "../../components/SucessOperation.tsx";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


function ForgotPassoword () {
    const inputUser = useRef<HTMLInputElement>(null);
    const [next, setNext] = useState(false);
    const [accept, setAccept] = useState(false);
    const [sucess, setSucess] = useState(false);
    const inputPassword = useRef<HTMLInputElement>(null);
    const inputConfirmPassword = useRef<HTMLInputElement>(null);
    
    

    const validateUser = async () => {
        setNext(true)
    }

    const validatePin = async () => {
        setNext(false); 
        setAccept(true);
    }

    const changePassword = async () => {
        setAccept(false);
        setSucess(true)
    }

    return (
        <div id={css.main}>
            {next ? (
                <>
                <h1>Pin de segurança</h1>
                <section id={css.informations}>
                    <div id={css.informationsInputs}>
                        <h2>Digite seu pin de segurança</h2>
                        <InputPin/>
                    </div>
                    <div id={css.inputsToContinue}>
                        <input type="button" id={css.next} value="Aceitar" onClick={validatePin}/>
                        <Link to={"/cadastro"} id={css.sendAgain}>Envie novamente</Link>
                    </div>
                </section>
                </>
            ): accept ? (
                <>
                <h1>Nova senha</h1>
                <section id={css.informations}>
                    <div id={css.informationsInputs}>
                        <h2>Redefinir senha?</h2>
                        <p>Digite seu e-mail para receber o pin para redefinição de senha</p>
                        <InputPassword ref={inputPassword} labelValue="Nova senha" id="passChange"/>
                        <InputPassword ref={inputConfirmPassword} labelValue="Confirme a nova senha" id="passChangeConfirm"/>
                    </div>
                    <div id={css.inputsToContinue}>
                        <input type="button" id={css.next} value="Troque a senha" onClick={changePassword}/>
                    </div>
                </section>
                </>
            ) : sucess ? (
                <>
                <SuccessOperation message="Senha trocada com sucesso!" route="/login"/>
                </>
            ) : (
                <>
                <h1>Esqueci minha senha</h1>
                <section id={css.informations}>
                    <div id={css.informationsInputs}>
                        <h2>Redefinir senha?</h2>
                        <p>Digite seu e-mail para receber o pin para redefinição de senha</p>
                        <InputUser ref={inputUser} labelValue="Digite seu email" placeholderValue="exemplo@exemplo.com" type={"text"} id="emailToChange"/>
                    </div>
                    <div id={css.inputsToContinue}>
                        <input type="button" id={css.next} value="Proxímo" onClick={validateUser}/>
                        <Link to={"/cadastro"} id={css.before}>Cadastre-se</Link>
                    </div>
                </section>
                </>
            )}
        </div>
    )
}

export default ForgotPassoword;
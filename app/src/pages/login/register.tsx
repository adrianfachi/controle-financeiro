import css from "./style.module.css"
import InputText from "./components/InputText.tsx"
import InputPassword from "./components/InputPassword.tsx"
import { useRef } from "react";
import { Link } from "react-router-dom";

function cadastro() {
    const inputUser = useRef<HTMLInputElement>(null);
    
    const inputName = useRef<HTMLInputElement>(null);
    const inputPhone = useRef<HTMLInputElement>(null);
    const InputBirth = useRef<HTMLInputElement>(null);
    const inputPassword = useRef<HTMLInputElement>(null);
    const inputRepeatPassword = useRef<HTMLInputElement>(null);

    return (
        <div id={css.main}>
            <h1>Crie uma conta</h1>
            <section id={css.informations}>
                <div id={css.informationsInputs}>
                    <InputText ref={inputName} labelValue="Nome Completo" placeholderValue="Nome Completo" type="text" id="userNameRegister"/>
                    <InputText ref={inputUser} labelValue="Email" placeholderValue="example@example.com" type="text" id="emailRegister"/>
                    <InputText ref={inputPhone} labelValue="Número de telefone" placeholderValue="(12) 345678901" type="text" id="phoneRegister"/>
                    <InputText ref={InputBirth} labelValue="Data de nascimento" placeholderValue="DD / MM / YYYY" type="date" id="birthRegister"/>
                    <InputPassword ref={inputPassword} labelValue="Senha" id="passRegister"/>
                    <InputPassword ref={inputRepeatPassword} labelValue="Confirme sua senha" id="passConfirmRegister"/>
                </div>
                <div id={css.inputsToContinue}>
                    <input type="button" value="Cadastre-se" className={css.loginRegistrationButton}/>
                    <div>
                        <p>Ao continuar, você concordo em</p>
                        <Link to={"/"} id={css.terms}>Termos de Uso e Política de Privacidade.</Link>
                    </div>
                    <p>Já tem uma conta? <Link to={"/login"} id={css.loginRegistration}>Faça login</Link></p>
                </div>
            </section>
        </div>
    )
}

export default cadastro
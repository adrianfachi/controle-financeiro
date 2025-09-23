import successIcon from "../assets/images/success.svg";
import css from "../styles/sucess.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SuccessOperation ({message, route}:{message: string, route: string}) {
    const navigate = useNavigate();
     console.log("Renderizou SuccessOperation")
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(route);
        }, 2000); // 2 segundos

        return () => clearTimeout(timer);
    }, [navigate, route]);

    return (
        <div id={css.main}>
            <img src={successIcon} alt="Operação concluída"/>
            <p>{message}</p>
        </div>
    )
}

export default SuccessOperation;
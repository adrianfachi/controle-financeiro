import successIcon from "../assets/images/success.svg";
import css from "../styles/sucess.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function SuccessOperation ({message, route}:{message: string, route: string}) {
    const navigate = useNavigate();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(route);
        }, 2000);

        return () => clearTimeout(timer);
    }, [navigate, route]);

    return (
        <div id={css.main}>
            <img src={successIcon} alt="Operação concluída" className={css.sucess}/>
            <p className={css.pMessage}>{message}</p>
        </div>
    )
}

export default SuccessOperation;
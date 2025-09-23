import css from "../style.module.css"
import EyePass from "../assets/Eye-Pass.svg"
import EyePassOpen from "../assets/Eye-Pass-Open.svg"
import { useState } from "react"

function Input(
{   
    ref,
    labelValue,
    id,
}: {
    ref: React.RefObject<HTMLInputElement | null>
    labelValue: string
    id: string
}) {

    const [ isFocus, setIsFocus ] = useState(true);

     function typePassword(focus : boolean) {
        if(focus) {
            return "password"
        }
        return "text"
    }

    function eye(focus : boolean) {
        if(focus) {
            return EyePass
        }
        return EyePassOpen
    }

    return (
        <div className={css.divInput}>
            <label htmlFor={id} className={css.labelInput}>{labelValue}</label>
            <div id={css.passwordInput}>
                <input ref={ref} type={typePassword(isFocus)} placeholder="●●●●●●●●" className={css.input} id={id}/>
                <img src={eye(isFocus)} alt="ver senha" onClick={() => {setIsFocus(!isFocus)}}/>
            </div>
        </div>
    )
}

export default Input;
import css from "../style.module.css"

function Input(
{   
    ref,
    labelValue,
    placeholderValue,
    type,
    id,
}: {
    ref: React.RefObject<HTMLInputElement | null>
    labelValue: string
    placeholderValue: string
    type: string
    id: string
}) {
    

    return (
        <div className={css.divInput}>
            <label htmlFor={id} className={css.labelInput}>{labelValue}</label>
            <input ref={ref} type={type} placeholder={placeholderValue} className={css.input} id={id}/>
        </div>
    )
}

export default Input;
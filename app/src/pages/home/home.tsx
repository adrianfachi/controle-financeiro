import { useEffect, useState } from 'react';
import css from './style.module.css'
import SideBar from '../../components/SideBar';


function home() {
    const [totalBalance, setTotalBalance] = useState(0);
    const [extract, setExtract] = useState<Array<String>>();

    useEffect(() => {
        const balance = () => {
            const valueBalance = document.getElementById('valueBalance')
            if(valueBalance && totalBalance < 0 ) {
                valueBalance.style.color = "red"
            } 
        }
        balance(); 
    })

    return (
        <div className={css.main}>
            <section className={css.informations}>
                <h2 id={css.titleMain}>Olá, bem-vindo de volta</h2>
                <div id={css.balance}>
                    <p>Saldo</p>
                    <h3 id='valueBalance'>{totalBalance.toLocaleString('pt-br', {minimumFractionDigits: 2, style:'currency', currency:'BRL'})}</h3>
                </div>
            </section>
            <section className={css.extractAndNewMovement}>
                <div className={css.inputsNewMovement}>
                    <input type="button" value="Adicionar receita"/>
                    <input type="button" value="Adicionar despesa" />
                </div>
                <div className={css.extract}>
                    <h2 id={css.titleExtract}>Últimas movimentações</h2>
                    <>
                    {extract && extract.length > 0 ? (extract.map(() => {
                        return (
                            <p>a</p>
                        )
                    })
                    ):(
                        <p>Sem movimentação nos últimos 30 dias</p>
                    )}
                    </>
                </div>
            </section>
            <SideBar active='home'/>
        </div>
    )
}

export default home;
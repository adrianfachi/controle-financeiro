import SideBar from "../../components/SideBar";
import css from "./style.module.css"

function Transaction () {
    return (
        <div id={css.main}>
            <section></section>
            <SideBar active="transaction"/>
        </div>
    )
}

export default Transaction;
import SideBar from "../../components/SideBar";
import css from "./style.module.css"

function Analysis () {
    return (
        <div id={css.main}>
            <section></section>
            <SideBar active="analysis"/>
        </div>
    )
}

export default Analysis;
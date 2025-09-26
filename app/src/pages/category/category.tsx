import SideBar from "../../components/SideBar";
import css from "./style.module.css"

function Category () {
    return (
        <div id={css.main}>
            <section></section>
            <SideBar active="category"/>
        </div>
    )
}

export default Category;
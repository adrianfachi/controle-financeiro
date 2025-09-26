import SideBar from "../../components/SideBar";
import css from "./style.module.css"

function Profile () {
    return (
        <div id={css.main}>
            <section></section>
            <SideBar active="profile"/>
        </div>
    )
}

export default Profile;
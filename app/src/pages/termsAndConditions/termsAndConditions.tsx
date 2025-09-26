import css from "./style.module.css"
import { Link } from "react-router-dom";

function TermsAndConditions () {
    return (
        <div id={css.main}>
            <h2>Termos e condições</h2>
            <div id={css.informations}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates, maxime distinctio sint molestias placeat eaque, vero veritatis architecto, sequi hic accusantium perspiciatis. Molestiae pariatur laborum esse omnis excepturi alias possimus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam magni maxime, atque laudantium doloremque similique excepturi pariatur ratione numquam ipsam laborum tempore saepe eum porro voluptatibus assumenda consequatur odio officiis.</p>
                <Link to={"/"}>Voltar</Link>
            </div>
            
        </div>
    )
}

export default TermsAndConditions;
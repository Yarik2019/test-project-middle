import "./NavBar.css"
import ArrowLeft from "../../assets/icons8-double-left-50.png";
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
        <nav className="navbar">
            <ul className="list-nav">
                <li className="nav-item">
                    <Link to={`/`} className="nav-link"><img src={ArrowLeft}/></Link>
                </li>
            </ul>
            <a href="#" className="logo">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png"/>
            </a>

        </nav>
    )
}

export default NavBar;
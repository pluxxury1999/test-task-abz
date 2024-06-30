import "./Header.scss";
import Logo from "../../resources/img/Logo.svg";

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={Logo} alt="LogoImg"/>
                <nav>
                    <ul className="navigation__list">
                        <li><a className="button" href="#uses">Users</a></li>
                        <li><a className="button" href="#signup">Sign up</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
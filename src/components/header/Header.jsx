import "./Header.scss";
import Logo from "../../resources/img/Logo.svg";

import scrollTo from "../../utility/scrollTo";

const Header = () => {
    return (
        <header>
            <div className="container">
                <img src={Logo} alt="LogoImg" />
                <nav>
                    <ul className="navigation__list">
                        <li>
                            <a
                                className="button"
                                // used native querrySelector to implement smooth scrolling
                                // probably not the best way to do it
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(document.querySelector("#users"));
                                }}
                                href="#"
                            >
                                Users
                            </a>
                        </li>
                        <li>
                            <a
                                className="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollTo(document.querySelector("#signUp"));
                                }}
                                href="#"
                            >
                                Sign up
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;

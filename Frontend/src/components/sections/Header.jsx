import {HeaderStyled} from "../../styles/globalStyles.js";
import {Link} from "react-router-dom";

export default function Header() {

    return (
        <HeaderStyled>
            <div className="luca-logo">
                <img src="/luca-logo.svg" alt="Luca logo"/>
            </div>
            <nav className="navbar">
                <a href="/#excuses">EXCUSES</a>
                <a href="/#documentation">DOCUMENTATION</a>
                <a href="/#aboutme">ABOUT ME</a>
            </nav>
            <div className="github-logo">
                <img src="/github-logo.svg" alt="Github logo"/>
            </div>
        </HeaderStyled>
    )
}

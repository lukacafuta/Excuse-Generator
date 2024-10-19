import {HeaderStyled} from "../../styles/globalStyles.js";

export default function Header() {
    return (
        <HeaderStyled>
            <div className="luca-logo">
                <img src="/luca-logo.svg" alt="Luca logo"/>
            </div>
            <div className="navbar">
                <div>EXCUSES</div>
                <div>DOCUMENTATION</div>
                <div>ABOUT ME</div>
            </div>
            <div className="github-logo">
                <img src="/github-logo.svg" alt="Github logo"/>
            </div>
        </HeaderStyled>
    )
}

import {HeaderStyled} from "../../styles/globalStyles.js";

export default function Header() {
    return (
        <HeaderStyled>
            <img src="/luca-logo.svg" alt="Luca logo"/>
            <div>EXCUSES</div>
            <div>DOCUMENTATION</div>
            <div>ABOUT ME</div>
            <img src="/github-logo.svg" alt="Github logo"/>
        </HeaderStyled>
    )
}

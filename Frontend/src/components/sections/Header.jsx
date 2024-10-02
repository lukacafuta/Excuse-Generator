import {HeaderStyled} from "../../styles/globalStyles.js";

export default function Header() {
    return (
        <HeaderStyled>
            <img src="/luca-logo.svg" alt="Luca logo"/>
            <div>Navigation</div>
            <img src="/github-logo.svg" alt="Github logo"/>
        </HeaderStyled>
    )
}

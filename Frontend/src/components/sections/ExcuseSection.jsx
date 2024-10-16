import {BigButtonStyled, ExcuseSectionStyled} from "../../styles/globalStyles.js";

export default function ExcuseSection() {
    return (
        <ExcuseSectionStyled>
            <div className="excuse-content">
                {/*<img src="/down-arrow.svg" alt="down-arrow"/> MOVED TO HERO*/}
                <img src="/excuse.svg" alt="excuse"/>
                <BigButtonStyled>New Excuse</BigButtonStyled>
            </div>
        </ExcuseSectionStyled>
    )
}
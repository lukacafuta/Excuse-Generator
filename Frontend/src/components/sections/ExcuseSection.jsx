import {ExcuseSectionStyled} from "../../styles/globalStyles.js";

export default function ExcuseSection() {
    return (
        <ExcuseSectionStyled>
            <div className="excuse-content">
                <img src="/down-arrow.svg" alt="down-arrow"/>
                <img src="/excuse.svg" alt="excuse"/>
                <button>New Excuse</button>
            </div>
        </ExcuseSectionStyled>
    )
}
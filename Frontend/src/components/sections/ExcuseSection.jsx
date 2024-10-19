import {BigButtonStyled, ExcuseSectionStyled} from "../../styles/globalStyles.js";

export default function ExcuseSection() {
    return (
        <ExcuseSectionStyled>
            <div className="excuse-content">
                <div className="category">School</div>
                <div className="dummy-excuse">My dog ate my homework.</div>
                <div className="emoji">🥸</div>
                {/*<img src="/excuse.svg" alt="excuse"/>*/}
            </div>
            <BigButtonStyled>New Excuse</BigButtonStyled>
        </ExcuseSectionStyled>
    )
}
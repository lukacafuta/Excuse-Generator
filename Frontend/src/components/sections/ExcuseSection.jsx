import {BigButtonStyled, ExcuseSectionStyled} from "../../styles/globalStyles.js";

export default function ExcuseSection() {
    return (
        <ExcuseSectionStyled>
            <div className="excuse-content">
                <div className="category">School</div>
                <div className="dummy-excuse">My dog ate my <br/> homework.</div>
                <div className="emoji">🥸</div>
            </div>
            <BigButtonStyled>New Excuse</BigButtonStyled>
        </ExcuseSectionStyled>
    )
}
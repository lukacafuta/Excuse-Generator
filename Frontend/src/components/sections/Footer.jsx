import {FooterStyled, StackRectangleStyled} from "../../styles/globalStyles.js";

export default function Footer() {
    return (
        <FooterStyled>
            <StackRectangleStyled>
                <img src="/react-logo.svg" alt="React Logo"/>
                <img src="/django-logo.svg" alt="Django Logo"/>
                <img src="/sqlite-logo.svg" alt="SQLite Logo"/>
            </StackRectangleStyled>
        </FooterStyled>
    )
}

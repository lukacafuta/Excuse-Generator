import styled from "styled-components";

export const HomeStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 1200px;
`

export const HeaderStyled = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    .navbar {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        gap: 2rem;
    }
`

export const HeroSectionStyled = styled.section`
    display: flex;
`

export const FooterStyled = styled.footer`
    display: flex;
    justify-content: center;
    width: 100%;
`

export const StackRectangleStyled = styled.footer`
    display: flex;
    gap: 2rem;
    background-color: gray;
    border-radius: 0.5rem;
    padding: 0.5rem;
`
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 8rem;
    padding-bottom: 4rem;

    h1 {
        padding-bottom: 0rem;
    }

    h2 {
        padding-bottom: 1.5rem;
    }

    button {
        padding: 10px 56px;
        background-color: #64DBDB;
        border-radius: 8px;
        color: black;
        font-size: 0.8rem;
    }
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
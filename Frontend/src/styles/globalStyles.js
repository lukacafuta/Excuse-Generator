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

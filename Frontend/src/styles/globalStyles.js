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
    align-items: center;
    width: 100%;
    padding-top: 3.5rem;

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
    padding-bottom: 1.5rem;

    .hero-content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

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

    img {
        padding-top: 1.5rem;
    }
`

export const ExcuseSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 15.5rem;
    padding-top: 2.5rem;

    .excuse-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    button {
        padding: 10px 56px;
        background-color: #64DBDB;
        border-radius: 8px;
        color: black;
        font-size: 0.8rem;
    }
`

export const EndpointSectionStyled = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 15.5rem;
`

export const AboutMeSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-bottom: 15rem;

    .about-me-content {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: start;
        gap: 2.5rem;
    }

    .profile-photo-wrapper {
        display: flex;
        justify-content: center;
        align-items: start;
    }

    .profile-photo {
        width: 173px;
        height: 173px;
        border-radius: 12.5%;
        object-fit: cover;
        background: linear-gradient(135deg, #64DBDB 0%, #69C5DB 50%, #4E64DB 100%);
    }

    .about-me-text-linkedin {
        display: flex;
        flex-direction: column;
        //justify-content: center;
        align-items: start;
    }

    p {
        width: 306px;
        height: 272px;
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
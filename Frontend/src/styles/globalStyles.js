import styled from "styled-components";
import "../index.css";

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

    img {
        padding-top: 1.5rem;
    }
`

export const BigButtonStyled = styled.button`
    padding: 10px 56px;
    background-color: var(--color-turqoise);
    border-radius: 8px;
    color: black;
    font-size: 0.8rem;
    cursor: pointer;
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

`

export const EndpointSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 1.5rem;
    padding-bottom: 15.5rem;

    .endpoints-header {
        h2 {
            margin-bottom: 0.5rem;
        }
    }
`

export const TabContainerStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
`

export const TabNavigationStyled = styled.div`
    display: flex;
    flex-direction: column;

    .endpoints {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;

        button {
            cursor: pointer;
            //outline: none;
        }
    }
`

export const TabContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    min-width: 696px;
    min-height: 340px;
    border-radius: 12px;
    background-image: var(--dashed-border);
    padding: 1.5rem;
    gap: 0.5rem;
`

export const TabDatabaseOutputStyled = styled.div`
    display: flex;
    background: var(--color-output-tab-grey);
    min-height: 277px;
    padding: 2rem;
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
        position: relative;
        width: 173px;
        height: 173px;
        border-radius: 12.5%;
        object-fit: cover;
        background: linear-gradient(207.18deg, #64DBDB 7.12%, #69C5DB 45.08%, #4E64DB 83.04%);
    }

    .profile-photo::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 12.5%;
        background: linear-gradient(207.18deg, #64DBDB 7.12%, #69C5DB 18.97%, #824EDB 83.04%);
        mix-blend-mode: overlay;
        pointer-events: none;
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
    padding-bottom: 2.5rem;
`

export const StackRectangleStyled = styled.footer`
    display: flex;
    gap: 2rem;
    background-color: gray;
    border-radius: 0.5rem;
    padding: 0.5rem;
`
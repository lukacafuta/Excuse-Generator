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
        font-family: Nunito Sans, sans-serif;
        font-size: 18px;
        font-weight: 400;
        gap: 2rem;
    }

    .luca-logo {
        display: flex;
        justify-content: center;
        width: 150px;
    }

    .github-logo {
        display: flex;
        justify-content: center;
        width: 150px;

        a {
            transition: transform 0.3s ease;
        }

        a:hover {
            transform: scale(1.2);
        }
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
        line-height: 1;
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
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: scale(1.1);
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
    gap: 1rem;

    .excuse-content {
        display: flex;
        flex-direction: column;
        //justify-content: space-between;
        align-items: flex-start;
        width: 419px;
        height: 393px;
        border-radius: 17px;
        padding: 3rem;
        position: relative;
        background: var(--gradient-background-excuse);
    }

    .category {
        display: flex;
        justify-content: flex-start;
        font-family: var(--font-family-poppins), system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 2rem; // make it smaller to move excuses higher
    }

    .excuse {
        display: flex;
        font-family: var(--font-family-poppins), system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 28px;
        font-weight: 600;
        overflow: hidden;
        line-height: 1.3;
        //word-wrap: break-word;
        //overflow-wrap: break-word;
        //word-break: break-word;
    }

    .emoji {
        display: flex;
        justify-content: flex-end;
        font-size: 3rem;
        position: absolute;
        bottom: 1rem;
        right: 3rem;
    }
`

export const EndpointSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 2.5rem;
    padding-bottom: 15.5rem;

    .endpoints-header {
        h2 {
            margin-bottom: 0rem;
        }
    }

    .endpoints-subtitle {
        font-size: 18px;
        font-weight: 400;
        color: var(--color-font-bright);
        text-align: center;
        margin-bottom: 1.5rem;
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
        font-family: var(--font-family-poppins), system-ui, Avenir, Helvetica, Arial, sans-serif;
        font-size: 12px;
        font-weight: 400;
    }
`

export const TabNavigationItemStyled = styled.div`
    display: flex;
    cursor: pointer;

    .active {
        color: var(--color-turqoise);
    }
`

export const TabContentStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 696px;
    min-height: 340px;
    border-radius: 12px;
    background-image: var(--dashed-border);
    padding: 1.5rem;
    gap: 0.5rem;

    .description {
        font-size: 12px;
        font-weight: 400;
        font-family: var(--font-family-poppins), system-ui, Avenir, Helvetica, Arial, sans-serif;
    }

    .endpoint {
        font-size: 12px;
        font-weight: 400;
        font-family: var(--font-family-mono), monospace;
    }
`

export const TabDatabaseOutputStyled = styled.div`
    display: flex;
    background: var(--color-output-tab-grey);
    min-height: 277px;
    padding: 2rem;
    font-size: 12px;
    font-weight: 400;
    font-family: var(--font-family-mono), monospace;
`

export const AboutMeSectionStyled = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 2.5rem;
    padding-bottom: 15rem;

    h2 {
        margin-bottom: 0rem;
    }

    .about-me-subtitle {
        font-size: 18px;
        font-weight: 400;
        color: var(--color-font-bright);
        text-align: center;
        margin-bottom: 1.5rem;
    }

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
        min-width: 173px;
        height: 173px;
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
        width: 306px;
        height: 272px;

        .text {
            font-size: 18px;
            font-weight: 300;
            color: var(--color-font-bright);
            text-align: left;
            margin-bottom: 1rem;
        }

        a {
            transition: transform 0.3s ease;
        }

        a:hover {
            transform: scale(1.2);
        }
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
import {BigButtonStyled, HeroSectionStyled} from "../../styles/globalStyles.js";


export default function HeroSection() {

    const scrollToExcuse = () => {
        const excuseSection = document.getElementById("excuses"); // get element by ID
        if (excuseSection) {
            excuseSection.scrollIntoView({behavior: "smooth"});
        }
    };

    return (
        <HeroSectionStyled>
            <div className="hero-content">
                <h1>Lets get Eaasy!</h1>   {/*in index css*/}
                <h2>Excuse as a Service</h2>    {/*in index css*/}
                <BigButtonStyled onClick={scrollToExcuse}>TRY IT</BigButtonStyled>
                <img src="/down-arrow.svg" alt="down-arrow"/>
            </div>
        </HeroSectionStyled>
    )
}
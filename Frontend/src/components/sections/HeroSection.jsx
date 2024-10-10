import {HeroSectionStyled} from "../../styles/globalStyles.js";

export default function HeroSection() {
    return (
        <HeroSectionStyled>
            <div className="hero-content">
                <h1>Lets get Eaasy!</h1>   {/*in index css*/}
                <h2>Excuse as a Service</h2>    {/*in index css*/}
                <button>TRY IT</button>
            </div>
        </HeroSectionStyled>
    )
}
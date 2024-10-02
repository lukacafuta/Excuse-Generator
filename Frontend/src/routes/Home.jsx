import Header from "../components/sections/Header.jsx";
import Footer from "../components/sections/Footer.jsx";
import HeroSection from "../components/sections/HeroSection.jsx";
import ExcuseSection from "../components/sections/ExcuseSection.jsx";
import EndpointSection from "../components/sections/EndpointSection.jsx";
import AboutMeSection from "../components/sections/AboutMeSection.jsx";

export default function Home() {
    return (
        <>
            <Header/>
            <HeroSection/>
            <ExcuseSection/>
            <EndpointSection/>
            <AboutMeSection/>
            <Footer/>
        </>
    )
}
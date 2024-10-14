import {AboutMeSectionStyled} from "../../styles/globalStyles.js";

export default function AboutMeSection() {
    return (
        <AboutMeSectionStyled>
            <h2>About me</h2>
            <h3>Hi, I am Luka - a Full Stack Dev</h3>
            <div className="about-me-content">
                <div className="profile-photo-wrapper">
                    <img className="profile-photo" src="/luka-profile-photo.png" alt="profile photo"/>
                </div>
                <div className="about-me-text-linkedin">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis hac dictum, vitae augue arcu
                        penatibus pharetra aenean vel tempus suspendisse porta, ridiculus ullamcorper semper lobortis
                        bibendum donec ornare ut mattis. Condimentum viverra fames pulvinar molestie quis maecenas
                        scelerisque congue mollis a ante urna ac.
                    </p>
                    <img src="/linkedin-logo.svg" alt="linkedin logo"/>
                </div>
            </div>
        </AboutMeSectionStyled>
    )
}

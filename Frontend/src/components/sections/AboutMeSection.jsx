import {AboutMeSectionStyled} from "../../styles/globalStyles.js";

export default function AboutMeSection() {
    return (
        <AboutMeSectionStyled id="aboutme">
            <h2>About me</h2>
            <div className="about-me-subtitle">Hi, I am Luka - a Full Stack Dev</div>
            <div className="about-me-content">
                <div className="profile-photo-wrapper">
                    <img className="profile-photo" src="/luka-profile-photo.png" alt="profile photo"/>
                </div>
                <div className="about-me-text-linkedin">
                    <div className="text">
                        Experienced in the healthcare sector, administrative skills, and a strong customer focus.<br/>
                        In addition to solid computer science and programming knowledge (JavaScript, Python, SQL), I
                        have extensive experience in customer service and organization.
                    </div>
                    <img src="/linkedin-logo.svg" alt="linkedin logo"/>
                </div>
            </div>
        </AboutMeSectionStyled>
    )
}

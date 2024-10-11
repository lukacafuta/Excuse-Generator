import {AboutMeSectionStyled} from "../../styles/globalStyles.js";

export default function AboutMeSection() {
    return (
        <AboutMeSectionStyled>
            <h2>About me</h2>
            <h3>Hi, I am Luka - a Full Stack Dev</h3>
            <div>
                <img src="/luka-profile-photo.png" alt="profile photo"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit venenatis hac dictum, vitae augue arcu
                    penatibus pharetra aenean vel tempus suspendisse porta, ridiculus ullamcorper semper lobortis
                    bibendum donec ornare ut mattis. Condimentum viverra fames pulvinar molestie quis maecenas
                    scelerisque congue mollis a ante urna ac.
                </p>
            </div>
            <img src="/linkedin-logo.svg" alt="linkedin logo"/>
        </AboutMeSectionStyled>
    )
}

import {BigButtonStyled, ExcuseSectionStyled} from "../../styles/globalStyles.js";
import dummyExcuses from "../../common/dummyExcuses.js";
import {useState} from "react";


export default function ExcuseSection() {

    const [excuse, setExcuse] = useState(dummyExcuses[0]);


    const getRandomExcuse = () => {
        const randomIndex = Math.floor(Math.random() * dummyExcuses.length);
        setExcuse(dummyExcuses[randomIndex]);
    };

    return (
        <ExcuseSectionStyled id="excuses">
            <div className="excuse-content">
                <div className="category">{excuse.category}</div>
                <div className="excuse">{excuse.excuse}</div>
                <div className="emoji">🥸</div>
            </div>
            <BigButtonStyled onClick={getRandomExcuse}>New Excuse</BigButtonStyled>
        </ExcuseSectionStyled>
    )
}
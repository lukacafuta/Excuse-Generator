import {BigButtonStyled, ExcuseSectionStyled} from "../../styles/globalStyles.js";
import dummyExcuses from "../../common/dummyExcuses.js";
import {useEffect, useState} from "react";
import {api} from "../../common/api.js";


export default function ExcuseSection() {

    // initialize the excuse state
    const [excuse, setExcuse] = useState({
        excuse_text: "",
        category_name: "",
    });

    // function to fetch a random excuse from the API
    const fetchExcuseRandom = async () => {
        try {
            const response = await api.get('/excuses/random/4/');
            const data = response.data;

            setExcuse({
                excuse_text: data.excuse_text,
                category_name: data.category_name,
            });
        } catch (error) {
            console.error('Error fetching random excuse:', error);
            // fall back error message
            setExcuse({
                excuse_text: "Failed to fetch excuse.",
                category_name: "Technical Issues",
            });
        }
    };

    // fetch a random excuse when the button is clicked
    const getRandomExcuse = () => {
        fetchExcuseRandom();
    };

    // fetch a random excuse when the component first loads
    useEffect(() => {
        fetchExcuseRandom();
    }, []);

    // const getRandomExcuse = () => {
    //     const randomIndex = Math.floor(Math.random() * dummyExcuses.length);
    //     setExcuse(dummyExcuses[randomIndex]);
    // };

    return (
        <ExcuseSectionStyled id="excuses">
            <div className="excuse-content">
                <div className="category">{excuse.category_name}</div>
                <div className="excuse">{excuse.excuse_text}</div>
                <div className="emoji">🥸</div>
            </div>
            <BigButtonStyled onClick={getRandomExcuse}>New Excuse</BigButtonStyled>
        </ExcuseSectionStyled>
    )
}
import {EndpointSectionStyled} from "../../styles/globalStyles.js";
import TabContainer from "../tabs/TabContainer.jsx";


export default function EndpointSection() {
    return (
        <EndpointSectionStyled id="documentation">
            <div className="endpoints-header">
                <h2>Excuse Documentation</h2>
                <div className="endpoints-subtitle">Crud your way through some excuses</div>
            </div>
            <TabContainer/>
        </EndpointSectionStyled>
    )
}
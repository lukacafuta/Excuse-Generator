import {EndpointSectionStyled} from "../../styles/globalStyles.js";
import TabContainer from "../tabs/TabContainer.jsx";

export default function EndpointSection() {
    return (
        <EndpointSectionStyled>
            <div className="endpoints-header">
                <h2>Excuse Documentation</h2>
                <h3>Crud your way through some excuses</h3>
            </div>
            <TabContainer/>
        </EndpointSectionStyled>
    )
}
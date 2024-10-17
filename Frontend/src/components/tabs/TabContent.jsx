import {TabContentStyled} from "../../styles/globalStyles.js";
import TabDatabaseOutput from "./TabDatabaseOutput.jsx";

export default function TabContent() {
    return (
        <TabContentStyled>
            <div className="description">
                Gotta get all of them excuses
            </div>
            <div className="endpoint">
                https://excuse-generator-api.herokuapp.com/api/excuse/
            </div>
            <TabDatabaseOutput/>
        </TabContentStyled>
    )
}
import {TabContentStyled} from "../../styles/globalStyles.js";
import TabDatabaseOutput from "./TabDatabaseOutput.jsx";
import dummyEndpoints from "../../common/dummyEndpoints.js";
import {baseUrl} from "../../common/api.js";

export default function TabContent({tabID}) {
    const tab = dummyEndpoints.find(tab => tab.id === tabID)

    // if (tab) {
    //     console.log(tab.id);
    // } else {
    //     console.log(`Endpoint with ID ${tabID} not found`);
    // }

    return (
        <TabContentStyled>
            <div className="description">
                {tab.description}
            </div>
            <div className="endpoint">
                {baseUrl}{tab.endpoint}
            </div>
            <TabDatabaseOutput tab={tab}/>
        </TabContentStyled>
    )
}
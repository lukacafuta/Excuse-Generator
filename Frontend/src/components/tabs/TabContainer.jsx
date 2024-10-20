import {TabContainerStyled} from "../../styles/globalStyles.js";
import TabNavigation from "./TabNavigation.jsx";
import TabContent from "./TabContent.jsx";
import {useParams} from "react-router-dom";
import dummyEndpoints from "../../common/dummyEndpoints.js";

export default function TabContainer() {
    const {id} = useParams()
    const defaultTab = dummyEndpoints[0].id
    const activeTab = id || defaultTab

    return (
        <TabContainerStyled>
            <TabNavigation/>
            <TabContent tabID={activeTab}/>
        </TabContainerStyled>
    )
}
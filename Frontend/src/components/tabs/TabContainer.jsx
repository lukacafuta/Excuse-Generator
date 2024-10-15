import {TabContainerStyled} from "../../styles/globalStyles.js";
import TabNavigation from "./TabNavigation.jsx";
import TabContent from "./TabContent.jsx";

export default function TabContainer() {
    return (
        <TabContainerStyled>
            <TabNavigation/>
            <TabContent/>
        </TabContainerStyled>
    )
}
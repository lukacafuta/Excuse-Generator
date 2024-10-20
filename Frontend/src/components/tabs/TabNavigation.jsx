import {TabNavigationStyled} from "../../styles/globalStyles.js";
import dummyEndpoints from "../../common/dummyEndpoints.js";
import TabNavigationItem from "./TabNavigationItem.jsx";

export default function TabNavigation() {
    const navItems = dummyEndpoints

    return (
        <TabNavigationStyled>
            <div className="endpoints">{navItems.map((item) => (
                <TabNavigationItem key={item.id} item={item}/>
            ))}
            </div>
            <div className="postman">
                Postman logo
            </div>
        </TabNavigationStyled>
    )
}
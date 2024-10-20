import {TabNavigationItemStyled} from "../../styles/globalStyles.js";
import {NavLink} from "react-router-dom";

export default function TabNavigationItem({item}) {

    return (
        <TabNavigationItemStyled>
            <NavLink to={`/${item.id}`}>{item.title}</NavLink>
        </TabNavigationItemStyled>
    )
}
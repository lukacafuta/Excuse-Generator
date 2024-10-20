import {TabDatabaseOutputStyled} from "../../styles/globalStyles.js";

export default function TabDatabaseOutput({tab}) {

    return (
        <TabDatabaseOutputStyled>
            {tab.content}
        </TabDatabaseOutputStyled>
    )
}
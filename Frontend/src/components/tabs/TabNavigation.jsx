import {TabNavigationStyled} from "../../styles/globalStyles.js";

export default function TabNavigation() {
    return (
        <TabNavigationStyled>
            <div className="endpoints">
                <button>Get all Excuses</button>
                <button>Get a single Excuse</button>
                <button>Post an Excuse</button>
                <button>Patch an Excuse</button>
                <button>Delete an Excuse</button>
                <button>Search for Excuses</button>
            </div>
            <div className="postman">
                Postman logo
            </div>
        </TabNavigationStyled>
    )
}
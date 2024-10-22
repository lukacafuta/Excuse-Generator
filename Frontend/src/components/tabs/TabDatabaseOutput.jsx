import {TabDatabaseOutputStyled} from "../../styles/globalStyles.js";

export default function TabDatabaseOutput({tab}) {
    let formattedContent;

    try {
        // parsing and formatting the content as JSON
        const parsedContent = JSON.parse(tab.content.trim());
        formattedContent = JSON.stringify(parsedContent, null, 2); // pretty print JSON with 2 spaces of indentation
    } catch (error) {
        // if content is not JSON, just display it as it is
        formattedContent = tab.content;
    }

    return (
        <TabDatabaseOutputStyled>
            <pre>{formattedContent}</pre>
        </TabDatabaseOutputStyled>
    )
}
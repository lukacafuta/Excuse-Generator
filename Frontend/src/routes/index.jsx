import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Home.jsx";
import TabContent from "../components/tabs/TabContent.jsx";
import NotFound from "./NotFound.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                    <Route path=":id" element={<TabContent/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    )
}
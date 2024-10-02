import {Outlet} from "react-router-dom";

export default function DefaultLayout() {
    console.log("DefaultLayout rendered");
    return (
        <div>
            <h1>Looking for an excuse?</h1>
            <Outlet/>
        </div>
    )
}
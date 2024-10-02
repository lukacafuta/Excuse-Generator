import {BrowserRouter, Route, Routes} from "react-router-dom";

// layouts
import DefaultLayout from "../layouts/DefaultLayout.jsx";
import Login from "./Login.jsx";
import GetToken from "./GetToken.jsx";
import Register from "./Register.jsx";
import GetAllExcuses from "./GetAllExcuses.jsx";
import SearchExcuse from "./SearchExcuse.jsx";
import AddExcuse from "./AddExcuse.jsx";
import PatchExcuse from "./PatchExcuse.jsx";
import DeleteExcuse from "./DeleteExcuse.jsx";
import LandingPage from "./LandingPage.jsx";

// placeholder components
// const LandingPage = () => <h1>Landing Page</h1>;
// const Login = () => <h1>Login</h1>;
// const GetToken = () => <h1>Get Token</h1>;
// const Register = () => <h1>Register</h1>;
// const GetAllExcuses = () => <h1>Get All Excuses</h1>;
// const SearchExcuse = () => <h1>Search Excuse</h1>;
// const AddExcuse = () => <h1>Add Excuse</h1>;
// const PatchExcuse = () => <h1>Patch Excuse</h1>;
// const DeleteExcuse = () => <h1>Delete Excuse</h1>;
const NotFound = () => <h1>404 - This page does not exist</h1>;

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout/>}>
                    <Route index element={<LandingPage/>}/>
                    <Route path="login" element={<Login/>}/>
                    <Route path="get-token" element={<GetToken/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="get-all-excuses" element={<GetAllExcuses/>}/>
                    <Route path="search-excuse" element={<SearchExcuse/>}/>
                    <Route path="add-excuse" element={<AddExcuse/>}/>
                    <Route path="patch-excuse" element={<PatchExcuse/>}/>
                    <Route path="delete-excuse" element={<DeleteExcuse/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
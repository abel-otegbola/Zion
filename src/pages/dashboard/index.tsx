import { Navigate, Route, Routes } from "react-router-dom";
import DashboardHome from "./dashboardHome/dashboardHome";
import { useContext } from "react";
import { AuthContext } from "../../customHooks/useAuth";
import AddBook from "./add-book/addBook";
import EditBook from "./edit-book/editBook";

function Dashboard() {
    const { user } = useContext(AuthContext); 

    if(!user) {
        return <Navigate to={"/login"} />
    }
    else {
        return (
        <>
            <div className="">
                <Routes>
                    <Route path="/" element={<DashboardHome />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/edit-book" element={<EditBook />} />
                </Routes>
            </div>
        </>
        )
    }
    
}

export default Dashboard
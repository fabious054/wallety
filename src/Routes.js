import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes,useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserContext } from './contexts/usercontext';
import { PageContext } from './contexts/pageContext';
import { getLocal } from './utils/LocalStorage';
import Register from './pages/Register';
import Default from './pages/Default';


const AppRoutes = () =>{
    const { user, setUser } = useContext(UserContext);

    const ProtectedRoute = ({ element }) => {
        if (user === null) {
            console.log('User is not logged in,redirecting to login page');
            return <Navigate to="/login" replace />;

        }
        return element;
      };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/" element={<ProtectedRoute element={<Default />} />} >
                    <Route index path="/" element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
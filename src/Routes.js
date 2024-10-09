import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserContext } from './contexts/usercontext';
import { getLocal } from './utils/LocalStorage';


const AppRoutes = () =>{
    const { user, setUser } = useContext(UserContext);
    const localUser = getLocal('user');
    // if(localUser){
    //     setUser(localUser);
    // }

    const ProtectedRoute = ({ element }) => {
        if (user === null) {
            console.log('User is not logged in,try to get user from local storage');
            if(localUser){
                setUser(localUser);
            }else{
                console.log('User is not logged in,redirecting to login page');
                return <Navigate to="/login" replace />;
            }

        }
        return element;
      };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
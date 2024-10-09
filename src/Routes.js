import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserContext } from './contexts/usercontext';


const AppRoutes = () =>{
    const { user, setUser } = useContext(UserContext);

    const ProtectedRoute = ({ element }) => {
        if (user === null) {
            console.log('User is not logged in');
          return <Navigate to="/login" replace />;
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
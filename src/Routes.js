import { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import { UserContext } from './contexts/usercontext';
import Register from './pages/Register';
import Default from './pages/Default';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import { tokenValidation } from './utils/Requests';
import { setLocal } from './utils/LocalStorage';

const ProtectedRoute = ({ element }) => {
    const { user,setUser } = useContext(UserContext);
    const [loading, setLoading] = useState(true);
    const [isValid, setIsValid] = useState(false);

    useEffect(() => {
        const validateToken = async () => {
            if (user) {
                const response = await tokenValidation();
                console.log(response);
                if (response.status == 401) {
                    setUser(null);
                    setLocal('user', null);
                }
                setIsValid(response.status === 200); // Ajuste conforme o seu código
            } else {
                setIsValid(false);
            }
            setLoading(false);
        };

        validateToken();
    }, [user]);

    if (loading) {
        return <div>Loading...</div>; // Componente de carregamento
    }

    return isValid ? element : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/" element={<ProtectedRoute element={<Default />} />}>
                    <Route index element={<Dashboard />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;

import axios from 'axios';

export const login = async (username, password) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username: username,
            password: password,
        });

        return response.data;

    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}

export const getStatesByCountry = async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${API_URL}/states/8`);

        return response.data;

    } catch (error) {
        console.error('Error to get states:', error);
        return null;
    }
}
export const getCitiesByState = async (id) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${API_URL}/cities/${id}`);

        return response.data;

    } catch (error) {
        console.error('Error to get states:', error);
        return null;
    }
}
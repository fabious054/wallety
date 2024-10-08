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
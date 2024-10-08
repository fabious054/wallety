import axios from 'axios';

export const login = async (username, password) => {
    try {
        const response = await axios.post('http://localhost:3000/login', {
            email: username,
            password: password,
        });

        return response.data;

    } catch (error) {
        console.error('Error during login:', error);
        return null;
    }
}
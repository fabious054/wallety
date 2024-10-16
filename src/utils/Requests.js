import axios from 'axios';
import { getToken } from './Token';

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
        return error.response.data;
    }
}

export const getStatesByCountry = async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${API_URL}/states/8`);

        return response.data;

    } catch (error) {
        console.error('Error to get states:', error);
        return error.response.data;
    }
}
export const getCitiesByState = async (id) => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.get(`${API_URL}/cities/${id}`);

        return response.data;

    } catch (error) {
        console.error('Error to get states:', error);
        return error.response.data;
    }
}

export const createAccount = async (name, lastname,username,email,born,id_country = 8 ,id_state,id_city,password) => {
    const API_URL = process.env.REACT_APP_API_URL;
    const [day, month, year] = born.split('/');
    born = `${year}-${month}-${day}`;

    try {
        const response = await axios.post(`${API_URL}/user`, {
            name: name,
            lastname: lastname,
            username: username,
            email: email,
            born: born,
            id_country: id_country,
            id_state: id_state,
            id_city: id_city,
            password: password
        });

        return response.data;

    } catch (error) {
        console.error('Error on insert :', error);
        return error.response.data;
    }
}

export const editUser = async (id, name, lastname,username,email,born,id_country = 8 ,id_state,id_city) => {
const API_URL = process.env.REACT_APP_API_URL;
const [day, month, year] = born.split('/');
born = `${year}-${month}-${day}`;

try {
    const response = await axios.put(`${API_URL}/user/${id}`, {
        name: name,
        lastname: lastname,
        username: username,
        email: email,
        born: born,
        id_country: id_country,
        id_state: id_state,
        id_city: id_city,
    },{
        headers: {
            Authorization: `Bearer ${ getToken()}`
        }
    });

    return response.data;

} catch (error) {
    console.error('Error on update :', error);
    return error.response.data;
}
}


export const tokenValidation = async () => {
    const API_URL = process.env.REACT_APP_API_URL;
    try {
        const response = await axios.post(`${API_URL}/token`, {
            token: getToken()
        });

        return response.data;

    } catch (error) {
        console.error('Error during token validation:', error);
        return error.response.data;
    }
};
import { getLocal } from "./LocalStorage";

export const getToken = () => {
    const token = getLocal('user');
    return token.token;
};

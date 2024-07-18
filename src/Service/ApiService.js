import axios from 'axios';

const API_URL = 'ceniza-sb.yeems214.xyz';

export const Login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/Login`, credentials);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};

export const signup = async (accDetails) => {
    try {
        const response = await axios.post(`${API_URL}/signup`, accDetails);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
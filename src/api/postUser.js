import axios from "axios";

import getToken from "./getToken";

const postUser = async (formData) => {
    try {
        const token = await getToken();

        const config = {
            headers: {
                'Token': token,
                'Content-Type': 'multipart/form-data'
            }
        };

        const response = await axios.post(process.env.REACT_APP_USERS_URL, formData, config);

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.message || 'Server error');
        } else if (error.request) {
            throw new Error('Network error');
        } else {
            throw new Error(error.message);
        }
    }
};


export default postUser;
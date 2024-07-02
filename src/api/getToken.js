import axios from "axios";

const getToken = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_TOKEN_URL);
        if (response.data.success) {
            return response.data.token;
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        } else {
            throw new Error(error.message);
        }
    }
};

export default getToken;

import axios from "axios";

const getToken = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_TOKEN_URL);
        if (response.data.success) {
            console.log(response.data.token);
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
};

export default getToken;

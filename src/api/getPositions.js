import axios from "axios";

const getPositions = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_POSITIONS_URL);
        if (response.data.success) {
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data);
        } else {
            throw new Error(error.message);
        }
    }
};

export default getPositions;
import axios from "axios";

const getPositions = async () => {
    try {
        const response = await axios.get(process.env.REACT_APP_POSITIONS_URL);
        if (response.data.success) {
            return response.data;
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
};

export default getPositions;
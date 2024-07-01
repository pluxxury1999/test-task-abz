import axios from "axios";

const getUsers = async (link = `${process.env.REACT_APP_USERS_URL}?page=1&count=6`) => {
    try {
        const response = await axios.get(link);
        if (response.data.success) {
            console.log(response.data)
            return {
                nextLink: response.data.links.next_url,
                users: response.data.users
            };
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log(error.message);
        }
    }
};

export default getUsers;
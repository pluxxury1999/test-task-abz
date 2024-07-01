import axios from "axios";

const getUsers = async (
    link = `${process.env.REACT_APP_USERS_URL}?page=1&count=6`
) => {
    try {
        const response = await axios.get(link);
        if (response.data.success) {
            return {
                totalUsers: response.data.total_users,
                success: response.data.success,
                nextLink: response.data.links.next_url,
                users: response.data.users,
            };
        }
    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
            return {
                success: error.response.data.success,
            };
        } else {
            console.log(error.message);
        }
    }
};

export default getUsers;

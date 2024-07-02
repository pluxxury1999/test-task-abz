import shortid from "shortid";

import EmployeeCard from "../employeeCard/EmployeeCard";
import Spinner from "../spinner/Spinner";

import { useEffect, useState } from "react";

import "./GetSection.scss";
import getUsers from "../../api/getUsers";

const GetSection = ({ newUserId }) => {
    const [employees, setEmployees] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [nextLink, setNextLink] = useState("");
    const [loading, setLoading] = useState(false);
    const [totalUsers, setTotalUsers] = useState(0);

    // fetch users after adding a new user
    // did not use the /users/{id} route, cause the user gets to the beginning of the database anyway
    useEffect(() => {
        getUsers().then((data) => {
            setEmployees(transformToCards(data.users));
            setNextLink(data.nextLink);
            setTotalUsers(data.totalUsers);
            setHidden(false);
        });
    }, [newUserId]);

    const transformToCards = (employees) => {
        return employees.map((employee) => {
            return (
                <EmployeeCard key={shortid.generate()} employee={employee} />
            );
        });
    };

    const buttonHandler = () => {
        setLoading(true);
        getUsers(nextLink).then((data) => {
            if (data.success) {
                setEmployees([...employees, ...transformToCards(data.users)]);
                setNextLink(data.nextLink);
                setTotalUsers(data.totalUsers);
                
                // If all users are loaded, hide the button
                // add the number of received users to the existing users
                if (totalUsers === employees.length + data.users.length) {
                    setHidden(true);
                }
            }
        setLoading(false);
        });
    };

    return (
        <section className="getSection" id="users">
            <h1>Working with GET request</h1>
            <div className="cards__wrapper">
                {employees.length > 0 ? employees : <Spinner />}
            </div>
            {loading ? (
                <Spinner />
            ) : (
                <button
                    className="button"
                    hidden={hidden}
                    onClick={buttonHandler}
                >
                    Show more
                </button>
            )}
        </section>
    );
};

export default GetSection;

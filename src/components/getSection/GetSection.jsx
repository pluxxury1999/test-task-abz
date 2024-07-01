import shortid from "shortid";

import EmployeeCard from "../employeeCard/EmployeeCard";
import Spinner from "../spinner/Spinner";

import { useEffect, useState } from "react";

import "./GetSection.scss";
import getUsers from "../api/getUsers";

const GetSection = () => {
    const [employees, setEmployees] = useState([]);
    const [hidden, setHidden] = useState(false);
    const [nextLink, setNextLink] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getUsers().then((data) => {
            setEmployees(transformToCards(data.users));
            setNextLink(data.nextLink);
        });
    }, []);

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
            setEmployees([...employees, ...transformToCards(data.users)]);
            setNextLink(data.nextLink);
            if (data.nextLink === null) {
                setHidden(true);
            }
            setLoading(false);
        });
    };

    return (
        <section className="getSection">
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

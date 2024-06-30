import EmployeeCard from "../employeeCard/EmployeeCard";

import "./GetSection.scss";

const GetSection = () => {
    return (
        <section className="getSection">
            <h1>Working with GET request</h1>
            <div className="cards__wrapper">
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
                <EmployeeCard />
            </div>
            <button className="button">Show more</button>
        </section>
    );
};

export default GetSection;

import "./EmployeeCard.scss";

import cover from "../../resources/img/photo-cover.svg";

const EmployeeCard = (employee) => {
    const { name, position, email, phone, photo } = employee.employee;

    return (
        <div className="employeeCard">
            <img className="employeePhoto" src={photo.includes("https://frontend-test-assignment-api.abz.agency/images/users") ? photo : cover} alt={name} />
            <p className="name" title={name}>{name}</p>
            <p className="position" title={position}>{position}</p>
            <p className="email" title={email}>{email}</p>
            <p className="phone">{phone}</p>
        </div>
    )
};

export default EmployeeCard;
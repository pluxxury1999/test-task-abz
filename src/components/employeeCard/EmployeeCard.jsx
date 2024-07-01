import photo from "../../resources/img/photo-cover.svg";

import "./EmployeeCard.scss";

const EmployeeCard = ({ employee }) => {
    return (
        <div className="employeeCard">
            <img className="employeePhoto" src={photo} alt="employee" />
            <p className="name">Salvador Stewart Flynn...</p>
            <p className="position">Leading specialist of... </p>
            <p className="email">frontend_develop@gmail.com</p>
            <p className="phone">+38 (098) 278 44 24</p>
        </div>
    )
};

export default EmployeeCard;
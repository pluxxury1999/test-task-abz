import photo from "../../resources/img/photo-cover.svg";

import "./EmployeeCard.scss";

const EmployeeCard = ({ employee }) => {
    return (
        <div className="employeeCard">
            <img className="employeePhoto" src={photo} alt="employee" />
            <p className="name" title="Salvador Stewart">Salvador Stewart 11111111111111111111111111111111111111111</p>
            <p className="position" title="qweqwe">Leading specialist of... </p>
            <p className="email" title="qweqwe">frontend_develop@gmail.com</p>
            <p className="phone">+38 (098) 278 44 24</p>
        </div>
    )
};

export default EmployeeCard;
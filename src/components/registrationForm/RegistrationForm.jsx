import { useState, useEffect, useCallback } from "react";
import shortid from "shortid";

import getPositions from "../../api/getPositions";
import postUser from "../../api/postUser";

import {
    validateName,
    validateEmail,
    validatePhone,
    validatePhoto,
} from "../../utility/validation";

import Spinner from "../spinner/Spinner";

import successImg from "../../resources/img/success-image.svg";
import "./RegistrationForm.scss";

const RegistrationForm = ({ setNewUserId }) => {
    const [positionsList, setPositionsList] = useState([]);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState(1);
    const [photo, setPhoto] = useState(null);
    const [formValid, setFormValid] = useState(false);

    const [registrationResult, setRegistrationResult] = useState(null);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPositions().then((data) => {
            setPositionsList(data.positions);
        });
    }, []);

    const validateForm = useCallback(() => {
        const isValidName = validateName(name);
        const isValidEmail = validateEmail(email);
        const isValidPhone = validatePhone(phone);
        const isValidPhoto = validatePhoto(photo);
        setFormValid(
            isValidName && isValidEmail && isValidPhone && isValidPhoto
        );
    }, [name, email, phone, photo]);

    useEffect(() => {
        validateForm();
    }, [name, email, phone, photo, validateForm]);

    const createPositionList = (positions) => {
        return positions.map((item) => {
            return (
                <label className="radio__item" key={shortid.generate()}>
                    <input
                        value={item.id}
                        type="radio"
                        name="position"
                        defaultChecked={position === item.id}
                        onChange={() => setPosition(item.id)}
                    />
                    <span className="radio__button"></span>
                    {item.name}
                </label>
            );
        });
    };

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!formValid) return;

        const formData = new FormData();
        formData.append("position_id", position);
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("photo", photo);

        try {
            const response = await postUser(formData);
            console.log(response);
            if (response.success) {
                setRegistrationResult(true);
                setNewUserId(response.user_id);
            } else {
                setRegistrationResult(false);
            }
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    };

    return (
        loading ? (<Spinner />) : (
            registrationResult === null ? (
                <form onSubmit={submitHandler} className="registrationForm">
                <div className="input__wrapper">
                    <div
                        className={
                            validateName(name) || name === ""
                                ? "singleInput__container"
                                : "singleInput__container invalid"
                        }
                    >
                        <input
                            type="text"
                            name="name"
                            maxLength={60}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                        <div
                            className={
                                name.length > 0
                                    ? "singleInput__label input__fieled"
                                    : "singleInput__label"
                            }
                        >
                            Your name
                        </div>
                        <label htmlFor="name" className="input__hint">
                            Length from 2 to 60 characters
                        </label>
                    </div>
                    <div
                        className={
                            validateEmail(email) || email === ""
                                ? "singleInput__container"
                                : "singleInput__container invalid"
                        }
                    >
                        <input
                            type="email"
                            name="email"
                            maxLength={256}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <div
                            className={
                                email.length > 0
                                    ? "singleInput__label input__fieled"
                                    : "singleInput__label"
                            }
                        >
                            Email
                        </div>
                        <label htmlFor="email" className="input__hint">
                            Email must be valid
                        </label>
                    </div>
                    <div
                        className={
                            validatePhone(phone) || phone === ""
                                ? "singleInput__container"
                                : "singleInput__container invalid"
                        }
                    >
                        <input
                            id="phone"
                            name="phone"
                            type="tel"
                            minLength={2}
                            maxLength={13}
                            value={phone.replace(/[a-zA-Zа-яА-ЯїЇєЄіІґҐ]/g, "")}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                        <div
                            className={
                                phone.length > 0
                                    ? "singleInput__label input__fieled"
                                    : "singleInput__label"
                            }
                        >
                            Phone
                        </div>
                        <label htmlFor="phone" className="input__hint">
                            +38 (XXX) XXX - XX - XX, +38 required
                        </label>
                    </div>
                </div>
    
                <div className="radio__wrapper">
                    <legend>Select your position</legend>
                    {createPositionList(positionsList)}
                </div>
    
                <div
                    className={
                        validatePhoto(photo) || photo === null
                            ? "file__wrapper"
                            : "file__wrapper invalid"
                    }
                >
                    <label htmlFor="file__input" className="file__label">
                        Upload
                    </label>
                    <input
                        id="file__input"
                        type="file"
                        className="file__input"
                        accept="image/png, image/jpeg"
                        onChange={(e) => setPhoto(e.target.files[0])}
                        required
                    />
                    {photo ? (
                        <span className="file__text added" title={photo.name}>
                            {photo.name}
                        </span>
                    ) : (
                        <span className="file__text">Upload your photo</span>
                    )}
                </div>
                <label className="input__hint">
                    Maximum size of the image 5MB, minimum 70x70px
                </label>
    
                <input
                    type="submit"
                    className="button"
                    value="Sign Up"
                    disabled={!formValid}
                />
            </form>
            ) : <View isSuccess={registrationResult} />
        )
    );
};

export default RegistrationForm;

// used Conditional Rendering to display the result of the registration
const View = ({ isSuccess }) => {
    return (
        isSuccess ? (
            <div className="success__container">
            <h1>User successfully registered</h1>
            <img src={successImg} alt="success" />
        </div>
        ): <h1>Error has occurred</h1>
    );
};

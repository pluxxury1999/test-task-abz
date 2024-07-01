import "./RegistrationForm.scss";

const RegistrationForm = () => {
    const submitHandler = (e) => {
        e.preventDefault();
    };

    return (
        <form onSubmit={submitHandler} className="registrationForm">
            <div className="input__wrapper">
                <div className="singleInput__container">
                    <input type="text" minLength={2} maxLength={60} />
                    <div className="singleInput__label">Your name</div>
                </div>
                <div className="singleInput__container">
                    <input type="email" minLength={2} maxLength={60} />
                    <div className="singleInput__label">Email</div>
                </div>
                <div className="singleInput__container">
                    <input
                        id="phone"
                        name="phone"
                        type="tel"
                        minLength={2}
                        maxLength={60}
                    />
                    <div className="singleInput__label">Phone</div>
                </div>
            </div>
            <label htmlFor="phone" className="phoneSignature">
                +38 (XXX) XXX - XX - XX
            </label>

            <div className="radio__wrapper">
                <legend>Select your position</legend>

                <label className="radio__item">
                    <input type="radio" name="position" defaultChecked />
                    <span className="radio__button"></span>
                    Frontend developer
                </label>

                <label className="radio__item">
                    <input type="radio" name="position" />
                    <span className="radio__button"></span>
                    Backend developer
                </label>

                <label className="radio__item">
                    <input type="radio" name="position" />
                    <span className="radio__button"></span>
                    Designer
                </label>

                <label className="radio__item">
                    <input type="radio" name="position" />
                    <span className="radio__button"></span>
                    QA
                </label>
            </div>

            <div class="file__wrapper">
                <label for="file__input" class="file__label">
                    Upload
                </label>
                <input id="file__input" type="file" class="file__input" />
                <span class="file__text">Upload your photo</span>
            </div>

            <input type="submit" className="button" value="Sign Up" disabled />
        </form>
    );
};

export default RegistrationForm;

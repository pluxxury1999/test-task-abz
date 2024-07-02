import RegistrationForm from "../registrationForm/RegistrationForm";

import "./PostSection.scss";

const PostSection = ( { setNewUserId } ) => {
    return (
        <section className="postSection" id="signUp">
            <h1>Working with POST request</h1>
            <RegistrationForm setNewUserId={setNewUserId}/>
        </section>
    )
};

export default PostSection;
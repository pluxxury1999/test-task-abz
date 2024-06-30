import "./HeroSection.scss";

const HeroSection = () => {
    return (
        <section className="heroSection">
            <div className="wrapper">
                <h1>Test assignment for front-end developer</h1>
                <p>
                    What defines a good front-end developer is one that has
                    skilled knowledge of HTML, CSS, JS with a vast understanding
                    of User design thinking as they'll be building web
                    interfaces with accessibility in mind. They should also be
                    excited to learn, as the world of Front-End Development
                    keeps evolving.
                </p>
                <a href="#signup" className="button">Sign up</a>
            </div>
        </section>
    );
};

export default HeroSection;

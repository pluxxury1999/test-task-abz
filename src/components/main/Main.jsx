import HeroSection from "../heroSection/HeroSection";
import GetSection from "../getSection/GetSection";
import PostSection from "../postSection/PostSection";

import "./Main.scss";

const Main = () => {
    return (
        <main>
            <HeroSection />
            <GetSection />
            <PostSection />
        </main>
    );
}

export default Main;
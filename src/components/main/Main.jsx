import HeroSection from "../heroSection/HeroSection";
import GetSection from "../getSection/GetSection";
import PostSection from "../postSection/PostSection";

import { useState } from "react";

import "./Main.scss";

const Main = () => {

    const [newUserId, setNewUserId] = useState(null);

    return (
        <main>
            <HeroSection />
            <GetSection newUserId={newUserId}/>
            <PostSection setNewUserId={setNewUserId}/>
        </main>
    );
}

export default Main;
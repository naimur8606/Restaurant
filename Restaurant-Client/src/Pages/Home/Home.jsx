import Banner from "./Banner";
import ChefReComment from "./ChefReComment";
import Chef from "./Comment";
import Feature from "./Feature";
import HomeMenu from "./HomeMenu";
import HomeNumber from "./HomeNumber";
import HomeOrder from "./HomeOrder";
import Testimonials from "./Testimonials";
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>BOOS | Home</title>
            </Helmet>
            <Banner></Banner>
            <HomeOrder></HomeOrder>
            <Chef></Chef>
            <HomeMenu></HomeMenu>
            <HomeNumber></HomeNumber>
            <ChefReComment></ChefReComment>
            <Feature></Feature>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
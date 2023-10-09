import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Services from "../services/Services";
import Banner from "../../components/banner/Banner";
import Reviews from "../reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;
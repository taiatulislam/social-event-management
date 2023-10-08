import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Services from "../services/Services";
import Banner from "../../components/banner/Banner";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
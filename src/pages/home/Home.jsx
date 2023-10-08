import Carousal from "../../components/carousal/Carousal";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Services from "../services/Services";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <Carousal></Carousal> */}
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;
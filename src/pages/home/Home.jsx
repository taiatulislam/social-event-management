import Carousal from "../../components/carousal/Carousal";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-5">Our organized events</h2>
            <Carousal></Carousal>
            <Footer></Footer>
        </div>
    );
};

export default Home;
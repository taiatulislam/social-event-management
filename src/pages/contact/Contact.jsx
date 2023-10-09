import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl my-5 font-semibold text-center">Contact Us</h2>
                <div className="mb-10">
                    <h3><span className="text-xl font-bold">Phone no:</span> +880 323629427</h3>
                    <h3><span className="text-xl font-bold">Email:</span> www.email.com</h3>
                    <p><span className="text-xl font-bold">Address:</span> Road:234, Dhaka-1212</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Contact;
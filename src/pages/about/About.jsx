import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mb-10 text-justify">
                <h2 className="text-4xl my-5 font-semibold text-center">About Us</h2>
                <p>Welcome to Social Event Management, your premier partner in creating memorable and exceptional events that leave a lasting impact. We are thrilled to introduce our passion-driven team and innovative approach to event planning. At Social Event Management, we understand that every event is unique, and our mission is to bring your vision to life. Whether you are planning a corporate conference, a dream wedding, a milestone celebration, or a cultural extravaganza, we are here to make it extraordinary.</p>

                <h3 className="text-2xl my-5 font-semibold">Our Commitment</h3>

                <p><span className="font-bold">Excellence:</span> We are dedicated to delivering excellence in every detail. From meticulously crafted event concepts to flawless execution, we leave no stone unturned to ensure your event surpasses your expectations.</p>

                <p className="my-4"><span className="font-bold">Creativity:</span> Our team thrives on creativity. We bring fresh ideas, innovative designs, and a touch of magic to transform your event into an unforgettable experience that will be talked about for years to come.</p>

                <p><span className="font-bold">Professionalism:</span> With years of experience in the industry, we bring a high level of professionalism to every project. Our team is known for its reliability, attention to detail, and commitment to delivering on time and within budget.</p>


                <h3 className="text-2xl my-5 font-semibold">Why Choose Us</h3>

                <p><span className="font-bold">Expertise:</span> Our team consists of seasoned professionals with a wealth of experience in event planning, design, and coordination.</p>

                <p className="my-4"><span className="font-bold">Personalized Service:</span> We believe in building strong client relationships. Your dedicated event manager will be with you every step of the way.</p>

                <p><span className="font-bold">Innovation:</span> We stay at the forefront of industry trends and technology to bring fresh and exciting elements to your event.</p>

                <p className="my-3">We invite you to explore our portfolio and discover how we have turned visions into reality for our clients. Whether your event is large or intimate, corporate or social, we are ready to make it extraordinary.</p>
                <p>Thank you for considering Social Event Management as your partner in creating memorable moments. We look forward to turning your dreams into events you will cherish forever.</p>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default About;
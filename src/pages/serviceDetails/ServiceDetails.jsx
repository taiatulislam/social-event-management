import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const ServiceDetails = () => {

    const [currentService, setCurrentService] = useState({});
    const { id } = useParams();
    const services = useLoaderData();

    useEffect(() => {
        const service = services?.find(service => service.id === parseInt(id))
        setCurrentService(service);
    }, [id, services])

    return (
        <div>
            <Navbar></Navbar>
            <div className="md:w-full lg:w-3/4 mx-auto px-5">
                <img src={currentService.image} alt="" className="w-full rounded-lg mt-5 h-[500px] mx-auto" />
                <p className="text-lg my-3">{currentService.description}</p>
            </div>
            <div className="grid md:grid-cols-1 px-5 lg:grid-cols-3 gap-7 md:w-full lg:w-3/4 mx-auto my-10">
                <div className="text-center border-2 border-black">
                    <h2 className="bg-[#C0C0C0] text-white text-3xl font-bold py-3">Silver</h2>
                    <ul className="text-lg flex flex-col gap-3">
                        <li>Event Planning and Consultation</li>
                        <li>Venue Selection</li>
                        <li>Event Design</li>
                        <li>Guest List</li>
                        <li>Documentation and Reporting</li>
                    </ul>
                    <p className="text-xl font-bold text-pink-400 bg-base-200 py-2 w-full text-center">$ {currentService.silver}</p>

                </div>
                <div className="text-center border-2 border-black">
                    <h2 className="bg-[#E29926] text-white text-3xl font-bold py-3">Gold</h2>
                    <ul className="text-lg flex flex-col gap-3">
                        <li>Event Planning and Consultation</li>
                        <li>Venue Selection and Management</li>
                        <li>Event Design</li>
                        <li>Budget Management</li>
                        <li>Guest List</li>
                        <li>Documentation and Reporting</li>
                    </ul>
                    <p className="text-xl font-bold text-pink-400 bg-base-200 py-2">$ {currentService.gold}</p>
                </div>
                <div className="text-center border-2 border-black">
                    <h2 className="bg-[#46698C] text-white text-3xl font-bold py-3">Platinum</h2>
                    <ul className="text-lg flex flex-col gap-3">
                        <li>Event Planning and Consultation</li>
                        <li>Venue Selection and Management</li>
                        <li>Event Design and Theming</li>
                        <li>Budget Management</li>
                        <li>Guest List and RSVP Management</li>
                        <li>Documentation and Reporting</li>
                    </ul>
                    <p className="text-xl font-bold text-pink-400 bg-base-200 py-2">$ {currentService.platinum}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
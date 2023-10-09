import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";

const ServiceDetails = () => {

    const [currentService, setCurrentService] = useState({});
    const { id } = useParams();
    const services = useLoaderData();

    useEffect(() => {
        const service = services.find(service => service.id === parseInt(id))
        setCurrentService(service);
    }, [id, services])

    console.log(currentService);

    return (
        <div>
            <Navbar></Navbar>
            <div className="">
                <div className="w-1/2 mx-auto">
                    <img src={currentService.image} alt="" className="w-full rounded-lg mt-5 h-[500px] mx-auto" />
                    <p className="text-lg my-3">{currentService.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
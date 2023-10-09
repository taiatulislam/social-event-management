import { useEffect, useState } from 'react'
import Service from '../service/Service';

const Services = () => {

    const [serviceData, setServiceData] = useState([]);

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServiceData(data))
    }, [])

    return (
        <div className="text-center max-w-7xl mx-auto mb-10">
            <h2 className="text-4xl my-3 font-semibold">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:px-5">

                {
                    serviceData.map(data => <Service key={data.id} data={data}></Service>)
                }

            </div>
        </div>
    );
};

export default Services;
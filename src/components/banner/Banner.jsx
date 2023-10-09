import banner from '../../assets/Banner_wedding.jpg'

const Banner = () => {
    return (
        <div className="hero h-[70vh] " style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-7xl">
                    <h1 className="mb-5 text-5xl font-bold">Welcome Everyone</h1>
                    <p className="mb-5 text-lg">An event management company is a professional organization specializing in the planning, coordination, and execution of various types of events. We provides weddings, marriage anniversary, birthday parties, baby shower etc. Event management companies work closely with clients to understand their goals, objectives, and vision for the event, and then use their expertise to handle logistics, vendor coordination, budget management, and on-site execution to ensure a successful and memorable experience for attendees. These companies play a crucial role in making events seamless and enjoyable, relieving clients of the stress associated with event planning and allowing them to focus on their guests and the events purpose.</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
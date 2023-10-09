import { useEffect, useState } from "react";
import Member from "../member/Member";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Members = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div className="bg-[#ff82c31b]">
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto mb-10">
                <h2 className="text-4xl my-5 font-semibold text-center">Our Team Members</h2>
                <div className="grid grid-cols-3 gap-5">
                    {
                        members.map(member => <Member key={member.id} member={member}></Member>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Members;
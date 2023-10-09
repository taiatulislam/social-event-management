import { useEffect, useState } from "react";
import Member from "../member/Member";

const Members = () => {

    const [members, setMembers] = useState([]);

    useEffect(() => {
        fetch('members.json')
            .then(res => res.json())
            .then(data => setMembers(data))
    }, [])

    return (
        <div className="bg-[#ff82c31b] py-10">
            <div className="max-w-7xl mx-auto mb-10 px-5">
                <h2 className="text-4xl my-5 font-semibold text-center">Meet Our Professionals</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        members.map(member => <Member key={member.id} member={member}></Member>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Members;
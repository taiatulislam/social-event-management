import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const Profile = () => {

    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto">
                <div>
                    <div className="card card-compact w-[400px] mx-auto py-20 bg-base-100 shadow-xl">
                        <figure><img src={user?.photoURL} alt="user" className="w-[200px]" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Name: {user.displayName}</h2>
                            <h2 className="card-title">Email: {user.email}</h2>
                            <h2 className="card-title">Phone: {user.phoneNumber}</h2>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Profile;
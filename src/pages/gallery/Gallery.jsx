import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";


const Gallery = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl mx-auto p-2 md:p-5">
                <div className="grid gap-2">
                    <div className="grid grid-cols-2 gap-2">
                        <img src={`https://i.ibb.co/8XLhH7H/gallery-1.jpg`} alt="" />
                        <div className="grid row-span-2">
                            <img src={`https://i.ibb.co/Dwnx5Rw/gallery-2.jpg`} alt="" />
                            <img src={`https://i.ibb.co/5rCrn0F/gallery-7.jpg`} alt="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                        <div className="grid ">
                            <img src={`https://i.ibb.co/j3WgphN/gallery-5.jpg`} alt="" />
                            <img src={`https://i.ibb.co/Xp8FGnc/gallery-6.jpg`} alt="" />
                        </div>
                        <img src={`https://i.ibb.co/LQ1xSSF/gallery-4.jpg`} alt="" />

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <img src={`https://i.ibb.co/zmkQBtY/gallery-3.jpg`} alt="" />

                    <img src={`https://i.ibb.co/gvVqxp8/gallery-8.jpg`} alt="" />
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Gallery;
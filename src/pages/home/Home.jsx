import Banner from "../../components/banner/Banner";
import Blogs from "../../components/blog/Blogs";
import Brands from "../../components/brands/Brands";
import CreateEvent from "../../components/createEvent/CreateEvent";
import Events from "../../components/event/Events";
import Footer from "../../components/footer/Footer";



const Home = () => {
    return (
        <div className="overflow-hidden">
            <div>
                <Banner />
            </div>
            <div>
                <Events />
            </div>
            <div>
                <CreateEvent />
            </div>
            <div>
                <Brands />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
import AosAnimation from '../aosAnimantion/AosAnimation';


const Banner = () => {

    return (
        <div className="bg-[url('https://i.ibb.co/gjmGxK8/Rectangle-12.png') bg-gradient-to-r from-purple-500 to-[#F5167E]">
            <AosAnimation>
                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-20 max-w-6xl mx-auto">
                    <div data-aos="fade-up">
                        <img  className='mx-auto' src="https://i.ibb.co/dtB4Dr3/pngguru-2.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center gap-4 px-12 mt-12 lg:mt-0 items-center lg:items-start">
                        <h1 data-aos="fade-up" data-aos-delay="500" className="text-4xl font-bold text-white text-center lg:text-left">Discover the Artistry of Entertainment Event Management</h1>
                        <p data-aos="fade-up" data-aos-delay="1000" className="text-white text-center lg:text-left"> Welcome to Elite Event Artistry, where entertainment meets excellence. We specialize in curating and managing entertainment events that leave a lasting impression. With a team of seasoned professionals, we bring your event ideas to life, from concept to execution.</p>
                        <div data-aos="fade-up" data-aos-delay="1500" className="flex gap-4 my-6">
                            <button className="py-2 bg-[#F5167E] px-4 md:px-6 lg:px-8 rounded-3xl text-white">Get Ticket</button>
                            <button className="py-2 px-4 md:px-6 lg:px-8 border rounded-3xl text-white">Learn More</button>
                        </div>
                    </div>
                </div>
            </AosAnimation>
        </div>
    );
};

export default Banner;
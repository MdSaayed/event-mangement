

const Banner = () => {
    return (
        <div className="bg-[url('https://i.ibb.co/gjmGxK8/Rectangle-12.png') bg-gradient-to-r from-purple-500 to-[#F5167E]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 max-w-6xl mx-auto">
                <div>
                    <img src="https://i.ibb.co/dtB4Dr3/pngguru-2.png" alt="" />
                </div>
                <div className="flex flex-col justify-center gap-4 px-12">
                    <h1 className="text-4xl font-bold text-white">Discover the Artistry of Entertainment Event Management</h1>
                    <p className="text-white"> Welcome to Your Company Name, where entertainment meets excellence. We specialize in curating and managing entertainment events that leave a lasting impression. With a team of seasoned professionals, we bring your event ideas to life, from concept to execution.</p>
                    <div className="flex gap-4">
                        <button className="py-2 bg-[#F5167E] px-8 rounded-3xl text-white">Get Ticket</button>
                        <button className="py-2 px-8 border rounded-3xl text-white">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
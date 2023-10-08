import AosAnimation from "../aosAnimantion/AosAnimation";

const CreateEvent = () => {

    return (
        <AosAnimation>
            <div className="bg-[#EEE1FF] py-4 my-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center max-w-6xl mx-auto">
                    <div className="text-center">
                        <img className="w-3/4 -mt-16" src="https://i.ibb.co/L5NYPKs/image-3.png" alt="" />
                    </div>
                    <div className="space-y-3 text-center">
                        <h2 data-aos="fade-left" data-aos-delay="500" className="font-bold text-xl">Make your own Event </h2>
                        <p data-aos="fade-left" data-aos-delay="800">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus mollitia nesciunt obcaecati tempora impedit saepe.</p>
                        <button data-aos="fade-left" data-aos-delay="1000" className="bg-[#F5167E] py-2 px-12 rounded-full text-white">Create Events</button>
                    </div>
                </div>
            </div>
        </AosAnimation>
    );
};

export default CreateEvent;
import { Link, NavLink } from "react-router-dom";
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';



const Footer = () => {
    return (
        <div className="bg-[#0A075F]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto py-16">
                <div className="space-y-3">
                    <h2 className="text-4xl font-bold">LOGO</h2>
                    <p>Eventick is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives.</p>
                    <div className="flex gap-4">
                        <Link><BsFacebook className="text-2xl" /></Link>
                        <Link><BsTwitter className="text-2xl" /></Link>
                        <Link><BsLinkedin className="text-2xl" /></Link>
                    </div>
                </div>
                <div className="grid grid-cols-2 mt-4 lg:mt-0 md:mt-0 gap-4 lg:col-span-2">
                    <div className="flex flex-col lg:items-center">
                        <div>
                            <h2 className="text-xl font-semibold lg:text-left">Plan Events</h2>
                            <div className="flex flex-col gap-3 mt-4">
                                <NavLink>Create and Set Up</NavLink>
                                <NavLink>Sell Tickets</NavLink>
                                <NavLink>Online RSVP</NavLink>
                                <NavLink>Online Events</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:items-center">
                        <div>
                            <h2 className="text-xl font-semibold">Plan Events</h2>
                            <div className="flex flex-col gap-3 mt-4">
                                <NavLink>About Us</NavLink>
                                <NavLink>Contact Us</NavLink>
                                <NavLink>Privacy</NavLink>
                                <NavLink>Terms</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="space-y-3">
                    <h2 className="text-xl font-semibold">Plan Events</h2>
                    <p>Join our mailing list to stay in the loop with our newest for Event and concert</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
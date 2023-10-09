import { Link } from "react-router-dom";

const PurchasedTicket = ({ ticket }) => {
    const { title, image, id ,cost } = ticket;
    return (
        <div className="rounded-t-md shadow-md hover:shadow-lg relative">
            <div>
                <img className="rounded-t-md" src={image} alt="" />
            </div>
            <div>
                <div className='mt-4 px-2 pb-4'>
                    <h2 className='text-[1rem] font-bold -mt-2 my-2'>{title}</h2>
                    <Link to={`eventdetails/${id}`}>
                        <button className='w-full border-blue-800 hover:bg-blue-800 hover:text-white text-blue-800 font-semibold border py-[4px] rounded-sm '>View Details</button>
                    </Link>
                    <p className='absolute rounded-tr-md bg-yellow-400 top-0 py-1 px-4 right-0'>Price: {cost}</p>
                </div>
            </div>
        </div>
    );
};

export default PurchasedTicket;
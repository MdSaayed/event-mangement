
import { Link } from 'react-router-dom';
import AosAnimation from '../aosAnimantion/AosAnimation';



const Event = ({ evn }) => {
    const { title, image, description, eventmonth, eventdate, id, cost } = evn;

    return (
        <AosAnimation>
            <Link data-aos="fade-up" to={`eventdetails/${id}`}>
                <div className='shadow hover:shadow-md rounded cursor-pointer relative'>
                    <div>
                        <img className='rounded-t' src={image} alt="" />
                    </div>
                    <div className='p-4 flex gap-3'>
                        <div>
                            <p className='font-bold text-blue-800 text-center'>{eventmonth?.slice(0, 3).toUpperCase()}</p>
                            <p className='text-xl text-center font-bold'>{eventdate}</p>
                        </div>
                        <div>
                            <h2 className='text-[1rem] font-bold'>{title}</h2>
                            <p>{description?.length >= 100 ? description?.slice(0, 100) : description}</p>
                            <p className='absolute bg-yellow-400 top-0 py-1 px-4 right-0'>Price: {cost}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </AosAnimation>
    );
};

export default Event;
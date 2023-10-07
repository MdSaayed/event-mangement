
import { Link } from 'react-router-dom';

const Event = ({ evn }) => {
    const { title, image, description, eventMonth, eventDate, id } = evn;

    return (
        <Link to={`eventdetails/${id}`}>
            <div className='shadow hover:shadow-md rounded cursor-pointer'>
                <div>
                    <img className='rounded-t' src={image} alt="" />
                </div>
                <div className='p-4 flex gap-3'>
                    <div>
                        <p className='font-bold text-blue-800 text-center'>{eventMonth.slice(0, 3).toUpperCase()}</p>
                        <p className='text-xl text-center font-bold'>{eventDate}</p>
                    </div>
                    <div>
                        <h2 className='text-[1rem] font-bold'>{title}</h2>
                        <p>{description.length >= 100 ? description.slice(0, 100) : description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Event;
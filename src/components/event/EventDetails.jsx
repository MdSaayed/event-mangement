import { useLoaderData, useParams } from "react-router-dom";
import EventDetail from "./EventDetail";


const EventDetails = () => {
    const event = useLoaderData();
    const {id} = useParams();


    return (
        <div className="max-w-6xl mx-auto my-4">
            {
                event?.map((evt)=> evt.id == id ? <EventDetail key={evt.id} evt={evt} />:'')
            }
        </div>
    );
};

export default EventDetails;
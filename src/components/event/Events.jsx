import { useEffect, useState } from "react";
import Event from "./Event";


const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('event.json')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    return (
        <div>
            <div className="max-w-6xl mx-auto my-16">
                <div>
                    <h2 className="text-3xl font-bold text-center my-8">Our Service</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                        events.map((evn) => <Event key={evn.id} evn={evn} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Events;
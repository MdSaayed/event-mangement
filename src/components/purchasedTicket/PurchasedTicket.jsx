import { useLoaderData } from "react-router-dom";
import { getTicketFormLocal } from "../../mangeTicket/Ticket";
import { useEffect, useState } from "react";

const PurchasedTicket = () => {
    const purshasedTicket = getTicketFormLocal();
    const event = useLoaderData();
    const yourTicket = event.filter(evt => purshasedTicket.includes(evt.id));
    const [showTicket, setShowTicket] = useState(null);
    console.log(showTicket);

    useEffect(() => {
        setShowTicket(yourTicket);
    }, [event])

    return (
        <div>
            <div className="max-w-6xl mx-auto">
                {
                    showTicket?.map((ticket) => <h2>{ticket.title}</h2>)
                }
            </div>
        </div>
    );
};

export default PurchasedTicket;
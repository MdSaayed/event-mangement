import { useLoaderData } from "react-router-dom";
import { getTicketFormLocal } from "../../mangeTicket/Ticket";
import { useEffect, useState } from "react";
import PurchasedTicket from "./PurchasedTicket";

const PurchasedTickets = () => {
    const purshasedTicket = getTicketFormLocal();
    const event = useLoaderData();
    const yourTicket = event.filter(evt => purshasedTicket.includes(evt.id));
    const [showTicket, setShowTicket] = useState(null);
    console.log(showTicket);

    useEffect(() => {
        setShowTicket(yourTicket);
    }, [event])

    return (
        <div className="py-12">
            <div>
                <h1 className="text-center text-3xl font-bold">Your Ticket</h1>
            </div>
            <div className="max-w-6xl mx-auto grid grid-col-2 md:grid-col-3 lg:grid-cols-4 gap-6 mt-12 px-2 lg:px-0">
                {
                    showTicket?.map((ticket) => <PurchasedTicket key={ticket.id} ticket={ticket} />)
                }
            </div>
        </div>
    );
};

export default PurchasedTickets;
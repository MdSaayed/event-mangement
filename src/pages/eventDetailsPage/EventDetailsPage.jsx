import React from 'react';
import EventDetails from '../../components/event/EventDetails';
import Footer from '../../components/footer/Footer';

const EventDetailsPage = () => {
    return (
        <div>
            <div>
                <EventDetails />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default EventDetailsPage;
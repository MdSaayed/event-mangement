
import AosAnimation from '../../components/aosAnimantion/AosAnimation';
import Footer from '../../components/footer/Footer';
import PurchasedTickets from './../../components/purchasedTicket/PurchasedTickets';

const PurchaseTicketPage = () => {
    return (
        <div>
            <div>
                <AosAnimation>
                    <PurchasedTickets />
                </AosAnimation>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default PurchaseTicketPage;
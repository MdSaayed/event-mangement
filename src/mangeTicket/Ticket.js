
const getTicketFormLocal = () => {
    const ticket = localStorage.getItem('ticket');
    if (ticket) {
        return JSON.parse(ticket);
    }
    return [];
}

const setTicketToLocal = (id) => {
    const prevTicket = getTicketFormLocal();
    prevTicket.push(id);
    localStorage.setItem('ticket', JSON.stringify(prevTicket));
}

export {getTicketFormLocal, setTicketToLocal}
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // setup state
  const [tickets, setTickets] = useState([]);
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [dietRestrictions, setDietRestrictions] = useState("");
  const [quantity,setQuantity] = useState("");

  const fetchTickets = async() => {
    try {      
      const response = await axios.get("/api/tickets");
      setTickets(response.data.tickets);
    } catch(error) {
      setError("error retrieving tickets: " + error);
    }
  }
  const createTicket = async() => {
    try {
      await axios.post("/api/tickets", {name: name, dietRestrictions: dietRestrictions,quantity:quantity});
    } catch(error) {
      setError("error adding a ticket: " + error);
    }
  }
  const deleteOneTicket = async(ticket) => {
    try {
      await axios.delete("/api/tickets/" + ticket.id);
    } catch(error) {
      setError("error deleting a ticket" + error);
    }
  }

  // fetch ticket data
  useEffect(() => {
    fetchTickets();
  },[]);

  const addTicket = async(e) => {
    e.preventDefault();
    await createTicket();
    fetchTickets();
    setName("");
    setDietRestrictions("");
    setQuantity("");
  }

  const deleteTicket = async(ticket) => {
    await deleteOneTicket(ticket);
    fetchTickets();
  }

  // render results
  return (
    <div className="App">
      {error}
      <h1>Please RSVP For Our Wedding!</h1>
      <form onSubmit={addTicket}>
        <div>
          <label>
            Your Family Name:
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
          </label>
        </div>
        <div>
          <label>
            How Many of you can Come?
            <textarea value={quantity} onChange={e=>setQuantity(e.target.value)}></textarea>
          </label>
        </div>
        <div>
          <label>
            Are There any Diet Restrictions?
            <textarea value={dietRestrictions} onChange={e=>setDietRestrictions(e.target.value)}></textarea>
          </label>
        </div>
        <input type="submit" value="Submit" />
      </form>
      <h1>Families Who Have RSVP'd</h1>
      {tickets.map( ticket => (
        <div key={ticket.id} className="ticket">
          <div className="problem">
            <p>The {ticket.name}'s will have {ticket.quantity} people coming.</p>
            <p>Please don't serve them {ticket.dietRestrictions}</p>
          </div>
          <button onClick={e => deleteTicket(ticket)}>Delete</button>
        </div>
      ))}     
    </div>
  );
}

export default App;
import React from "react";

function Rsvp() {
  return (
    <div>
      <h3>RSVP</h3>
      <form>
        <div className="form-item">
          <label>Name: </label>
          <input type="name" name="Name" required></input>
        </div>
        <div className="form-item">
          <label>Email: </label>
          <input type="email" name="Email" required></input>
        </div>
        <div className="form-item">
          <label>Phone: </label>
          <input type="tel" name="Phone"></input>
        </div>
        <div className="form-item">
          <label>Plan to attend:</label>
          <div className="radio">
            <input type="radio" id="hellno" name="RSVP" value="hellno"></input>
            <label for="hellno">Nope!</label>
            <input
              type="radio"
              id="probablynot"
              name="RSVP"
              value="probablynot"
            ></input>
            <label for="probablynot">Probably not</label>
            <input
              type="radio"
              id="planningto"
              name="RSVP"
              value="planningto"
            ></input>
            <label for="planningto">Planning to</label>
            <input
              type="radio"
              id="definately"
              name="RSVP"
              value="definately"
            ></input>
            <label for="definately">Definately!</label>
          </div>
        </div>
        <div className="form-item form-comments">
          <label>Comments:</label>
          <textarea rows="5" cols="80" name="Comments"></textarea>
        </div>
        <div className="form-item">
          <input type="checkbox" name="Reminders"></input>
          <label>Send Me Reminders</label>
        </div>
        <div className="form-item">
          <input type="checkbox" name="Updates"></input>
          <label>Send Me Updates</label>
        </div>
        <button type="submit" className="center">
          So Shall It Be
        </button>
      </form>
      <div className="thanks">
        <h3>Thank you!</h3>
        <p>Your RSVP has been submitted.</p>
        <p>You can re-submit at any time to change your response.</p>
      </div>
    </div>
  );
}

export default Rsvp;

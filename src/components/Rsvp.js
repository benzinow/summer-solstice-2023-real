import React, { useState } from "react";

function Rsvp() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = {};

    for (let [key, value] of formData.entries()) {
      jsonData[key] = value;
    }

    fetch("https://api.apispreadsheets.com/data/fpiAqYOsLbKtVjSk/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        accessKey: "6af328efd0185850855e8b25e67837b9",
        secretKey: "a82803e18c7161808ee3a75b7146244d",
      },
      body: JSON.stringify({ data: jsonData }),
    })
      .then((res) => {
        if (res.status === 201) {
          setSubmitted(true);
        } else {
          // Handle error
        }
      })
      .catch((error) => {
        // Handle error
      });
  };

  return (
    <div>
      {submitted ? (
        <div className="thanks">
          <h3>Thank you!</h3>
          <p>Your RSVP has been submitted.</p>
          <p>You can re-submit at any time to change your response.</p>
        </div>
      ) : (
        <div>
          <h3>RSVP</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-item">
              <label>Name: </label>
              <input type="text" name="Name" required />
            </div>
            <div className="form-item">
              <label>Email: </label>
              <input type="email" name="Email" required />
            </div>
            <div className="form-item">
              <label>Phone: </label>
              <input type="tel" name="Phone" />
            </div>
            <div className="form-item">
              <label>Plan to attend:</label>
              <div className="radio">
                <input
                  type="radio"
                  id="hellno"
                  name="RSVP"
                  value="hellno"
                  required
                />
                <label htmlFor="hellno">Nope!</label>
                <input
                  type="radio"
                  id="probablynot"
                  name="RSVP"
                  value="probablynot"
                />
                <label htmlFor="probablynot">Probably not</label>
                <input
                  type="radio"
                  id="planningto"
                  name="RSVP"
                  value="planningto"
                />
                <label htmlFor="planningto">Planning to</label>
                <input
                  type="radio"
                  id="definitely"
                  name="RSVP"
                  value="definitely"
                />
                <label htmlFor="definitely">Definitely!</label>
              </div>
            </div>
            <div className="form-item form-comments">
              <label>Comments:</label>
              <textarea rows="5" cols="80" name="Comments" />
            </div>
            <div className="form-item">
              <input type="checkbox" name="Reminders" />
              <label>Send Me Reminders</label>
            </div>
            <div className="form-item">
              <input type="checkbox" name="Updates" />
              <label>Send Me Updates</label>
            </div>
            <button type="submit" className="center">
              So Shall It Be
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Rsvp;

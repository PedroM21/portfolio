import "../css/Contact.css";

function Contact() {
  return (
    <div className="form-container">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="access_key"
          value="b515f509-2b58-40a2-9070-837f114a7a77"
        />
        <div className="input-container">
          <input type="text" name="name" placeholder="Name" required />
        </div>
        <div className="input-container">
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="input-container">
          <textarea
            name="message"
            placeholder="Type your message here."
            rows="8"
            cols="4"
          />
        </div>
        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

import "../css/Contact.css";

function Contact() {
  const KEY_VALUE = import.meta.env.VITE_KEY_VALUE;

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form action="https://api.web3forms.com/submit" method="POST">
        <input type="hidden" name="access_key" value={KEY_VALUE} />

        <div className="input-container">
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Type your message here."
            rows="8"
            cols="4"
          />
          <div className="submit-btn">
            <button type="submit">Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;

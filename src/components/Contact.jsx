import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
     emailjs.sendForm(
  "service_rqkhhqo",
  "template_0qrqi4k",
  form.current,
  "wmNQUSqnwQgtVhyWB"
)
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <p className="contact-subtitle">
          I'm currently looking for Junior Frontend or Full Stack Developer
          opportunities. Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Get in Touch</h3>

            <p>
              <strong>Email:</strong><br />
              ybachhav135@gmail.com
            </p>

            <p>
              <strong>Location:</strong><br />
              Northwich, Cheshire, United Kingdom
            </p>

            <p>
              <strong>LinkedIn:</strong><br />
              <a
                href="https://www.linkedin.com/in/yogita-bachhav-a50557237/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/yogita-bachhav-a50557237
              </a>
            </p>

            <p>
              <strong>GitHub:</strong><br />
              <a
                href="https://github.com/yogitabachhav22/"
                target="_blank"
                rel="noreferrer"
              >
                github.com/yogitabachhav22
              </a>
            </p>
          </div>

          <form
            ref={form}
            className="contact-form"
            onSubmit={sendEmail}
          >
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
            />

            <input
              type="email"
              name="from_email"
              placeholder="Your Email"
              required
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
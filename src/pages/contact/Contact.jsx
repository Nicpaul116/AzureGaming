import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact-wrap">
      <div className="contact-head">
        <h1>Contact</h1>
      </div>
      <div className="contact-all">
        <div className="contact-wrap1">
          <h3>Contact us</h3>
          <h1>Say Hello!</h1>
          <p>
            AZUREGaming is a site made to buy games easy at very low discounts.
            This website provides easy navigation to tabs and games. Feel free
            to contact us if you encounter any problems
          </p>

          <h6>Address</h6>
          <p>Glowackiego , Bydgoszcz, Poland</p>

          <h6>Phone</h6>
          <p>+48 894 932 784</p>

          <h6>Email</h6>
          <p>azuregaming@gmail.com</p>
        </div>
        <div className="contact-wrap2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d5693.809544660607!2d18.0520914417442!3d53.12900690207925!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1704230217573!5m2!1sen!2spl"
            style={{
              width: "100%",
              height: "350px",
              allowfullscreen: "",
              loading: "lazy",
              referrerpolicy: "no-referrer-when-downgrade",
            }}
          >
            i
          </iframe>
          <form>
            <div className="contact-form1">
              <input type="text" placeholder="Your Name..." />
              <input type="text" placeholder="Your Surname..." />
            </div>
            <div className="contact-form1">
              <input type="text" placeholder="Your Email..." />
              <input type="text" placeholder="Subject..." />
            </div>
            <div className="contact-description">
              <textarea
                name="message"
                id="message"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="contact-button">
              <button>Send Message Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

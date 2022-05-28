import React, { useState } from "react";
import { ImLocation } from "react-icons/im";
import { sendContact } from "../html";
const contactTemplate = {
  name: "",
  email: "",
  _subject: "",
  message: "",
};

const ContactMe = () => {
  const [contactDetails, setContactDetails] = useState(contactTemplate);
  const onContact = (e) => {
    e.preventDefault();
    sendContact(contactDetails);
    setContactDetails(contactTemplate);
  };
  return (
    <>
      <h1 className="project-title">Contact Me</h1>
      <div className="contact-container">
        <div className="details-container">
          <h4 className="contact-header" style={{ float: "left" }}>
            Contact Me here!
          </h4>
          <p>
            Here you can find all my my contact info if you want to say hi!
            Alternatively you can pop me a message using the form on the right.
          </p>
          <div className="contact-info">
            <div className="contact-box">
              <div className="icon">
                <i
                  style={{ marginLeft: "2.4px" }}
                  class="fas fa-map-marker-alt fa-sm"
                ></i>
                <span>Location: </span>
              </div>
              <div className="contact-text">
                <p>Worksop, United Kingdom</p>
              </div>
            </div>
            <div className="contact-box">
              <div class="icon">
                <i class="fas fa-envelope"></i>
                <span>Email: </span>
              </div>
              <p>
                <span>domoniccassidy20@gmail.com</span>
              </p>
            </div>
            <div className="contact-box">
              <div className="icon">
                <i class="fas fa-user-graduate fa-sm"></i>
                <span>Eductaion: </span>
              </div>
              <div className="contact-text">
                <p>Sheffield Hallam University</p>
              </div>
            </div>
            <div className="contact-box">
              <div class="icon">
                <i class="fas fa-phone"></i>
                <span>Mobile Number: </span>
              </div>
              <p>
                <span> 07522 6186755</span>
              </p>
            </div>
            <div className="contact-box">
              <div class="icon">
                <i class="fas fa-globe-africa"></i>
                <span>Languages: </span>
              </div>
              <p>
                <span>English, German (A2)</span>
              </p>
            </div>
          </div>
          <div className="link-box">
            <div className="link-icon">
              <a href="https://github.com/domoniccassidy" target="_blank">
                {" "}
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/domonic-cassidy-067855214/"
                target="_blank"
              >
                {" "}
                <i class="fa-brands fa-linkedin-in"></i>
              </a>
              <a href="#" target="_blank">
                {" "}
                <i class="fa-brands fa-discord"></i>
              </a>
              <a href="#" target="_blank">
                <i class="fa-brands fa-stack-overflow"></i>
              </a>
            </div>
          </div>
        </div>

        <form
          className="form-container"
          // action="https://formsubmit.co/af8b197f9449a222f084eab012f08edb"
          // method="POST"
          onSubmit={onContact}
        >
          <div className="form-row">
            <input
              name="name"
              type="text"
              placeholder="Enter Name Here"
              className="contact-field"
              id="contact-name"
              value={contactDetails.name}
              onChange={(e) =>
                setContactDetails({
                  ...contactDetails,
                  name: e.target.value,
                })
              }
            />
            <input
              name="email"
              type="text"
              placeholder="Enter Email Here"
              className="contact-field"
              id="contact-email"
              value={contactDetails.email}
              onChange={(e) =>
                setContactDetails({
                  ...contactDetails,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row">
            <input
              name="_subject"
              style={{ width: "100%" }}
              type="text"
              placeholder="Enter Subject Here"
              className="contact-field"
              id="contact-subject"
              value={contactDetails._subject}
              onChange={(e) =>
                setContactDetails({
                  ...contactDetails,
                  _subject: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row">
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/contact"
            ></input>
            <textarea
              name="message"
              style={{ width: "100%" }}
              type="text"
              placeholder="Message"
              className="contact-field"
              id="contact-message"
              value={contactDetails.message}
              onChange={(e) =>
                setContactDetails({
                  ...contactDetails,
                  message: e.target.value,
                })
              }
            />
          </div>
          <div className="form-row sub-holder">
            <button className="contact-button">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactMe;

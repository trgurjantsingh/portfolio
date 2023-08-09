import React, { useEffect, useState, useRef } from "react";
import "../styles/Contact.css";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import cont from "../assets/cvg.webp";
import Vid from "../assets/vid1.mp4";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const vidRef = useRef();
  useEffect(() => {
    vidRef.current.play();
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a backend or API
    console.log("Form submitted:", { name, email, message });
  };

  const handleOpen = (link) => {
    window.open(link);
  };

  return (
    <>
      <div className="contact" style={{ position: "realtive" }}>
        <video
          src={Vid}
          ref={vidRef}
          style={{
            position: "absolute",
            width: "100%",
            objectFit: "cover",
            height: "100vh",
            zIndex: "-1",
          }}
          muted
          autoPlay
          loop
        ></video>
        <div  className="image-container"> <img src={cont} className="image-contact" alt="" /></div>
        <div
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "center",
            zIndex: "2",
          }}
        >
          <div className="contact-form-container">
            <h2 style={{ color: "white" }}>Get In Touch</h2>

            <br />
            <form className="contact-form" onSubmit={handleSubmit}>
              <label style={{ color: "white" }}>Your Name</label>
              <input
                type="text"
                placeholder="What's your good name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label style={{ color: "white" }}>Your Email Address</label>
              <input
                type="email"
                placeholder="What's your web address?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label style={{ color: "white" }}>Your Message</label>
              <textarea
                placeholder="Your Message"
                value={message}
                style={{ height: "200px" }}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
              <div
                style={{
                  width: "100%",
                  textAlign: "start",
                  marginTop: "20px",
                }}
              >
                <button className="send-btn" type="submit">
                  Send
                </button>
              </div>
            </form>
            <div
              className="social-links"
              style={{ width: "100%", textAlign: "center" }}
            >
              <h3
                style={{ color: "white", marginTop: "10px", marginLeft: "5px" }}
              >
                Join me
              </h3>
              <div
                className="icons"
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "10px",
                  gap: "30px",
                  cursor: "pointer",
                }}
              >
                <BsGithub
                  style={{ color: "white", width: "5%", height: "5%" }}
                  onClick={() =>
                    handleOpen("https://github.com/trgurjantsingh")
                  }
                />

                <BsLinkedin
                  onClick={() =>
                    handleOpen(
                      "https://www.linkedin.com/in/gurjant-singh-539b47198/"
                    )
                  }
                  style={{ color: "#0A66C2", width: "5%", height: "5%" }}
                />
                <BsInstagram
                  onClick={() => handleOpen("https://www.instagram.com/")}
                  style={{ color: "#851c4e", width: "5%", height: "5%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

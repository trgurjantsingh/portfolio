import React from "react";
import "../styles/Projects.css";
import NG from "../assets/NG.png";
import project from "../assets/project1.jpg";
const Projects = () => {
  const handleOpen = (link) => {
    window.open(link);
  };

  return (
    <>
      <div className="project">
        <h1
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "50px",
            marginBottom: "10px",
          }}
        >
          Projects
        </h1>
        <div
          style={{ width: "100%", display: "flex", justifyContent: "center" }}
        >
          {/* <p
            style={{
              width: "45%",
              textAlign: "center",
              marginBottom: "10px",
              fontFamily: "'Raleway', sans-serif",
            }}
          >
            Following projects showcases my skills and experience through
            real-world examples of my work. Each project is briefly described
            with links to code repositories and live demos in it. It reflects my
            ability to solve complex problems, work with different technologies,
            and manage projects effectively.
          </p> */}
        </div>
        <div className="project-container">
          <div className="image-div">
            <img src={NG} className="image" alt="" />
          </div>
          <div className="content-div">
            <h1
              style={{
                color: "#ffa500",
                width: "100%",
                textAlign: "start",
                marginTop: "5px",
                fontSize: "35px",
              }}
            >
              Notarize Genie
            </h1>
            <p
              style={{
                width: "95%",
                textAlign: "start",
                marginTop: "10px",
                marginRight: "10px",
                color: "black",
                fontSize: "18px",
                fontFamily: "'Raleway', sans-serif",
                lineHeight: "30px",
              }}
            >
              Web application that enablesRemote Online Notarization connects
              signers to notaries via LIVE audio/video technology on a computer,
              tablet or mobile device.Remote Online Notarization is legal and
              acceptable in all 50 United States. The Remote Online Notaries on
              Notarize Genie are commissioned in states that allow their
              notaries to notarize documents online for anyone in the world with
              a valid US issued Social Security Number and proper, valid
              identification.These notarial acts take place within the notaries
              commissioned state’s boundaries which, make the transaction legal.
              Notaries Public are public officials in and of their state and
              they may only notarize documents while physically located in their
              state.
            </p>

            <div className="stacks">
              <p style={{ color: "green" }}>#NestJs</p>
              <p style={{ color: "blue" }}>#ReactJs</p>
              <p style={{ color: "violet" }}>#TypeScript</p>
              <p style={{ color: "green" }}>#SQL</p>
            </div>
            <button
              className="btn"
              onClick={() => handleOpen("https://www.notarizegenie.com/")}
            >
              Check it Out
            </button>

            {/* <div className="card">
            <h1
              style={{
                color: "#ffa500",
                width: "100%",
                textAlign: "center",
                marginTop: "5px",
              }}
            >
              Notarize Genie
            </h1>
            <p
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "10px",
                color: "white",
              }}
            >
              Web application that enablesRemote Online Notarization connects
              signers to notaries via LIVE audio/video technology on a computer,
              tablet or mobile device.Remote Online Notarization is legal and
              acceptable in all 50 United States. The Remote Online Notaries on
              Notarize Genie are commissioned in states that allow their
              notaries to notarize documents online for anyone in the world with
              a valid US issued Social Security Number and proper, valid
              identification
            </p>
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

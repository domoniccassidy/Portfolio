import React from "react";

const AboutMe = () => {
  return (
    <>
      {" "}
      <h1 className="project-title">About Me</h1>
      <div className="me-container">
        <div className="photo-container">
          <img
            className="me-picture"
            src="/images/Me2.jpg"
            alt="A dashing picture of yours truly"
          />
        </div>
        <div className="text-container">
          <h4 className="info-header">A little background</h4>
          <p className="aboutme-text">
            <p>
              {" "}
              Hiya, thanks for checking out my little part of the internet. I'm
              Domonic, a second year software engineering student, and welcome
              to my portfolio!
            </p>
            <p>
              I've been interested in technology for most of my life, leading me
              to choose computer science as one of my GCSEs, in which I got a
              seven.
            </p>
            <p>
              After finishing school, I did a BTEC in Systems Networking and
              cybersecurity, achieving a DDD. Which led me to starting a BEng in
              Software engineering at Sheffield Hallam, which I am still at
              today.
            </p>
            <p>
              On this site you'll be able to check out my favourite projects
              that I've been working on, take a look at my cv and get in touch
              with me.
            </p>
          </p>
          <div
            style={{ textAlign: "center", marginTop: "3em" }}
            className="download-container"
          >
            <a
              href={`https://docs.google.com/uc?export=download&id=1ysdNVn4eaNzCn3-6e1Ug9TjYl4yyFN_V`}
              className="download"
              download="hello"
            >
              Download My CV
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;

import React from "react";
import { useLocation } from "react-router-dom";
const Project = ({ projects }) => {
  let location = useLocation();
  const locationName = location.pathname.slice(9);

  const project = projects.find((p) => p._id === locationName);

  return (
    <div>
      <h1 className="project-title">{project?.projectName}</h1>
      <div className="video-holder">
        <iframe
          width="496"
          height="279"
          src={`https://www.youtube.com/embed/${project?.videoLink}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="project-details">
        <h3>Project Description</h3>
        <p
          style={{
            marginBottom: "1.5em",
          }}
        >
          {project?.projectDescription}
        </p>
        <div style={{ textAlign: "center" }}>
          <a
            href={`https://docs.google.com/uc?export=download&id=${project?.projectFile}`}
            className="download"
            download={`${project?.projectName}`}
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;

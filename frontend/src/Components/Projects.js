import React, { useEffect, useState } from "react";
import { getProjects } from "../html";
import { Link, useNavigate } from "react-router-dom";

const Projects = ({ isDomonic, setIsUpload, projects }) => {
  const [showModal, setShowModal] = useState(null);
  const [tags, setTags] = useState(["All Languages"]);
  const [selectedTag, setSelectedTag] = useState("");
  let nav = useNavigate();

  return (
    <>
      <h1 className="project-title">My Projects</h1>
      <select
        className="tag-select"
        name=""
        id=""
        onChange={(e) => setSelectedTag(e.target.value)}
      >
        {tags.map((t) => {
          if (t === "All Languages") {
            return <option value="">{t}</option>;
          } else {
            return <option value={t}>{t}</option>;
          }
        })}
      </select>
      <div className="container-projects">
        {projects.map((project, index) => {
          project.projectTags.map((t) => {
            !tags.includes(t) && setTags([...tags, t]);
          });
          if (selectedTag === "" || project.projectTags.includes(selectedTag)) {
            return (
              <div
                key={index}
                className="grid-item"
                id={project._id}
                onMouseEnter={() => setShowModal(index)}
                onMouseLeave={() => setShowModal(null)}
              >
                <img src={project.image} alt={project.projectName} />
                <div
                  onClick={() => nav(`/project/${project._id}`)}
                  className={`grid-item-modal ${
                    showModal === index && "block"
                  }`}
                >
                  <div className="grid-modal-text">
                    {project.projectName} <br />
                    <span className="grid-tag">
                      {project?.projectTags.map((e) => {
                        return e + " ";
                      })}
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        })}
        {isDomonic && (
          <div className="add-grid-item" onClick={() => setIsUpload(true)}>
            <div className="add-text"> Add new project </div>
          </div>
        )}{" "}
      </div>
    </>
  );
};

export default Projects;

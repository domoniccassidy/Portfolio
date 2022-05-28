import React, { useEffect, useState } from "react";
import Header from "./Header";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Project from "./Project";
import ContactMe from "./ContactMe";
import { signIn, addProject, getProjects } from "../html";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

const Portfolio = () => {
  const [selectedLink, setSelectedLink] = useState("Home");
  const [isDomonic, setIsDomonic] = useState(false);
  const [isSecret, setIsSecret] = useState(false);
  const [isUpload, setIsUpload] = useState(false);
  const [activeLabel, setIsActiveLabel] = useState("");
  const [loginForm, setLoginForm] = useState({
    username: "",
    password: "",
  });
  const [projectForm, setProjectForm] = useState({
    projectName: "",
    projectDescription: "",
    videoLink: "",
    projectFile: "",
    image: "",
    fakeImage: "",
    projectTags: "",
  });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects().then((p) => {
      setProjects(p.data.projects);
    });
  }, []);
  const secretClick = () => {
    if (isDomonic) setIsDomonic(false);
    else setIsSecret(true);
  };
  const secretButton = (e) => {
    e.preventDefault();

    signIn(loginForm)
      .then((e) => {
        setIsDomonic(true);
        setIsSecret(false);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  const addNewProject = (e) => {
    e.preventDefault();
    console.log(projectForm);

    const tempTags = projectForm.projectTags.split(" ");
    const tempProjectForm = { ...projectForm, projectTags: tempTags };
    addProject(tempProjectForm)
      .then((p) => {
        getProjects().then((p) => {
          setProjects(p.data.projects);
        });
        setProjectForm({
          projectName: "",
          projectDescription: "",
          videoLink: "",
          projectFile: "",
          image: "",
          fakeImage: "",
          projectTags: "",
        });
        setIsUpload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="main-container">
        {" "}
        <Header
          secretClick={secretClick}
          selectedLink={selectedLink}
          isDomonic={isDomonic}
          setSelectedLink={setSelectedLink}
        />
        <Routes>
          <Route
            path="/projects"
            element={Projects({ isDomonic, setIsUpload, projects })}
          />
          <Route path="/contact" element={ContactMe()} />
          <Route path="/project/:projectId" element={Project({ projects })} />
          <Route path="/" element={AboutMe()} />
        </Routes>
      </div>

      <div className={`modal ${isSecret && "block"}`}>
        {" "}
        <div className="modal-secret" style={{ margin: "10em auto" }}>
          <div className="">
            <div className="modal-header">Sign in</div>
            <div className="modal-form">
              <form style={{ paddingTop: "1vw", paddingBottom: "2vw" }}>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "username" ||
                        loginForm.username !== "") &&
                      "move-label"
                    }`}
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className={`${
                      (activeLabel == "username" ||
                        loginForm.username !== "") &&
                      "bottom-purple"
                    }`}
                    value={loginForm.username}
                    onFocus={() => setIsActiveLabel("username")}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, username: e.target.value })
                    }
                    type="text"
                    id="username"
                  />
                </div>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "password" ||
                        loginForm.password !== "") &&
                      "move-label"
                    }`}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className={`${
                      (activeLabel == "password" ||
                        loginForm.password !== "") &&
                      "bottom-purple"
                    }`}
                    value={loginForm.password}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onFocus={() => setIsActiveLabel("password")}
                    onChange={(e) =>
                      setLoginForm({ ...loginForm, password: e.target.value })
                    }
                    type="password"
                    id="password"
                  />
                </div>
                <div className="button-secret">
                  <button onClick={secretButton}>Sign in </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={`modal ${isUpload && "block"}`}>
        {" "}
        <div className="modal-secret" style={{ margin: "2em auto" }}>
          <div className="">
            <div className="modal-header">Add Project</div>
            <div className="modal-form">
              <form
                onSubmit={addNewProject}
                style={{ paddingTop: "1vw", paddingBottom: "2vw" }}
              >
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "projectName" ||
                        projectForm.projectName !== "") &&
                      "move-label"
                    }`}
                    htmlFor="projectName"
                  >
                    Project Name
                  </label>
                  <input
                    className={`${
                      (activeLabel == "projectName" ||
                        loginForm.username !== "") &&
                      "bottom-purple"
                    }`}
                    value={projectForm.projectName}
                    onFocus={() => setIsActiveLabel("projectName")}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        projectName: e.target.value,
                      })
                    }
                    type="text"
                    id="projectName"
                  />
                </div>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "projectDescription" ||
                        projectForm.projectDescription !== "") &&
                      "move-label"
                    }`}
                    htmlFor="projectDescription"
                  >
                    Project Description
                  </label>
                  <input
                    className={`${
                      (activeLabel == "projectDescription" ||
                        projectForm.projectDescription !== "") &&
                      "bottom-purple"
                    }`}
                    value={projectForm.projectDescription}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onFocus={() => setIsActiveLabel("projectDescription")}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        projectDescription: e.target.value,
                      })
                    }
                    type="text"
                    id="projectDescription  "
                  />
                </div>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "videoLink" ||
                        projectForm.videoLink !== "") &&
                      "move-label"
                    }`}
                    htmlFor="videoLink"
                  >
                    Video Link
                  </label>
                  <input
                    className={`${
                      (activeLabel == "videoLink" ||
                        projectForm.videoLink !== "") &&
                      "bottom-purple"
                    }`}
                    value={projectForm.videoLink}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onFocus={() => setIsActiveLabel("videoLink")}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        videoLink: e.target.value,
                      })
                    }
                    type="text"
                    id="videoLink  "
                  />
                </div>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "image" ||
                        projectForm.fakeImage !== "") &&
                      "move-label"
                    }`}
                    htmlFor="image"
                  >
                    Thumbnail
                  </label>
                  <label
                    className={`file-label ${
                      projectForm.fakeImage != "" && "un-indent"
                    }`}
                    htmlFor="image"
                  >
                    {projectForm.fakeImage != ""
                      ? projectForm.fakeImage.replace(/^.*[\\\/]/, "")
                      : "asdf"}
                  </label>
                  <input
                    className={`${
                      (activeLabel == "image" || projectForm.image !== "") &&
                      "bottom-purple"
                    }`}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onFocus={() => setIsActiveLabel("image")}
                    onChange={(e) => {
                      var reader = new FileReader();
                      reader.onloadend = function () {
                        setProjectForm({
                          ...projectForm,
                          fakeImage: e.target.files[0].name,
                          image: reader.result,
                        });
                      };
                      reader.readAsDataURL(e.target.files[0]);
                    }}
                    type="file"
                    id="image"
                    accept="image/*"
                  />
                </div>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "projectTags" ||
                        projectForm.projectTags !== "") &&
                      "move-label"
                    }`}
                    htmlFor="projectTags"
                  >
                    Project Tags
                  </label>
                  <input
                    className={`${
                      (activeLabel == "projectTags" ||
                        loginForm.username !== "") &&
                      "bottom-purple"
                    }`}
                    value={projectForm.projectTags}
                    onFocus={() => setIsActiveLabel("projectTags")}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        projectTags: e.target.value,
                      })
                    }
                    type="text"
                    id="projectTags"
                  />
                </div>
                <div className="form-input">
                  <label
                    className={`${
                      (activeLabel == "projectFile" ||
                        projectForm.projectFile !== "") &&
                      "move-label"
                    }`}
                    htmlFor="projectTags"
                  >
                    Project File Link
                  </label>
                  <input
                    className={`${
                      (activeLabel == "projectFile" ||
                        loginForm.projectFile !== "") &&
                      "bottom-purple"
                    }`}
                    value={projectForm.projectFile}
                    onFocus={() => setIsActiveLabel("projectFile")}
                    onBlur={(e) => {
                      if (e.target.value == "") {
                        setIsActiveLabel("");
                      }
                    }}
                    onChange={(e) =>
                      setProjectForm({
                        ...projectForm,
                        projectFile: e.target.value,
                      })
                    }
                    type="text"
                    id="projectFile"
                  />
                </div>
                <div className="button-secret">
                  <button>Add Project </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;

import ProjectModel from "../Models/ProjectModel.js";

export const addProject = async (req, res) => {
  const {
    projectName,
    projectDescription,
    videoLink,
    image,
    projectFile,
    fakeImage,
    projectTags,
  } = req.body;

  try {
    const newProject = new ProjectModel({
      projectName,
      projectDescription,
      videoLink,
      image,
      projectFile,
      fakeImage,
      projectTags,
    });
    console.log(newProject);
    const gotProject = await newProject.save();

    return res.status(200).json({ gotProject });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getProjects = async (req, res) => {
  try {
    const projects = await ProjectModel.find();
    return res.status(200).json({ projects });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
};

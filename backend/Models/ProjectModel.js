import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  projectFile: {
    type: String,
    required: true,
  },
  projectTags: {
    type: Array,
    default: [],
  },
});

export default new mongoose.model("projects", projectSchema);

const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  linkGithub: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("projects", ProjectSchema);

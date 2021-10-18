const Mongoose = require("mongoose");

const ProfileSchema = new Mongoose.Schema({
  image: {
    primaryImage: {
      type: String,
      required: true,
    },
    secondaryImage: {
      type: String,
      required: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: String,
    required: true,
  },
  description: {
    biography: {
      type: String,
      required: true,
    },
    contact: {
      location: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      number: {
        type: String,
        required: true,
      },
    },
    services: [{ type: String, required: true }],
  },
  social: {
    facebook: {
      type: String,
      required: true,
    },
    youtube: {
      type: String,
      required: true,
    },
    twitter: {
      type: String,
      required: true,
    },
  },
  blogs: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "blogs",
  },
  projects: {
    type: mongoose.Schema.Types.ObjectId,
    ref: projects,
  },
});

module.exports = mongoose.model("profiles", ProfileSchema);

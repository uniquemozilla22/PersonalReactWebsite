const { ProfileModel } = require("../../Database/Schema/Schemas");

const postProfile = (req, res) => {
  res.send("The post profile route is working fine");
};
const getProfile = (req, res) => {
  res.send("The get profile route is working fine");
};
const deleteProfile = (req, res) => {
  res.send("The delete profile route is working fine");
};
module.exports = { postProfile, getProfile, deleteProfile };

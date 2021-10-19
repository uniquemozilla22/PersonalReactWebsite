const { BlogModel } = require("../../Database/Schema/Schemas");

const postBlog = (req, res) => {
  console.log(req.body);
  const { title, tags, content } = req.body;
  const timestamp = new Date();

  tags = tags.split(",").map((tag) => console.log(tag));

  // res.send(rags);
};
const getBlog = (req, res) => {
  res.send("The get blog route is working fine");
};
const deleteBlog = (req, res) => {
  res.send("The delete blog route is working fine");
};
module.exports = { postBlog, getBlog, deleteBlog };

const { postBlog, getBlog, deleteBlog } = require("./Blog/blogRoute.js");
const {
  postProfile,
  getProfile,
  deleteProfile,
} = require("./Profile/profileRoute.js");

const routes = (router) => {
  router.get("/", (req, res) => {
    res.send("<h1>THis is the server running</h1>");
  });

  /* Routes for Blog*/
  router.get("/blog", getBlog);
  router.post("/blog/post", postBlog);
  router.delete("/blog/delete", deleteBlog);

  /* Routes for Profile*/

  router.get("/profile", getProfile);
  router.post("/profile/post", postProfile);
  router.delete("/profile/delete", deleteProfile);
};

module.exports = routes;

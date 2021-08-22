const routes = (router) => {
  router.get("/", (req, res) => {
    res.send("<h1>THis is the server running</h1>");
  });
};

module.exports = routes;

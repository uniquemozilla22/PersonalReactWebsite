const routes = (router) => {
  router.get("/", (req, res) => {
    res.send("<h1>THis is the server running");
  });
};

module.exports = routes;

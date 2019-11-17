"use strict";

const SwaggerExpress = require("swagger-express-mw"),
  bodyParser = require("body-parser"),
  app = require("express")();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

module.exports = app; // for testing

const config = {
  appRoot: __dirname // required config
};

SwaggerExpress.create(config, function(err, swaggerExpress) {
  if (err) {
    throw err;
  }

  // install middleware
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port);

  if (swaggerExpress.runner.swagger.paths["/hey"]) {
    console.log("\ntry this:\ncurl http://127.0.0.1:" + port + "/hey");
    console.log("or this:\ncurl http://127.0.0.1:" + port + "/hey?name=Duuude");
  }
});

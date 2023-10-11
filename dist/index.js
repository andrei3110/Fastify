"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app = require('fastify')();
app.register(require("point-of-view"), {
    engine: {
        ejs: require("ejs"),
    },
});
app.get('/', (req, res) => {
    return res.view("/templates/index.ejs");
});
app.listen(8300, () => {
    console.log("Server Started !");
});
// registerRoutes(app);

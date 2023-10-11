import fastify from "fastify";
import { join } from 'path';
import { ItemsController } from "./controllers/ItemsController";
import { request } from "https";
import { registerRoutes } from './routes/index';

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
    console.log("Server Started !")
});

// registerRoutes(app);
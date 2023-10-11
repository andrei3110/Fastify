import fastify, { FastifyInstance } from "fastify";
import { ItemsController } from "../controllers/ItemsController";
import { request } from "https";
import { Interface } from "readline";

const itemsController = new ItemsController();


export function registerRoutes(app: FastifyInstance) {
    // app.get("/",itemsController.index);
    app.register(require("point-of-view"), {
      engine: {
        ejs: require("ejs"),
      },
    });

    
}

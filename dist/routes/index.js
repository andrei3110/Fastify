"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerRoutes = void 0;
const ItemsController_1 = require("../controllers/ItemsController");
const itemsController = new ItemsController_1.ItemsController();
function registerRoutes(app) {
    // app.get("/",itemsController.index);
    app.register(require("point-of-view"), {
        engine: {
            ejs: require("ejs"),
        },
    });
}
exports.registerRoutes = registerRoutes;

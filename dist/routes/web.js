"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.web = void 0;
const web = async (app) => {
    const article = {
        id: "1",
        name: "node.js fastify",
        desc: "going fasting with jumping course 0 to 100 ><"
    };
    app.get('/', async (req, res) => {
        return res.send('hello');
    });
};
exports.web = web;
exports.default = exports.web;

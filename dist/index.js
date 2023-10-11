"use strict";
const fastify = require("fastify")();
fastify.register(require("@fastify/view"), {
    engine: {
        ejs: require("ejs"),
    },
});
fastify.get('/', (req, res) => {
    res.view("/templates/index.ejs");
});
fastify.listen({ host: '0.0.0.0', port: 8300 }, (err) => {
    if (err) {
        console.error(err);
    }
    console.log(`Server listening...`);
});

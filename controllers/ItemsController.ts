import fastify, { FastifyInstance } from "fastify";
import { request } from "https";
export class ItemsController {

    index() {
        return 'hello world';
    }
}
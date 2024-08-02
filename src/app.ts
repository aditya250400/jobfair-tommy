import { Server } from "./server";
import prisma from '../prisma/db'
import listEndpoints from 'express-list-endpoints';

(async () => {
    await prisma.$connect()
    const server = new Server()
    await server.start()

     const app = server.app;

    // Log routes to the console
    const routes = listEndpoints(app);
    console.log(routes);
})()